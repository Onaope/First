import React from "react";
import "./Navbar.css";
import Logo from '../Hbsp.png';

class Navbar extends Component {
    render() { <
        nav className = "navbar" >
            <
            div className = "logo-holder" > < img src = { Logo }
        alt = "logo"
        className = "navbar-logo" / > < /
        div > <
            ul className = "navbar-link" >
            <
            li className = "navbar-link-item" > Engineering < /li>  <
        li className = "navbar-link-item" > UX < /li> <
        li className = "navbar-link-item" > Product < /li> <
        li className = "navbar-link-item" > Culture < /li >  < /
        ul >
            <
            /nav >

    };

}
export default Navbar