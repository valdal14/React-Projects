import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: 'Ristorante Con Fusion',
            homePageUrl: '/index.html'
        };
    }

    render() {
        return(
            <div>
                <Navbar bg="primary" expand="lg">
                    <div className="container">
                        <NavbarBrand href={this.state.homePageUrl} className="logoName">{this.state.companyName}</NavbarBrand>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
