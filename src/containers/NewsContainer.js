import React, { Component } from 'react';
import NewsList from '../components/NewsList'
import FilterForm from '../components/FilterForm'


class NewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: [],
            filteredArticles: []
         }
         this.filterArticles = this.filterArticles.bind(this)
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
                this.setState({
                    articles: articles,
                    filteredArticles: articles
                })
            })

        })

    }

    filterArticles(newsFilter) {
        let filteredArticles = this.state.articles
        filteredArticles = filteredArticles.filter((article) => {
            let articleName = article.title.toLowerCase()
            return articleName.indexOf(
                newsFilter.toLowerCase()) !== -1
        })
        this.setState({
            filteredArticles
        })
    }




    render() { 
        return ( 
            <div>
                <h1>Top Stories</h1>
                <FilterForm onChange={this.filterArticles}/>
                <NewsList articles={this.state.filteredArticles} />
            </div>
         );
    }
}
 
export default NewsContainer;