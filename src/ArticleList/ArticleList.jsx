﻿import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import module from "./ArticleList.module.css";

const ArticleList = ({ articles }) => (
    <ul module={module.articles}>

        {
            // this iterates through the articles JSON and
            // calls your ArticleListItem component for each article
            Object.values(articles).map(article => {
                return <ArticleListItem
                    key={article.slug}
                    title={article.title}
                    date={article.pubDate}
                    year={article.pubYear}
                    author={article.author}
                    shortText={article.shortText}
                />
            })
        }
    </ul>
);

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
}

export default ArticleList;