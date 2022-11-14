import React from 'react'
import { useState } from 'react'

export default function Exemplo(props) {
  const [expandir, setExpandir] = useState(false);

  return (
    <div>
       <div style={{overflow: 'hidden', height: 'fit-content', maxHeight: expandir? 'fit-content' : props.height }}>
          {props.children}
        </div>
       <a onClick={() => setExpandir(!expandir)} >
        {expandir? 'See less' : 'See more'}
        </a> 
    </div>
  )
}
