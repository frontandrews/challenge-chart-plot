import React from "react";
import './header.css'
export default class Header extends React.Component {
    render() {
      return (
        <header className="header"  style={{ height: '60px' }}>
            <p>{this.props.myName}' Challenge</p>
        </header>
      );
    }
  }
