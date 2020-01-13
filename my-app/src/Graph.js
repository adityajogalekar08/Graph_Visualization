import {Sigma, RandomizeNodePositions,RelativeSize} from 'react-sigma';
import React from 'react';


function Graph() {

 let myGraph = {
    nodes: [
      { id: "a", label: "cat"},
      { id: "b", label: "dog"},
      { id: "c", label: "mouse"},
      { id: "d", label: "duck"}
    ],
    // edge labels and types are optional
    edges: [
      { id:"e1",source: "a", target:"b", label: "friend", type: 'arrow'},
      { id:"e2",source: "a", target:"c", label: "pet", type: 'arrow'},
      { id:"e3",source: "a", target:"d", label: "mother", type: 'arrow' },
      { id:"e4",source: "b", target:"c", label: "father", type: 'arrow' },
      { id:"e5",source: "b", target:"d", label: "uncle", type: 'arrow' },
      { id:"e6",source: "c", target:"d", label: "uncle", type: 'arrow' }
    ]
    
  };
  let settings= {
    edgeColor:'red',
    nodeColor: '#00dd00',
    defaultNodeColor: '#00dd00',
    defaultEdgeColor: '#dbc09b',
    drawLabels:true,
    labelHoverColor:"red",
    drawEdgeLabels:true,
    minArrowSize:0,
    labelColor:'blue',
    defaultEdgeLabelSize: 10,
    defaultEdgeType: 'curve',
    drawNodes: 5,
    scalingMode: 'inside',
    arrowRatio: 3,
    edgeLabelSize: 'proportional'
    
  };
 
   
 
    //let myGraph = {nodes:[{id:"n1", label:"Alice", color:"blue"}, {id:"n2", label:"Rabbit",color:"red"},{id:"n3", label:"Aditya", color:"green"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"},{id:"e2",source:"n3",target:"n2",label:"SEES"}]}
    return(
      <Sigma graph={myGraph} settings={settings} >
        <RelativeSize initialSize={8}/>
        <RandomizeNodePositions/>
      </Sigma>
      );
 
 }


export default Graph;
