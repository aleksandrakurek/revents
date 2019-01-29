import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const SignedInMenu = ({ signOut, profile, auth }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={profile.photoURL || "/assets/user.png"}/>
      <Dropdown pointing="top left" text={profile.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/createEvent' text="Utworz wydarzenie" icon="plus"/>
          <Dropdown.Item as={Link} to='/events' text="Moje wydarzenia" icon="calendar"/>
          <Dropdown.Item as={Link} to='/people' text="Moja społeczność" icon="users"/>
          <Dropdown.Item as={Link} to={`/profile/${auth.uid}`} text="Mój profil" icon="user"/>
          <Dropdown.Item as={Link} to='/settings' text="Ustawienia" icon="settings"/>
          <Dropdown.Item onClick={signOut} text="Wyloguj się" icon="power"/>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
