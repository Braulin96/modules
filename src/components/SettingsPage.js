import React from 'react'
import ModuleSettingsPage from './ModuleSettingsPage'
import secondIcon from '../images/secondIcon.svg'

function SettingsPage() {
    const style= {
        Settings :{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }
    }
  return (
    <ModuleSettingsPage>
        <h2>Settings</h2>
        <div className='d-flex flex-wrap justify-content-between'>
            <div className='d-flex flex-wrap' style={{alignItems:"center"}}>
                <img src={secondIcon} alt="image"/>
                <h4>Name</h4>
            </div>
            <div>
                <p>Super long name ...</p>
            </div>
        </div>
    </ModuleSettingsPage>
  )
}

export default SettingsPage