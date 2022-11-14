import React from 'react'
import Module from './Module'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import MoreInfo from './MoreInfo'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'; //important
import secondIcon from '../images/secondIcon.svg';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import optionIcon from '../images/optionIcon.svg';


const ModuleMore= (props) =>{
  const [expand, setExpand] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const styles={
    moreInfo:{
      color:"blue",
      backgroundColor:"white",
      border:"none",
      width:"100%",
      padding:"0px",
    },
    allModule:{
      padding:"10px",
    },
  }
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
      <Module className= "w-50">
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
          <div>
            {/*<p>{expand? 'TRUE': 'FALSE'}</p>   `${expand? 'fit-content' : props.height}`*/}
            <div style={{overflow: 'hidden', height: 'fit-content', maxHeight: expand? 'fit-content' : props.height }}>
              {props.children}
            </div>
            <div className="text-center">
              <a style={{cursor: "pointer"}} onClick={() => setExpand(!expand)} >
                {expand? 'See less' : 'See more'}
              </a> 
            </div>
          </div>
        </div>
      </Module>
    </>
  )
}
export default ModuleMore