import React from 'react'
import Module from './Module';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import optionIcon from '../images/optionIcon.svg';
import secondIcon from '../images/secondIcon.svg';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'; //important
import MoreInfo from './MoreInfo';

const styles={
  moduleWrapper: {
    width: 150,
    height: 150,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  moduleIcon: {
    backgroundColor:"white",
    border:"none",
    padding: "5px 2px 5px 12px", 
  },
  moduleDotIcon: {
    //margin:"5px 0px 0px 0px",
  },
  containerText:{
   // margin:"0px 0px 0px 15px",
   position: "absolute",
   bottom: 0,
  },
  moreInfo:{
    color:"blue",
    backgroundColor:"white",
    border:"none",
    width:"100%",
    padding:"0px",
  }, 
  allModule:{
    
    padding:"10px"
  }
}

const ModuleWithOptions =(props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return ( 
    <>
      <Modal size='md' show={show} onHide={handleClose} centered>
        <Modal.Body>
          <MoreInfo/>
        </Modal.Body>
        <Modal.Footer>
          <Button style={styles.moreInfo} variant="secondary" onClick={handleClose}>
          Ok
          </Button>
        </Modal.Footer>
      </Modal> 
      <Module>
        <div style={styles.allModule}>
          <div style={styles.moduleWrapper}>
            <div className='d-flex flex-wrap justify-content-between'>
              <div style={styles.moduleDotIcon}>
                <img src={secondIcon} alt="image" />
              </div>
              <div>
                <Menu menuButton ={<MenuButton style={styles.moduleIcon}><img src={optionIcon} alt="image"/></MenuButton>} transition>
                  <MenuItem><a onClick={handleShow}><li >Learn more</li></a></MenuItem>
                  <MenuItem ><li>Action</li></MenuItem>
                </Menu>
              </div>
            </div>
            <div style={styles.containerText}>
              {props.children}
            </div>
          </div>
        </div>
      </Module>
    </>
  ) 
}
export default ModuleWithOptions