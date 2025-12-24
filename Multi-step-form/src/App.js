import {useState} from "react";
import Steps from "./Components/Ui/Steps";
import Go from "./Components/Ui/Go";
import ContentStep1 from "./Components/Content/ContentStep1";
import ContentStep2 from "./Components/Content/ContentStep2";
import ContentStep3 from "./Components/Content/ContentStep3";
import ContentStep4 from "./Components/Content/ContentStep4";
import goStyles from "./Components/Styles/Go.module.css";
import ContentStep5 from "./Components/Content/ContentStep5";

function App() {
  const [step,setStep] = useState(1)
  const [error, setError] = useState({
  name: '',
  email: '',
  phone: ''
})

  const [formData,setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Monthly" ,
    planSelected:{
      name:"",
      value:""
    },
    addons:[]
  });

  return (
    <div className="App">
      <Steps valueStep={step >4 ? 4:step} setStep={setStep}/>
      <main>
        {step ===5 ? 
        (<section  className="section_white"><ContentStep5/></section>):
        (<section className="section_white">
            {
              step === 1 &&(
                 <ContentStep1 error={error} setError={setError} inputs={formData} setInput={setFormData}/>
              )
            }{
              step ===2 &&(
            
                <ContentStep2
                input={formData} 
                setInput={setFormData}/>
              )
            }{
              step ===3 &&(
                <ContentStep3 inputs={formData} setInput={setFormData}/>
              )
            }{
              step ===4 &&(
               <ContentStep4 inputs={formData} setInput={setFormData}/>
              )
            }
             <Go 
             className={`${goStyles.go_none} ${goStyles.button_style}`} 
             input ={formData} 
             valueStep={step} 
             setStep={setStep} 
             setError={setError}/>
          </section>)
          }
          
      </main>
      {step === 5 ? 
      (<></>):
      (<div className="bg_white">
        <div className="container_buts">
          <Go
           className={`${goStyles.button_style}`} 
           input ={formData} 
           valueStep={step} 
           setStep={setStep} 
           setError={setError}/>
        </div>
      </div>)}
      
    </div>
  

  );
}
export default App;
