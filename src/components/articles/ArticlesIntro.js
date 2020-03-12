import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Moment from "react-moment";
import { API_IMAGE_URL} from "../../config/constants";

function ArticlesIntro(props) {
  const [articleId, setArticleId] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);

  const {articles} = props;
  
  const displayArticleDetail = id => {
    setIsRedirect(true);
    setArticleId(id);
  };

  if (isRedirect) {
    return <Redirect to={"/article/" + articleId} />;
  }
  return (
    <div className="container-fluid">
      <div className="row fh5co-post-entry">
        {articles.map((article, index) => {
         
          return (
            <React.Fragment key={index}>
              <article
                className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12"
                onClick={() => {
                  displayArticleDetail(article._id.split("/").pop());
                }}
              >
                <figure
                  className={article.multimedia[0] ? "" : "no-image-available"}
                >
                  <img
                    src={
                      article.multimedia[0]
                        ? API_IMAGE_URL + article.multimedia[0].url
                        : "images/no_image_available.png"
                    }
                    alt="articles-intro"
                    width={200}
                    height={150}
                  />
                </figure>
                <h2 className="fh5co-article-title">
                  {article.headline ? article.headline.main : ""}
                </h2>
                <span className="fh5co-meta fh5co-date">
                  <Moment format="D MMM YYYY">
                    {article.pub_date ? article.pub_date : ""}
                  </Moment>
                </span>
              </article>
              {index > 2 && index !== 5 && index % 2 !== 0 && (
                <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ArticlesIntro;
