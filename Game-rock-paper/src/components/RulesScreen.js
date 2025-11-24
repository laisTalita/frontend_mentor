import './RulesScreen.css'
function RulesScreen({setShowRules}) {     
    return(
        <div className='black_screen'>
            <section id='rules'>
                <h1>Rules</h1>
                <img src="/images/rules/image-rules-bonus.svg" alt='rules image'/>
                <button onClick={()=> setShowRules(false)}><img src='/images/rules/icon-close.svg' alt='close rules'/></button>
            </section>
        </div>
    )
}export default RulesScreen