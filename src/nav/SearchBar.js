import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'



export default class SearchBar extends Component {
    state = {
        view: "",
        isLoading: false,
        value: ""
    }
    
    handleFieldChange = (e) => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange);
    }
    render() {

        let placeholderText = "Search..."
        if (this.props.view === "customers"){
            placeholderText = "Search for customer..."
        } else if (this.props.view === "products"){
            placeholderText = "Search for products..."
        } else if (this.props.view === "orders"){
            placeholderText = "Search for order by ID"
        } else if (this.props.view === "employees"){
            placeholderText = "Search employees"
        } else if (this.props.view === "computers"){
            placeholderText = "Search computers by ID"
        } else if (this.props.view === "departments"){
            placeholderText = "Search departments"
        } else if (this.props.view === "training"){
            placeholderText = "Search trainings"
        }
        console.log("placeholderText", placeholderText)
        return (
            <>
            <Input
            size='large'
            icon='search'
            type="text"
            onChange={this.handleFieldChange}
            id="value"
            placeholder={placeholderText}
            />

            </>
        )
    }

}