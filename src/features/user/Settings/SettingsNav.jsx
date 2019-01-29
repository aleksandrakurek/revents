import React from 'react';
import { Grid, Menu, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

const SettingsNav = () => {
  return (
    <Grid.Column width={4}>
      <Menu vertical>
        <Header icon="user" attached inverted color="grey" content="Profile"/>
        <Menu.Item as={NavLink} to='/settings/basic'>Podstawowe informace</Menu.Item>
        <Menu.Item as={NavLink} to='/settings/about'>O mnie</Menu.Item>
        <Menu.Item as={NavLink} to='/settings/photos'>Moje zdjęcia</Menu.Item>
      </Menu>
      <Grid.Row />
      <Menu vertical>
        <Header
          icon="settings"
          attached
          inverted
          color="grey"
          content="Konto"
        />
        <Menu.Item as={NavLink} to='/settings/account'>Moje konto</Menu.Item>
      </Menu>
    </Grid.Column>
  );
};

export default SettingsNav;
