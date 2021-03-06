import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
// import Script from 'react-load-script';
// import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import { incrementAsync, decrementAsync, testPermissions } from './testActions';
import { openModal } from '../modals/modalActions'

const mapState = state => ({
  data: state.test.data,
  loading: state.test.loading
});

const actions = {
  incrementAsync,
  decrementAsync,
  openModal,
  testPermissions
};

// const Marker = () => <Icon name='marker' size='big' color='red'/>

class TestComponent extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  state = {
    address: '',
    scriptLoaded: false
  };

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  onChange = address => this.setState({ address });

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

    const { incrementAsync, decrementAsync, data, openModal, loading, testPermissions } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>Odpowiedź to: {data}</h3>
        <Button loading={loading} onClick={incrementAsync} color="green" content="Rosnąco"/>
        <Button loading={loading} onClick={decrementAsync} color="red" content="Malejąco"/>
        <Button onClick={() => openModal('TestModal', { data: 42 })} color="teal" content="Otwórz modal"/>
        <Button onClick={testPermissions} color="teal" content="Testuj pozwolenia"/>
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps}/>
          )}
          <button type="submit">Wyślij</button>
        </form>

      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
