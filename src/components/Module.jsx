import React from 'react'

const stylesOptions={
  module: {
    width: '150px',
    height:'150px',
    display:"flex",
    flexWrap:"wrap",
    alignContent:"space-be",
    borderRadius:'15px',
    background: 'white',
    boxShadow: 'rgba(249, 157, 165, 0.2) 0px 8px 24px',
  }
}

const Module =(props) =>{
  return (
    <div style={stylesOptions.module} >
      {props.children}
    </div>
  )
}
export default Module;
