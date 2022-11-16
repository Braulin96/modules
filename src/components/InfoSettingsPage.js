import React from 'react'
import secondIcon from '../images/secondIcon.svg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MoreInfo from './MoreInfo';
import '../index.css';

function InfoSettingsPage(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <> 
       <Modal style={{border:"2px solid #00000078", borderRadius: "15px"}} size='sm' show={show} onHide={handleClose} centered>
            <Modal.Body>
                <h4 style={{padding: "10px 0px 10px 0px"}}>{props.title}</h4>
                <input style={{border:"1px solid black", borderRadius: "5px", height:"35px", paddingLeft:"15px",}} className='col-12' type="text" name="name" placeholder={props.info}/>
            </Modal.Body>
            <Modal.Footer style={{border:"none"}}> 
                <div className='col-12 d-flex flex-wrap justify-content-between' style={{justifyContent:"center"}}>
                    <div>
                        <Button className='col-12' variant="secondary" onClick={handleClose} style={{width:"120px", backgroundColor:"white", color: "black" }}>
                            Cancel
                        </Button>
                    </div>
                    <div>
                        <Button className='col-12' variant="secondary" onClick={handleClose} style={{width:"120px",backgroundColor:"black", color: "white"}}>
                            Save
                        </Button>
                    </div>
                </div>
                </Modal.Footer>   
        </Modal> 
        <div className='d-flex flex-wrap justify-content-between'>
            <div className='col-6 d-flex ' style={{minWidth:"140px"}}>
                <img src={secondIcon} alt="image"/>
                <h4 style={{ margin:"auto 0"}}>{props.title}</h4>
            </div>
            <div a onClick={handleShow} className='col-6 d-flex' style={{minWidth:"140px", cursor:"pointer"}}>
                <p style={{ marginLeft:"auto", textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap", textAlign:"right" }}>{props.input}</p>
            </div>
                
        </div>
        <div>
            {props.children}
        </div>  
    </>   
  )
}

export default InfoSettingsPage