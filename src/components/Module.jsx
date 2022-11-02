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
    border:'2px solid black',
    borderRadius:'15px'
    }
}

function Module() {
  return (
    <div style={styles.module}>
        <h2> Dr Lynch</h2>
        <h3> My specialist</h3>
    </div>
  )
}

export default Module
