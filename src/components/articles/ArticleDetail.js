import React from "react";
import Moment from "react-moment";
import { API_IMAGE_URL} from "../../config/constants";

function ArticleDetail(props) {
  const { article } = props;
  return (
    <div className="container-fluid">
      <div className="row fh5co-post-entry">
        <article className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xxs-12">
          <h2 className="fh5co-article-title">
            {article[0].headline ? article[0].headline.main : ""}
          </h2>
          <figure
            className={
              article[0].multimedia[0] ? null : "no-image-detail-available"
            }
          >
            <img
              src={
                article[0].multimedia[0]
                  ? API_IMAGE_URL + article[0].multimedia[0].url
                  : "/images/no_image_available.png"
              }
              alt="articles-intro"
              width={400}
              height={300}
            />
          </figure>
          <p>{article[0].abstract ? article[0].abstract : ""}</p>
          <span className="fh5co-meta fh5co-date">
            <Moment format="D MMM YYYY">
              {article[0].pub_date ? article[0].pub_date : ""}
            </Moment>
          </span>
        </article>
      </div>
    </div>
  );
}

export default ArticleDetail;
