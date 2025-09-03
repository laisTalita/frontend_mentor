import { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';
import YourCart from './component/YourCart';
import ConfirmOrder from './component/ConfirmOrder';

function App(){

  const[products,setProducts] = useState([])
  const[car,setCar] = useState([])
  const [confirmed, setConfirmed] = useState([])

  
  useEffect(()=>{
    fetch('./data.json')
    .then(res=> res.json())
    .then( resul =>{
      setProducts(resul)
    })
  },[])

  const remove =(iten)=>{
    setCar(prev=> prev.filter(item =>
        item.name !== iten.name
      ))
  }
  const recebeCar=(product, quantity)=>{
     setCar(prev=>{
        const index = prev.find(item => item.name === product.name)
          if (index) {
            return(
              prev.map(item =>
              item.name === product.name?
              {...item, quantity: item.quantity + quantity}
              :item)
            )
          }
        return [...prev,{ ...product, quantity }];
     })
  }

  return (
    <><main className="App">
      <section className='app_sec'>
        <h1>Desserts</h1>
        <div className='container-grid'>
          {
            products && products.map((item)=>{
              return <Card key={item?.name} name={item?.name} category={item?.category} price={item?.price} img={item?.image} func={recebeCar} car={car}/>
          })
          }
        </div>
      </section>
      <aside className='aside_app'>
        <YourCart car={car} onRemove={remove} setConfirmed={setConfirmed}/>
      </aside>
      { 
       confirmed.length >0 ?
       (
        <ConfirmOrder confirmed={confirmed} setConfirmed={setConfirmed} setCar={setCar}/>
       ):(<></>)
      }
    </main>
    <footer>
      <p>
        Challenge by  
        <a href="https://www.frontendmentor.io/profile/laisTalita" target='_blank'> Frontend Mentor</a>. Coded by 
        <a href="https://github.com/laisTalita" target='_blank'> Lais Talita</a>.
        </p>
      </footer> 
    </>
  );
}

export default App;
