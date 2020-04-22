import React, { Component } from 'react';

class NewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: []
         }
    }

    componentDidMount() {

        const articleIds = 'https://hacker-news.firebaseio.com/v0/topstories.json'
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