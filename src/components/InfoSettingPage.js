import React from 'react'

function InfoSettingPage() {
  return (
    <ModuleSettingsPage>
    <div className='p-3'>
        <h2 style= {{paddingLeft:"10px"}}>Settings</h2>
        <div className='d-flex flex-wrap justify-content-between' style={{paddingTop:"20px"}}>
            <div className='d-flex flex-wrap' style={{alignItems:"center", justifyContent:"center"}}>
                <img src={secondIcon} alt="image"/>
                <h4 style={{ margin:"auto"}}>Name</h4>
            </div>
            <div className='d-flex flex-wrap' style={{alignItems:"center", justifyContent:"center"}}>
                <p style={{ margin:"auto"}}>Super long name ...</p>
            </div>
        </div>
        <div className='d-flex flex-wrap justify-content-between' style={{paddingTop:"20px"}}>
            <div className='d-flex flex-wrap' style={{alignItems:"center", justifyContent:"center"}}>
                <img src={secondIcon} alt="image"/>
                <h4 style={{ margin:"auto"}}>Surname</h4>
            </div>
            <div className='d-flex flex-wrap' style={{alignItems:"center", justifyContent:"center"}}>
                <p style={{ margin:"auto"}}>Tavares</p>
            </div>
        </div>
        <div className='d-flex flex-wrap justify-content-between' style={{paddingTop:"20px"}}>
            <div className='d-flex flex-wrap' style={{alignItems:"center", justifyContent:"center"}}>
                <img src={secondIcon} alt="image"/>
                <h4 style={{ margin:"auto"}}>Date of Birth</h4>
            </div>
            <div className='d-flex flex-wrap' style={{alignItems:"center", justifyContent:"center"}}>
                <p style={{ margin:"auto"}}>05/01/2001</p>
            </div>
        </div>
        <div className='d-flex flex-wrap justify-content-between' style={{paddingTop:"20px"}}>
            <div className='d-flex flex-wrap' style={{alignItems:"center", justifyContent:"center"}}>
                <img src={secondIcon} alt="image"/>
                <h4 style={{ margin:"auto"}}>Height</h4>
            </div>
            <div className='d-flex flex-wrap' style={{alignItems:"center", justifyContent:"center"}}>
                <p style={{ margin:"auto"}}>180 cm </p>
            </div>
        </div>

    </div>
</ModuleSettingsPage>
  )
}

export default InfoSettingPage