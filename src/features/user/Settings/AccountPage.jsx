import React from 'react';
import {
  Segment,
  Header,
  Form,
  Divider,
  Label,
  Button,
  Icon
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {
  combineValidators,
  matchesField,
  isRequired,
  composeValidators
} from 'revalidate';
import TextInput from '../../../app/common/form/TextInput';

const validate = combineValidators({
  newPassword1: isRequired({ message: 'Podaj hasło' }),
  newPassword2: composeValidators(
    isRequired({ message: 'Potwierdź hasło' }),
    matchesField('newPassword1')({ message: 'Hasła nie są identyczne' })
  )()
});

const AccountPage = ({
  error,
  invalid,
  submitting,
  handleSubmit,
  updatePassword,
  providerId
}) => {
  return (
    <Segment>
      <Header dividing size="large" content="Account"/>
      {providerId &&
      providerId === 'password' && (
        <div>
          <Header color="teal" sub content="Zmień hasło"/>
          <p>Użyj tego formularza, aby zaaktualizować ustawienia konta</p>
          <Form onSubmit={handleSubmit(updatePassword)}>
            <Field
              width={8}
              name="newPassword1"
              type="password"
              pointing="left"
              inline={true}
              component={TextInput}
              basic={true}
              placeholder="Nowe hasło"
            />
            <Field
              width={8}
              name="newPassword2"
              type="password"
              inline={true}
              basic={true}
              pointing="left"
              component={TextInput}
              placeholder="Potwierdź hasło"
            />
            {error && (
              <Label basic color="red">
                {error}
              </Label>
            )}
            <Divider />
            <Button
              disabled={invalid || submitting}
              size="large"
              positive
              content="Zaaktualizuj hasło"
            />
          </Form>
        </div>
      )}

      {providerId &&
      providerId === 'facebook.com' && (
        <div>
          <Header color="teal" sub content="Konto Facebook"/>
          <p>Odwiedź Facebook aby zaaktualizaować ustawienia konta</p>
          <Button type="button" color="facebook">
            <Icon name="facebook"/>
            Idź do Facebook
          </Button>
        </div>
      )}

      {providerId &&
      providerId === 'google.com' && (
        <div>
          <Header color="teal" sub content="Konto Google"/>
          <p>Odwiedź Google aby zaaktualizaować ustawienia konta</p>
          <Button type="button" color="google plus">
            <Icon name="google plus"/>
            Idź do Google
          </Button>
        </div>
      )}
    </Segment>
  );
};

export default reduxForm({ form: 'account', validate })(AccountPage);
