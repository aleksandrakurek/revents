import React from 'react';
import { Segment, Image, Item, Header, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

const eventImageStyle = {
  filter: 'brightness(30%)'
};

const eventImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};

const EventDetailedHeader = ({ openModal, authenticated, loading, event, isHost, isGoing, goingToEvent, cancelGoingToEvent }) => {
  let eventDate;
  if (event.date) {
    eventDate = event.date.toDate();
  }
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image
          src={`/assets/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: 'white' }}
                />
                <p>{format(eventDate, 'dddd Do MMMM')}</p>
                <p>
                  Hosted by <strong>{event.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        {!isHost && (
          <div>
            {isGoing && !event.cancelled &&
            <Button onClick={() => cancelGoingToEvent(event)}>Wypisz mnie</Button>}

            {!isGoing && authenticated && !event.cancelled &&
            <Button loading={loading} onClick={() => goingToEvent(event)} color="teal">Dołącz do wydarzenia</Button>}

            {!authenticated && !event.cancelled &&
            <Button loading={loading} onClick={() => openModal('UnauthModal')} color="teal">Dołącz do wydarzenia</Button>}

            {event.cancelled && !isHost &&
            <Label size='large' color='red' content='Wydarzenie zostało odwołane'/>}
          </div>
        )}

        {isHost && (
          <Button
            as={Link}
            to={`/manage/${event.id}`}
            color="orange"
          >
            Zarządzaj Wydarzeniem
          </Button>
        )}

      </Segment>

    </Segment.Group>
  );
};

export default EventDetailedHeader;
