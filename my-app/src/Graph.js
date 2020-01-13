import {Sigma, RandomizeNodePositions,RelativeSize} from 'react-sigma';
import React from 'react';


function Graph() {

 let myGraph = {
    nodes: [
      { id: "n1", label: "Aditya"},
      { id: "n2", label: "Ronald"},
      { id: "n3", label: "Hermoine"},
      { id: "n4", label: "Prof. Snape"},
      { id: "n5", label: "Prof.Dumbledore"},
      { id: "n6", label: "DarkLord"},
      { id: "n7", label: "Magonigal"},
      { id: "n8", label: "Fred"},
      { id: "n9", label: "George"},
      { id: "n10", label: "Ginny"},
      { id: "n11", label: "Cat"}
    ],
    // edge labels and types are optional
    edges: [
     
      { id:"e1",source: "n1", target:"n2", label:"friend"},
      { id:"e2",source: "n1", target:"n3", label:"friend"},
      { id:"e3",source: "n1", target:"n4", label:"Student"},
      { id:"e4",source: "n1", target:"n5", label:"Student"},
      { id:"e5",source: "n1", target:"n6", label:"Enemy"},
      { id:"e6",source: "n1", target:"n7", label:"Student"},
      { id:"e7",source: "n1", target:"n8", label:"friend"},
      { id:"e8",source: "n1", target:"n9", label:"friend"},
      { id:"e9",source: "n1", target:"n10", label:"friend"},
     
      { id:"e10",source: "n2", target:"n3", label:"friend"},
      { id:"e11",source: "n2", target:"n4", label:"Student"},
      { id:"e12",source: "n2", target:"n5", label:"Student"},
      { id:"e13",source: "n2", target:"n6", label:"Enemy"},
      { id:"e14",source: "n2", target:"n7", label:"Student"},
      { id:"e15",source: "n2", target:"n8", label: "brother"},
      { id:"e16",source: "n2", target:"n10", label: "brother"},
      { id:"e17",source: "n2", target:"n9", label: "brother"},
     
      { id:"e18",source: "n3", target:"n4", label: "Student"},
      { id:"e19",source: "n3", target:"n5", label: "Student"},
      { id:"e20",source: "n3", target:"n6", label: "Enemy"},
      { id:"e21",source: "n3", target:"n7", label: "Student"},
      { id:"e22",source: "n3", target:"n8", label: "friend"},
      { id:"e23",source: "n3", target:"n9", label: "friend"},
      { id:"e24",source: "n3", target:"n10", label: "friend"},
     
      { id:"e25",source: "n4", target:"n5", label: "Professor"},
      { id:"e26",source: "n4", target:"n6", label: "Enemy or Friend"},
      { id:"e27",source: "n4", target:"n7", label: "Colleague"},
      { id:"e28",source: "n4", target:"n8", label: "student"},
      { id:"e29",source: "n4", target:"n9", label: "student"},
      { id:"e30",source: "n4", target:"n10", label: "student"},

      { id:"e31",source: "n5", target:"n6", label: "Professor"},
      { id:"e32",source: "n5", target:"n7", label: "Headmaster"},
      { id:"e34",source: "n5", target:"n8", label: "Headmaster"},
      { id:"e35",source: "n5", target:"n9", label: "Headmaster"},
      { id:"e36",source: "n5", target:"n10", label: "Headmaster"},
      { id:"e37",source: "n6", target:"n7", label: "Student"},
      { id:"e38",source: "n6", target:"n8", label: "Hogwarts"},
      { id:"e39",source: "n6", target:"n9", label: "Hogwarts"},
      { id:"e40",source: "n6", target:"n10", label: "Hogwarts"},
      { id:"e41",source: "n7", target:"n8", label: "Professor"},
      { id:"e42",source: "n7", target:"n9", label: "Professor"},
      { id:"e43",source: "n7", target:"n10", label: "Professor"},
      { id:"e44",source: "n8", target:"n9", label: "Twin"},
      { id:"e45",source: "n8", target:"n10", label: "Brother"},
      { id:"e46",source: "n9", target:"n10", label: "Brother"}
      ]
    
  };
  let settings= {
    
    edgeColor:'cyan',
    nodeColor: 'red',
    defaultNodeColor: '#58D68D',
    defaultEdgeColor: '#515A5A ',
    drawLabels:true,
    labelHoverColor:"red",
    drawEdgeLabels:true,
    minArrowSize:0,
    labelColor:'blue',
    clone:false,
         
  };

  let styles = {width:"1000px", height:"500px"};
 
   
 
    
    return(
      <Sigma graph={myGraph} settings={settings} style={styles}>
        <RelativeSize initialSize={8}/>
        <RandomizeNodePositions/>
      </Sigma>
      );
 
 }


export default Graph;
