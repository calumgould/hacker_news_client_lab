import React from 'react';

const NewsArticle = (props) => {
    

    function convertTime(){
        let time = props.time
        let date = new Date(time * 1000)
        return date.toUTCString()
    }

    return ( 
        <li>
            <a href={props.url} target="blank">
                <h3>{props.title}</h3>
                <p>by <b>{props.by}</b></p>
                <p>{convertTime()}</p>
            </a>
        </li>
     );
}
 
export default NewsArticle;