import React from 'react'
import secondIcon from '../images/secondIcon.svg'

function InfoSettingsPage(props) {
  
  return (
    <> 
        <div className='d-flex flex-wrap justify-content-between'>
            <div className='col-6 d-flex ' style={{minWidth:"140px"}}>
                <img src={secondIcon} alt="image"/>
                <h4 style={{ margin:"auto 0"}}>{props.info}</h4>
            </div>
            <div className='col-6 d-flex' style={{minWidth:"140px"}}>
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