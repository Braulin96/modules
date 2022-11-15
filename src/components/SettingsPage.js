import React from 'react'
import ModuleSettingsPage from './ModuleSettingsPage'
import secondIcon from '../images/secondIcon.svg'
import InfoSettingsPage from './InfoSettingsPage'

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
            <InfoSettingsPage info="Name" input="Super long Name uper long Name uper long Name"/>
            <hr style={{marginLeft:"15px"}}/>
            <InfoSettingsPage info="Surname" input="Tavares"/>
            <hr style={{marginLeft:"15px"}}/>
            <InfoSettingsPage info="Date of Birth" input="05/01/2021"/>
            <hr style={{marginLeft:"15px", color:"black"}}/>
            <InfoSettingsPage info="Height" input="180cm"/>
        </div>
    </ModuleSettingsPage>
  )
}
export default SettingsPage