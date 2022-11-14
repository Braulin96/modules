import React from 'react'

function ModuleCalendar(props) {
    const styles={
        Calendar: {
          // display:"flex",
          //  flexWrap:"wrap",
          border: '1px solid white',
          borderRadius:'10px',
          boxShadow: 'rgba(249, 157, 165, 0.2) 0px 8px 24px',
          height: 'fit-content',
          padding:"10px 5px",
          width: "fit-content"
        }
      }
  return (
    <div style={styles.Calendar}>
         {props.children}
    </div>
   
  )
}

export default ModuleCalendar