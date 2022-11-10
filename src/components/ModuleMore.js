import React from 'react'
import Module from './Module'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import ModuleWithOptions from './ModuleWithOptions'

const ModuleMore =(props) =>{
  const [expand, setExpand] = useState(false);
  return (
    <ModuleWithOptions>
      {/*<p>{expand? 'TRUE': 'FALSE'}</p>   `${expand? 'fit-content' : props.height}`*/}
      <div style={{overflow: 'hidden', height: 'fit-content', maxHeight: expand? 'fit-content' : props.height }}>
        {props.children}
      </div>
      <a onClick={() => setExpand(!expand)} >
      {expand? 'See less' : 'See more'}
      </a> 
    </ModuleWithOptions>
  )
}
export default ModuleMore