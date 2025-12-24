import styles from '../Styles/Input.module.css'

function Input({value,name,placeholder,type,onChange,label,className,error}) {
    return(
        <div className={styles.label}>
            <label>
                {label}
            {error && <span className={styles.error}>
            {error}</span>}

            </label>
            <input 
            type={type} 
            className={error ? styles.red : ''}
            value={value} 
            onChange={onChange} 
            name={name} 
            placeholder={placeholder}/>
        </div>
        
    )
}export default Input