import {useParams ,Link} from "react-router-dom"
import styles from './CountryDetails.module.css'
import { GoArrowLeft } from "react-icons/go";
import { PiCursorClickThin } from "react-icons/pi";import { useEffect, useState } from "react";
import { ImGift } from "react-icons/im";

function CountryDetails() {
    const {code} = useParams()
    const [data,setData] =useState(null)
    const [bordersNames, setBordersNames] = useState([])
    const firstCurrency = data?.currencies ? Object.keys(data.currencies)[0] : null;
    const firstNativeName =  data?.name?.nativeName[Object.keys(data?.name?.nativeName)[0]];


    useEffect(()=>{
        if (!code) return
        async function returnCountry() {

            const respos = await fetch(`https://restcountries.com/v3.1/alpha/${code}?fields=name,population,region,capital,tld,flags,subregion,currencies,borders,languages`)

            const data = await respos.json()
            setData(data)
            if (!data?.borders) return

            async function fetchBorders() {
                const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${data.borders.join(',')}&fields=name,cca3`)
                const bordersData = await res.json()
                setBordersNames(bordersData)
            }
            fetchBorders()
        }
        returnCountry(code)
    },[code])

    return(
        <main className={styles.container}>
            <Link to={"/"} className={styles.container_back}>
                <GoArrowLeft/>
                <span>Back</span>
            </Link>
            {!data && <p>Carregando...</p>}

            {data &&(
            <article className={styles.containerItem}>
                <img src={data.flags.svg} alt={`Flag of ${data.name.common}`} />
                
                <div className={styles.sec_div}>
                    <section className={styles.about}>
                        <h2>{data.name.common}</h2>
                        
                        <div className={styles.teste}>
                            <div className={styles.divContainer}>
                                <p>
                                    <span>Native Name: </span>
                                    {firstNativeName? firstNativeName.common : "N/D"}
                                </p>
                                <p> 
                                    <span>Population: </span>
                                    {data.population} 
                                </p>
                                <p>
                                    <span>Region: </span>
                                    {data.region} 
                                </p>
                                <p> 
                                    <span>Sub Region: </span>
                                    {data.subregion}
                                </p>
                                <p>
                                    <span>Capital: </span>
                                    {data.capital }
                                </p>
                            </div>
                            <div className={styles.divContainer}>
                                <p> 
                                    <span>Top Level Domain: </span>
                                    {data.tld }
                                </p>
                                <p>
                                    <span>Currencies: </span>
                                    {
                                       firstCurrency?
                                       `${data.currencies[firstCurrency].name} -
                                       ${data.currencies[firstCurrency].symbol}`:'N/D'
                                    }
                                </p>
                                <div className={styles.span_div}>
                                    <span>languages: </span>
                                    {data?.languages && Object.values(data.languages).map((lang,index,array) => (
                                    <p key={lang}>{lang}{index < array.length -1 ? ',':''}</p>
                                ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={`${styles.divContainer} ${styles.sec}`}>
                        <span>Border Countries: </span>
                        {bordersNames.length > 0 && (
                            <div className={styles.borders}>
                                {bordersNames.map((border) => (
                                 <Link className={styles.link} to={`/country/${border.cca3}`} key={border.cca3}>
                                    {border.name.common}
                                </Link>
                                ))}
                            </div>
                        )}
                        <PiCursorClickThin className={styles.cursor}/>

                    </section>
                </div>
            </article>)} 
        </main>
)}export default CountryDetails