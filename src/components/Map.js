import React from 'react';
import Title from './Title';
import LeafLeft from './Leafleft';

export default function Map() {
  return (
    <>
      <Title>Explore All Endpoints</Title>
      <div style={{ height: 420 + 'px', overflow: 'hidden', width: 100 + '%'}}>
        <LeafLeft />
      </div>
    </>
  );
}