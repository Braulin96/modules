import React from 'react'

const stylesOptions={
  module: {
    // display:"flex",
    //  flexWrap:"wrap",
    borderRadius:'15px',
    background: 'none',
    boxShadow: 'rgba(249, 157, 165, 0.2) 0px 8px 24px',
    width: 'fit-content',
    height: 'fit-content',
  }
}

const Module =(props) =>{
  return (
    <div className={props.className} style={stylesOptions.module} >
      {props.children}
    </div>
  )
}
export default Module;
