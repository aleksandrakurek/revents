import React from 'react';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { login, socialLogin } from '../authActions'
import SocialLogin from '../SocialLogin/SocialLogin'

const actions = {
  login,
  socialLogin
}

const LoginForm = ({ login, handleSubmit, error, socialLogin }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="Hasło"
        />
        {error && <Label basic color='red'>{error}</Label>}
        <Button fluid size="large" color="teal">
          Zaloguj
        </Button>
        <Divider horizontal>lub</Divider>
        <SocialLogin socialLogin={socialLogin}/>
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({ form: 'loginForm' })(LoginForm));
