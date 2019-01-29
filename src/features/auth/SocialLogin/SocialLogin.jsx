import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { socialLogin } from '../authActions'

const SocialLogin = ({ socialLogin }) => {
  return (
    <div>
      <Button
        onClick={() => socialLogin('facebook')}
        type="button"
        style={{ marginBottom: '10px' }}
        fluid
        color="facebook"
      >
        <Icon name="facebook"/> Zaloguj przez Facebook
      </Button>

      <Button onClick={() => socialLogin('google')} type="button" fluid color="google plus">
        <Icon name="google plus"/>
        Zaloguj przez Google
      </Button>
    </div>
  );
};

export default SocialLogin;
