import React from 'react';
import { Grid, Header, Icon, Item, List, Segment } from 'semantic-ui-react';
import format from 'date-fns/format';

const UserDetailedDescription = ({ profile }) => {
  let createdAt;
  if (profile.createdAt) {
    createdAt = format(profile.createdAt.toDate(), 'D MMM YYYY');
  }
  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header icon="smile" content="O mnie"/>
            <p>
              Mój zawód to: <strong>{profile.occupation || 'tbn'}</strong>
            </p>
            <p>
              Pochodzę z <strong>{profile.origin || 'tbn'}</strong>
            </p>
            <p>
              Jestem członkiem od: <strong>{createdAt}</strong>
            </p>
            <p>{profile.description}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header icon="heart outline" content="Zainteresowania"/>
            {profile.interests ?
              <List>
                {profile.interests &&
                profile.interests.map((interest, index) => (
                  <Item key={index}>
                    <Icon name="heart"/>
                    <Item.Content>{interest}</Item.Content>
                  </Item>
                ))}
              </List> : <p>Nie mam żadnych zainteresowań</p>}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedDescription;
