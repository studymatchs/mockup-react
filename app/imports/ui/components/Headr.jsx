import React from 'react';
import { Container, Menu, Icon, Dropdown } from 'semantic-ui-react';

export default class Headr extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu borderless={true} className="topmenu">
              <Menu.Item position='left'>Landing</Menu.Item>
              <Menu.Item>Edit profile</Menu.Item>
              <Menu.Item>Teams</Menu.Item>
              <Menu.Item>Schedule</Menu.Item>
              <Menu.Item position='right'>Create account</Menu.Item>
              <Menu.Item>Login</Menu.Item>
            </Menu>
          </Container>
        </Menu>
    );
  }
}