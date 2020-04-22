import React from 'react';
import NewsArticle from './NewsArticle'

const NewsList = (props) => {

    const newsNodes = props.articles.map(article => {

        return ( 
            <NewsArticle title={article.title} by={article.by} time={article.time} url={article.url} key={article.id}></NewsArticle>
         );

    })

    return (
        <ul>
            {newsNodes}
        </ul>
    )

}
 
export default NewsList;