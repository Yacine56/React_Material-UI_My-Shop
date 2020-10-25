import React ,{useEffect}from "react"



export default function Input(props){
useEffect(()=>{
   
})

let ui= props.field==="input" ? 
   ( <div>
        <label for={props.name} {...props.inputlabel}>{props.label}</label><br />
        <input name={props.name} type={props.type}   {...props} />
    </div> ):
   (  <div>
     <label for={props.name} {...props.inputlabel}>{props.label}</label><br />
     <textarea name={props.name}  {...props}/>
 </div> )

   return (
     ui
   )
}