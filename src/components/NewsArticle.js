import React, {Component} from 'react';
import Popup from './Popup'

class NewsArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            showPopup: false
        }
        this.togglePopup = this.togglePopup.bind(this)
    }


    convertTime(){
        let time = this.props.time
        let date = new Date(time * 1000)
        return date.toUTCString()
    }


    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }


    render() { 
        return ( 
            <li>
                <div>
                    <h3>{this.props.title}</h3>
                    <p>by <b>{this.props.by}</b></p>
                    <p>{this.convertTime()}</p>
                    <button onClick={this.togglePopup}>Show</button>
                </div>
                <div>
                {this.state.showPopup ? 
                    <Popup text="close" url={this.props.url}>
                    </Popup>
                    : null
                }
                </div>
            </li>
            
         );
    }
}
 
export default NewsArticle;