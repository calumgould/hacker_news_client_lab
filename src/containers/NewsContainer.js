import React, { Component } from 'react';

class NewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: []
         }
    }

    componentDidMount(){

        const idUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json'

        fetch(idUrl)
        .then(res => res.json())
        .then(articleIds => {

            const first10ArticleIds = articleIds.slice(0, 10)
            const articleUrls = first10ArticleIds.map(articleId => {
                return `https://hacker-news.firebaseio.com/v0/item/${articleId}.json`
            })

            Promise.all(articleUrls.map(articleUrl => {
                return fetch(articleUrl)
                .then(res => res.json())
            }))
            .then(articles => {
                this.setState({articles})
            })

        })

    }




    render() { 
        return ( 
            <div>
                <h2>News Container</h2>
            </div>
         );
    }
}
 
export default NewsContainer;