import React from 'react'

const styles={
    module: {
      padding: 20,
      marginBottom: 10,
      // fica de acordo com o conteudo
      width: 'fit-content',
      height:'fit-content',
      /* creating the box*/
      borderRadius:'15px',
      background: 'white',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    }
}
const Module =(props) =>{
  return (
    <div >
      {props.children}
    </div>
  )
}

export default Module;
