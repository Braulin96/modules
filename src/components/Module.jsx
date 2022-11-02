import React from 'react'

const styles={
    module: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '300px',
    height:'200px',
    /* creating the box*/
    border:'2px solid black',
    borderRadius:'15px'
    }
}

function Module() {
  return (
    <div style={styles.module}>
      
        <h3>chat</h3>
    </div>
  )
}

export default Module
