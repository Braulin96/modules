import React from 'react'
import Module from './Module';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import optionIcon from '../images/optionIcon.svg'
import secondIcon from '../images/secondIcon.svg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Example from './Example';
import { Alert } from 'bootstrap';

const stylesIcon={
  moduleIcon: {
    backgroundColor:"white",
    border:"none",
    padding:" 15px 0px 10px 65px ", 
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
  },
}


const ModuleWithOptions =(props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(props)

  return ( 
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Woohoo, you're reading this text in a modal!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal> 

    <Module>
      <div style={stylesIcon.moduleDotIcon}>
        <img src={secondIcon} alt="image" />
      </div>
      <div>
        <Menu menuButton ={<MenuButton style={stylesIcon.moduleIcon}><img src={optionIcon} alt="image"/></MenuButton>} transition>
          <MenuItem><a onClick={handleShow}><li >Learn more</li></a></MenuItem>
          <MenuItem ><li>Action</li></MenuItem>
        </Menu>
        
      </div>
      <div style={stylesIcon.containerText}>
        {props.children}
      </div>
    </Module>
    </>
  )
}
export default ModuleWithOptions