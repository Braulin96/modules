import React from 'react'
import ModuleSettingsPage from './ModuleSettingsPage'
import secondIcon from '../images/secondIcon.svg'

function InfoSettingsPage(props) {
  
  return (
    <> 
        <div className='d-flex flex-wrap justify-content-between'>
            <div className='d-flex flex-wrap' style={{alignItems:"center", justifyContent:"center"}}>
                <img src={secondIcon} alt="image"/>
                <h4 style={{ margin:"auto"}}>{props.info}</h4>
            </div>
            <div className='d-flex flex-wrap' style={{alignItems:"center", justifyContent:"center"}}>
                <p style={{ margin:"auto"}}>{props.input}</p>
            </div>
        </div>
        <div>
            {props.children}
        </div>  
    </>   
  )
}

export default InfoSettingsPage