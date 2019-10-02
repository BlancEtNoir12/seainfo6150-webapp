import React from "react";
import PropTypes from 'prop-types';
import Button from './ArticleListItem';

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
          <li key={article.slug}>
              <h3>{article.title}</h3>
              <p>{article.shortText}</p>
              <p>{article.pubDate}
                  <Button info={article} />
              </p>
          </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
