import React from "react";
import './footer.css';
export default class Footer extends React.Component {
    render() {
      return (
        <footer className="footer">
            <button onClick={this.props.handleClick}>GENERATE CHART</button>
        </footer>
      );
    }
  }
