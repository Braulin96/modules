import React from 'react'

function ModuleSettingsPage(props) {
    const styles={
        Settings: {
          // display:"flex",
          //  flexWrap:"wrap",
          border: '1px solid black',
          borderRadius:'0px',
          boxShadow: 'rgba(249, 157, 165, 0.2) 0px 8px 24px',
          padding:"10px 5px",
          height:  'justify-content',
          width: 350,
        }
      }
  return (
    <div className={props.className} style={styles.Settings}>
        {props.children}
    </div>
  )
}

export default ModuleSettingsPage