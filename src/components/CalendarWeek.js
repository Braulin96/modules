import React from 'react'
import ModuleCalendar from './ModuleCalendar'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import weekIcon from '../images/weekIcon.svg'
import monthIcon from '../images/monthIcon.svg'

function CalendarWeek() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const style={
        dayOfWeek:{
            fontSize: "0.75rem"
        },
        containerSize:{
            display:"block",
            maxWidth: 50,
            minWidth: 25,
            width: "8vw",  // change it to % 
            cursor: "pointer",
        }
    } 
  return (
    <>
        <Modal size='sm' show={show} onHide={handleClose} centered>
            <Modal.Body>
                <div style={{padding:"20px 20px"}} >
                    <div className=' d-flex justify-content-between flex-wrap'> 
                        <div>
                            <img width={40} style={{marginLeft:"5px"}} src={weekIcon} alt="image" />
                        </div>
                        <div>
                            <h3 style={{paddingTop:"5px"}}> <b> Week view </b></h3>
                        </div>
                    </div>
                    <div className=' d-flex justify-content-between flex-wrap'>
                        <div>
                            <img width={47} src={monthIcon} alt="image" />
                        </div>
                        <div>
                            <h3 style={{paddingTop:"5px"}}>Month view</h3>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal> 
        <div style={{position: "relative"}} className='my-3 d-flex flex-wrap w-100 justify-content-between '>
            <ModuleCalendar >
                <div a onClick={handleShow} style={style.containerSize}>
                    <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Mon</p>
                    <p className='text-center mb-0 p-0 pb-0'>7</p>  
                </div>
            </ModuleCalendar>
            <ModuleCalendar>
                <div a onClick={handleShow} style={style.containerSize}>
                    <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Tue</p>
                    <p className='text-center mb-0 p-0 pb-0'>7</p> 
                </div>
            </ModuleCalendar>
            <ModuleCalendar>
                <div a onClick={handleShow} style={style.containerSize}>
                    <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Wed</p>
                    <p className='text-center mb-0 p-0 pb-0'>7</p>   
                </div>
            </ModuleCalendar>
            <ModuleCalendar>
                <div a onClick={handleShow} style={style.containerSize}>
                    <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Thu</p>
                    <p className='text-center mb-0 p-0 pb-0'>7</p>  
                </div> 
            </ModuleCalendar>
            <ModuleCalendar>
                <div a onClick={handleShow} style={style.containerSize}>
                    <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Fri</p>
                    <p className='text-center mb-0 p-0 pb-0'>7</p>
                </div>   
            </ModuleCalendar>
            <ModuleCalendar>
                <div a onClick={handleShow} style={style.containerSize}>
                    <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Sat</p>
                    <p className='text-center mb-0 p-0 pb-0'>7</p>   
                </div>
            </ModuleCalendar>
            <ModuleCalendar>
                <div a onClick={handleShow} style={style.containerSize}>
                    <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Sun</p>
                    <p className='text-center mb-0 p-0 pb-0'>7</p>  
                </div>
            </ModuleCalendar>
    
        </div> 
    </>
  )
}
export default CalendarWeek