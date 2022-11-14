import React from 'react'
import ModuleCalendar from './ModuleCalendar'

function CalendarWeek() {
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
    <div style={{position: "relative"}} className='my-3 d-flex flex-wrap w-100 justify-content-between '>
        <ModuleCalendar >
            <a onClick={() => console.log("hello")} style={style.containerSize}>
                <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Mon</p>
                <p className='text-center mb-0 p-0 pb-0'>7</p>  
            </a>
        </ModuleCalendar>
        <ModuleCalendar>
            <div style={style.containerSize}>
                <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Tue</p>
                <p className='text-center mb-0 p-0 pb-0'>7</p> 
            </div>
        </ModuleCalendar>
        <ModuleCalendar>
            <div style={style.containerSize}>
                <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Wed</p>
                <p className='text-center mb-0 p-0 pb-0'>7</p>   
            </div>
        </ModuleCalendar>
        <ModuleCalendar>
            <div style={style.containerSize}>
                <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Thu</p>
                <p className='text-center mb-0 p-0 pb-0'>7</p>  
            </div> 
        </ModuleCalendar>
        <ModuleCalendar>
            <div style={style.containerSize}>
                <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Fri</p>
                <p className='text-center mb-0 p-0 pb-0'>7</p>
            </div>   
        </ModuleCalendar>
        <ModuleCalendar>
            <div style={style.containerSize}>
                <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Sat</p>
                <p className='text-center mb-0 p-0 pb-0'>7</p>   
            </div>
        </ModuleCalendar>
        <ModuleCalendar>
            <div style={style.containerSize}>
                <p className='p-0 mb-0 pb-1 text-center' style={style.dayOfWeek}>Sun</p>
                <p className='text-center mb-0 p-0 pb-0'>7</p>  
            </div>
        </ModuleCalendar>
   
    </div> 
  )
}
export default CalendarWeek