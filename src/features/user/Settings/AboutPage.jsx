import React from 'react';
import { Button, Divider, Form, Header, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import RadioInput from '../../../app/common/form/RadioInput';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import PlaceInput from '../../../app/common/form/PlaceInput';
import SelectInput from '../../../app/common/form/SelectInput';

const interests = [
  { key: 'drinks', text: 'Napoje', value: 'drinks' },
  { key: 'culture', text: 'Kultura', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Jedzenie', value: 'food' },
  { key: 'music', text: 'Muzyka', value: 'music' },
  { key: 'travel', text: 'Podróże', value: 'travel' }
];

const AboutPage = ({ pristine, submitting, handleSubmit, updateProfile }) => {
  return (
    <Segment>
      <Header dividing size="large" content="O mnie"/>
      <p>Uzupełnij swój profil, aby skorzystać ze wszystkich możliwości aplikacji</p>
      <Form onSubmit={handleSubmit(updateProfile)}>
        <Form.Group inline>
          <label>Jaki jest twój status: </label>
          <Field name="status" component={RadioInput} type="radio" value="single" label="Wolny"/>
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="relationship"
            label="W związku"
          />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="married"
            label="Zamężna/Żonaty"
          />
        </Form.Group>
        <Divider />
        <label>Opowiedz coś więcej o sobie:</label>
        <Field name="about" component={TextArea} placeholder="O mnie"/>
        <Field
          name="interests"
          component={SelectInput}
          options={interests}
          value="interests"
          multiple={true}
          placeholder="Wybierz swoje zainteresowania"
        />
        <Field
          width={8}
          name="occupation"
          type="text"
          component={TextInput}
          placeholder="Zawód"
        />
        <Field
          width={8}
          name="origin"
          options={{ types: ['(regions)'] }}
          component={PlaceInput}
          placeholder="Kraj pochodzenia"
        />
        <Divider />
        <Button disabled={pristine || submitting} size="large" positive content="Zaaktualizuj profil"/>
      </Form>
    </Segment>
  );
};

export default reduxForm({ form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false })(AboutPage);
