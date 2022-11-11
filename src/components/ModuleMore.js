import React from 'react'
import Module from './Module'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import ModuleOptionsAndIcon from './ModuleOptionsAndIcon'

const ModuleMore= (props) =>{
  const [expand, setExpand] = useState(false);
  return (
    <div >
      {/*<p>{expand? 'TRUE': 'FALSE'}</p>   `${expand? 'fit-content' : props.height}`*/}
      <div style={{overflow: 'hidden', height: 'fit-content', maxHeight: expand? 'fit-content' : props.height }}>
        {props.children}
      </div>
      <a onClick={() => setExpand(!expand)} >
      {expand? 'See less' : 'See more'}
      </a> 
      <a onClick={() => setExpand(!expand)} >
      {expand? 'See less' : 'See more'}
      </a> 
    </div>
  )
}
export default ModuleMore