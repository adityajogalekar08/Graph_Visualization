import React, { Component } from 'react';
import Graph from 'react-sigma-graph';

function Friends() {

    var _data = {
      nodes: [
        { id: 'a', category: 'cat', name: 'Garfield' },
        { id: 'b', category: 'dog', name: 'Pluto' },
        { id: 'c', category: 'mouse', name: 'Mickey' }
      ],
      // edge labels and types are optional
      edges: [
        { source: 'a', target: 'b', label: 'friend', type: 'arrow' },
        { source: 'a', target: 'c', label: 'pet', type: 'arrow' }
      ]
    };
    // optional color definition, defaults to d3 category10 based on domain of categories in data
    var _categoryColors = {
      'cat': '#1f77b4',
      'dog': '#ff7f0e',
      'mouse': '#00dd00'
    };
    return (
      <Graph data={_data} categoryColors={_categoryColors} />
    );
 }

 
export default Friends;