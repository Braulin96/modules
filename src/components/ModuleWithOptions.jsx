import React from 'react'
import Module from './Module'
import { Icon } from './Icon'
import { Image } from './Image'

const stylesOptions={
    module: {
        padding: 20,
        marginBottom: 10,
        // fica de acordo com o tamanho do conteudo
        width: 'fit-content',
        height:'fit-content',
        /* creating the box*/
        borderRadius:'15px',
        background: 'white',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    box:{  
    }
}

function ModuleWithOptions() {
  return (
    <div style={stylesOptions.module}>
      <Icon />
    </div>
    )
}

export default ModuleWithOptions