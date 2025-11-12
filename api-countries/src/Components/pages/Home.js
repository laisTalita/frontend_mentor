import Search from "../form_components/Search";
import { useEffect, useState } from "react";
import style from './Home.module.css'
import Options from "../form_components/Options";
import Card from "../body_components/Card";
import cardStyle  from '../body_components/Card.module.css'
import { Link } from "react-router-dom";


function Home() {
    const[searchTerm, setSearchTerm] = useState('')
    const[region, setRegion] = useState('')
    const[countries, setCountries] = useState([])
 
    async function all(){
        const resp = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3")        
        const data = await resp.json()
        setCountries(data)        
    }
    useEffect(()=>{
        all()
    },[])
    
    useEffect(()=>{
        if (!region){
            all()
            return
        } 
        async function byRegion(){
            const resp = await fetch(`https://restcountries.com/v3.1/region/${region}?fields=name,population,region,capital,tld,flags,cca3`)         
            const data = await resp.json()
            setCountries(data)        
        }
        byRegion()
    },[region])

    useEffect(()=>{
        if (!searchTerm) {
            all()
            return
        }
        async function byName(){
            const resp = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}?fields=name,population,region,capital,flags,cca3`)         
            const data = await resp.json()
            setCountries(data)     
        }
        byName()
    },[searchTerm])

    return(
        <main>
            <section className={style.searchs}>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <Options region ={region} setRegion={setRegion}/>
            </section>
            <section className={style.container_cards}>
                {
                countries.map((items)=>(
                    <Card to={`/country/${items.cca3}`} key={items.name.common}>
                        <div className={cardStyle.imagem}>
                        <img src={items.flags.svg} alt={`Flag of ${items.name.common}`} />
                        </div>
                        <div className={cardStyle.text}>
                            <p className={cardStyle.name}>{items.name.common}</p>
                            <p><span className={cardStyle.title}>Population</span>: {items.population}</p>
                            <p><span className={cardStyle.title}>Region</span>: {items.region}</p>
                            <p><span className={cardStyle.title}>Capital</span>: {items.capital}</p>
                        </div>
                    </Card>
                )
                )}
            </section>
        </main>
    )
}export default Home