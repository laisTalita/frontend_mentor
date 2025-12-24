import styles from '../Styles/ContentStep4.module.css'
function ContentStep4({inputs}) {

    const total = inputs.addons.reduce((acc,item)=> acc + item.price ,0)
    return(
        <>
                <div className={"container"}>
                    <h1>Finishing up</h1>
                    <p className={styles.finish}>Double-check everything looks <span className={styles.ok}>ok</span> before confirming.</p>
                </div>
                <div className={styles.container4}>
                    <section className={styles.container_inputs4}>
                        <div>
                            <h2> {inputs.planSelected.name} ({inputs.plan})</h2>
                            <a href="">Change</a>
                        </div>
                        <span> {inputs.planSelected.value}</span>
                    </section>
                    <hr/>

                    <section className={styles.sec2_4}>
                        {inputs.addons.map(item =>(
                            <div key={item.id}>
                                <p>{item.tittle}</p>
                                <span>{item.value}</span>
                            </div>
                        ))
                        }
                    </section>
                </div>
                <div className={styles.total}>
                    <p>Total (per {inputs.plan ==="Monthly"?'month':'year'})</p>
                    <span>+${total+ inputs.planSelected.price || 0}/{inputs.plan ==='Monthly'?'mo':'yr'}</span>
                </div>
        </>
    )
}export default ContentStep4