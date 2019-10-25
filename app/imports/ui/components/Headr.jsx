import React from 'react';
import { Container, Menu, Icon, Dropdown } from 'semantic-ui-react';

export default class Headr extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu borderless={true} className="topmenu">
              <Menu.Item><Icon name="th list"/></Menu.Item>
              <Menu.Item>HOME</Menu.Item>
              <Menu.Item>FOR GAMEMASTERS</Menu.Item>
              <Menu.Item>FOR WRITERS</Menu.Item>
              <Menu.Item>FOR ROLEPLAYERS</Menu.Item>
              <Menu.Item position='left'>PRICING</Menu.Item>
              <Menu.Item>LOGIN</Menu.Item>
              <Menu.Item>CREATE YOUR ACCOUNT</Menu.Item>
            </Menu>
          </Container>
        </Menu>
    );
  }
}