import { useState } from "react";
import Input from "../Ui/Input";

function ContentStep1({inputs,setInput,error,setError}) {

const container = [
  {id: 1, name: "name", label: "Name", text: "e.g. Stephen King", type: "text" },
  {id: 2, name: "email", label: "Email Address", text: "e.g. stephenking@lorem.com", type: "email" },
  {id: 3, name: "phone", label: "Phone Number", text: "e.g. +1234 567 890", type: "tel" },
];

function handleChange(e) {
    const {name,value} = e.target
    setInput(prev => ({
        ...prev,
        [name]:value
    }))
    setError('')
}
    return(
        <>
          <div className={"container"}>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          {
            container.map(item =>(
                <Input 
                error={error[item.name]}
                key={item.id}
                name={item.name} 
                value={inputs[item.name]} 
                onChange={handleChange} 
                placeholder={item.text} 
                type={item.type}
                label={item.label}/>
            ))
          }
        </>
    )
} export default ContentStep1