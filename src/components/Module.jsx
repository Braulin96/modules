import React from 'react'

const stylesOptions={
  module: {
    padding: 20,
    marginBottom: 10,
    // the same size(container)
    width: '150px',
    height:'150px',
    /* creating the box*/
    borderRadius:'15px',
    background: 'white',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  },
}

const Module =(props) =>{
  return (
    <div style={stylesOptions.module} >
      {props.children}
    </div>
  )
}
export default Module;
