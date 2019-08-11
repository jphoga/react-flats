import React, { Component } from 'react';

import Flat from './flat';


const FlatList = (props) => {
  return (
    <div className="flat-list">
    {props.flats.map((flat) =>
      <Flat
        flat={flat}
        key={flat.id}
        selected={flat.id === props.selectedFlat.id}
        selectFlat={props.selectFlat}
        />)
    }
    </div>
  );
};

export default FlatList;
