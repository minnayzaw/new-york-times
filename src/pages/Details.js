import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Header from "../pages/Header";
import ArticleDetails from "../components/articles/ArticleDetail";
import Footer from "../pages/Footer";
import Error from "../components/error/Error";

function Details() {
  const [isRedirect, setIsRedirect] = useState(false);
  const [error, setError] = useState(false);

  const article = JSON.parse(localStorage.getItem("articles")).filter(
    articles => {
      return articles._id.includes(window.location.pathname.split("/").pop());
    }
  );

  useEffect(() => {
    article[0]._id.split("/").pop() !==
      window.location.pathname.split("/").pop() && setError(true);
  }, [article]);

  if (isRedirect) {
    localStorage.setItem("back", true);
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        <button onClick={() => setIsRedirect(true)}>&lt; Back to Home</button>
      </div>
      {!error && <ArticleDetails article={article} />}
      {error && <Error />}
      <Footer />
    </React.Fragment>
  );
}

export default Details;
