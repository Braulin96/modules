import React from 'react'
import optionIcon from '../images/optionIcon.svg'
import Module from './Module';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';


const ModuleWithOptions =(props) => {
  return (
    <Module>
      <div>
        <Menu menuButton={<MenuButton><img src={optionIcon} alt="image" /></  MenuButton>} transition>
          <MenuItem>New File</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuItem>Close Window</MenuItem>
        </Menu>
        {props.children}
      </div>
    </Module>
  )
}
export default ModuleWithOptions