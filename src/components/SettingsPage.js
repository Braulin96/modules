import React from 'react'
import ModuleSettingsPage from './ModuleSettingsPage'
import InfoSettingsPage from './InfoSettingsPage'
import '../index.css'

function SettingsPage(props) {
    const style= {
        settings: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
        createBorder: {
            borderBottomColor: "red",
            borderBottomWidth: 2,
            padding:"20px",
        }
    }
  return (
    <ModuleSettingsPage>
        <div className='p-3'>
            <h2 style= {{paddingLeft:"10px", paddingBottom:"20px"}}>Settings</h2>
            <InfoSettingsPage title="Name" info="Enter name" input="Super long Name uper long Name uper long Name"/>
            <hr style={{marginLeft:"15px"}}/>
            <InfoSettingsPage title="Surname" info="Enter surname" input="Tavares"/>
            <hr style={{marginLeft:"15px"}}/>
            <InfoSettingsPage title="Date of Birth" info="Enter date of birth" input="05/01/2021"/>
            <hr style={{marginLeft:"15px", color:"black"}}/>
            <InfoSettingsPage title= "Height" info="Enter height (cm)" input="180cm"/>
        </div>
    </ModuleSettingsPage>
  )
}
export default SettingsPage