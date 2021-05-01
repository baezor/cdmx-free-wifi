import React from 'react';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Map() {

  return (
    <React.Fragment>
      <Title>Explore All Endpoints</Title>
      <p>Map</p>
    </React.Fragment>
  );
}