import React from 'react';
import { Label, Grid, Input, List } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <footer>
    <div style={divStyle} className="ui center aligned container">
        <hr />
        Department of Information and Computer Sciences <br />
    University of Hawaii<br />
    Honolulu, HI 96822 <br />

    <a href="http://ics-software-engineering.github.io/meteor-application-template-react">Template Home Page</a>

  </div>
  </footer>

    );
  }
}