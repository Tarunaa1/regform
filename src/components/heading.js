import React from 'react'
export default function Heading() {
    const mystyle = {
            color : "white",
            backgroundColor: "darkblue",
            padding : "10px",
            textAlign: "center",
            fontSize : "28px",
            width :"75%",
            display : 'flex',
            justifyContent : 'center',
            position: "relative",
            left: "15%",
            marginTop : "50px"
    }
  return (
    <div className='heading' style={mystyle}>
      Registration Form
    </div>
  )
}
