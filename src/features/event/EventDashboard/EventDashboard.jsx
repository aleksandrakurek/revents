import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <h2>Left column</h2>
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>right column</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
