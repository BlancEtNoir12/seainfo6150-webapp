import React from "react";
import PropTypes from 'prop-types';
import Item from './ArticleListItem';
import styles from './ArticleList.module.css'

const ArticleList = props => {
    return (
        <ul className={styles.body}>
            {props.articles.map(article => (
                <li key={article.slug}>
                    <Item article={article}></Item>
                </li>
            ))}
        </ul>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};
export default ArticleList;
