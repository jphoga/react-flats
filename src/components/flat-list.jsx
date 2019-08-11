import React, { Component } from 'react';

import Flat from './flat';


const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => <Flat />)}
    </div>
  );
};

export default FlatList;
