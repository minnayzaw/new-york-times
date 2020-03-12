import React from "react";

function ArticlesFilter(props) {
  const { filter } = props;
  return (
    <div className="container-fluid">
      <div className="row fh5co-post-entry">
        <article className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-xxs-12 text-left">
          <span className="articlesFilterLabel">Order by</span>
          <select onChange={e => filter("order", e.target.value)}>
            <option>-- Select --</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </article>
        <article className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-xxs-12 text-right">
          <span className="articlesFilterLabel">Search</span>
          <input
            type="text"
            name="search-box"
            onBlur={e => filter("search", e.target.value)}
          />
        </article>
      </div>
    </div>
  );
}

export default ArticlesFilter;
