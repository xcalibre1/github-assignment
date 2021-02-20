import React from 'react'
import {Link} from "react-router-dom"
function Links(props) {
    console.log(props.gitdata)
    return (
        <ol>
        {props.gitdata.map((item,index)=>(   
        <li key={index}>    
        <Link to="/Rote" >
          <p onClick={()=>props.setclick(item)}>{item.title}</p>
          </Link></li>))
          }
        </ol>
    )
}

export default Links
