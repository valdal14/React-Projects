import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    // React method
    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render(){
        if(this.state.hasError) {
            return <h1>{ this.state.errorMessage }</h1>;
        } else {
            // refers to any elements between the opening and closing tag of our Components
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary;