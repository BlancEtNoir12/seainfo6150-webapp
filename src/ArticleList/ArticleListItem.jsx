import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton';
import styles from './ArticleListItem.module.css';

const Item = props => {
    return (
        <div className={styles.body} >
            <h1 className={styles.header3}> { props.article.title }</h1>
            <p>{props.article.shortText}</p>
            <time className={styles.time} dateTime={props.article.pubDate}>
                {props.article.pubDate}
                <SlugButton info={props.article}>
                    show article slug
            </SlugButton>
            </time>
        </div>
    );
};

Item.propTypes = {
    article: PropTypes.object.isRequired
};

export default Item;