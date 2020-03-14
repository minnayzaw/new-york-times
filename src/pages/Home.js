import React, { useEffect, useState } from "react";
import ArticlesFilter from "../components/articles/ArticlesFilter";
import ArticlesIntro from "../components/articles/ArticlesIntro";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import Error from "../components/error/Error";
import axios from "axios";
import { API_URL, API_KEY } from "../config/constants";

function Home(props) {
  const [fetchData, setFetchData] = useState(
    localStorage.getItem("back") ? false : true
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [order, setOrder] = useState("");
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState(
    !fetchData && localStorage.getItem("articles")
      ? JSON.parse(localStorage.getItem("articles"))
      : []
  );

  useEffect(() => {
    if (fetchData) {
      setLoading(true);
      axios
        .get(
          API_URL + "?api-key=" + API_KEY + "&q=" + search + "&sort=" + order
        )
        .then(function(response) {
          setLoading(false);
          setArticles(response.data.response.docs);
          localStorage.setItem(
            "articles",
            JSON.stringify(response.data.response.docs)
          );
        })
        .catch(function(error) {
          setLoading(false);
          setError(true);
        });
    }
    return () => {
      setFetchData(false);
    };
  }, [fetchData, search, order]);

  const articlesFilter = (type, value) => {
    if (value && type) {
      setFetchData(true);
      if(type === "order"){
          setOrder(value);
      }else{
        setSearch(value);
      }
    }
  };

  return (
    <React.Fragment>
      <Header />
      <ArticlesFilter filter={articlesFilter} />
      {!error && !loading && <ArticlesIntro articles={articles} />}
      {error && <Error />}
      {loading && <div className="loader"></div>}
      <Footer />
    </React.Fragment>
  );
}

export default Home;
