import React from 'react'
import Module from './Module';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import optionIcon from '../images/optionIcon.svg'
import secondIcon from '../images/secondIcon.svg'

const stylesIcon={
  moduleIcon: {
    backgroundColor:"white",
    border:"none",
    margin:" 10px 0px 10px 50px ", 
    width: '5px',
    height:'5px',
  },
  moduleDotIcon: {
    margin:"5px 0px 0px 0px",
  },
  containerText:{
    color:"black",
    margin:"0px 0px 0px 15px",
    lineHeight:"3px",
    fontSize:"15px",
  }
}

const ModuleWithOptions =(props) => {
  return ( 
    <Module>
      <div style={stylesIcon.moduleDotIcon}>
        <img src={secondIcon} alt="image" />
      </div>
      <div>
        <Menu menuButton ={<MenuButton style={stylesIcon.moduleIcon}><img src={optionIcon} alt="image"/></MenuButton>} transition>
          <MenuItem>New File</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuItem>Close Window</MenuItem>
        </Menu>
        {props.children}
      </div>
      <div style={stylesIcon.containerText}>
        <h3>98%</h3>
        <h4 >Health Score</h4>
      </div>
    </Module>
  )
}
export default ModuleWithOptions