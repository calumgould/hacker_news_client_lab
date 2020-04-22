import React, { Component } from 'react';

class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newsFilter: ""
         }
         this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            newsFilter: event.target.value
        })
        this.props.onChange(event.target.value)
    }

    render() { 
        return ( 
            <div>
                <label for="filter">Filter by title:</label>
                <input type="text" id="filter"
                    value={this.state.newsFilter}
                    onChange={this.handleChange}>
                </input>
            </div>
         );
    }
}
 
export default FilterForm;