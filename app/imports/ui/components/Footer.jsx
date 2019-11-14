import React from 'react';
import { Input, Label } from 'semantic-ui-react';
/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">

            <hr />
            <br />
            <Input focus placeholder='Email or Username' /> <br />
            <Input focus placeholder='Password' /> <br />
            <Label color="black">Log in</Label> <br />

          </div>
        </footer>
    );
  }
}

export default Footer;
