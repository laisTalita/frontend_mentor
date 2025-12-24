import styles from '../Styles/Go.module.css'
import Button from './Button'

function Go({input,valueStep,setStep,className,setError}) {

   let isDisabled = valueStep === 4 && !input.planSelected.name

   function handleSubmit() {
    const fields =['name','email','phone']
    const newErrors = {}

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        fields.forEach(item =>{
            if (!input[item]) {
                newErrors[item] = 'This field is required'
            }
        })
        
        if( input.email && !regex.test(input.email)){
            newErrors.email = 'Invalid email'
        }
        if (input.name && input.name.length < 2) {
            newErrors.name = 'Invalid name'
        }
        if (input.phone) {
            const onlyNumbers = /^\d+$/
            if (!onlyNumbers.test(input.phone)) {
                newErrors.phone = 'Only numbers are allowed'
            }
            else if(input.phone.length < 9){
                newErrors.phone = 'Min. 9 digits'
            }
        }
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors)
            return
  }

  setStep(2)
}


    return(
        <section className={`${styles.section_but} 
        ${valueStep >1 ? styles.justify_button : styles.section_end}`}>
            
           {
            valueStep > 1 &&(
                <Button className={`${className} ${styles.estiloEspecial}`}
                onClick={()=>setStep(valueStep-1)} >
                 Go Back
                </Button> 
            )}

            <Button  
          className={`${isDisabled ? styles.isDisabled :''} ${valueStep ===4 ? styles.confirm_button : ''} ${className}` } 
            disabled={isDisabled}

            onClick={()=> valueStep ===1? handleSubmit():
             setStep(valueStep ===4 ? 5 : valueStep +1)}>

             {valueStep === 4 ? 'Confirm' :'Next Step'}
            </Button> 
        </section>
    )
}export default Go