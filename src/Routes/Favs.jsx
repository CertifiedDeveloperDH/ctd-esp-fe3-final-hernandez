import CardDestacado from '../Components/CardDestacado.jsx'
import { useState, useEffect } from 'react';
const Favs = () => {
    const [destacados, setDestacados] = useState([])
    useEffect(() => {
      setDestacados(JSON.parse(localStorage.getItem("destacados")))
    }, []);

    console.log(destacados)
    return (
      <>
        <h1>Dentists Favs</h1>
        <div className="card-grid container">
          {destacados && destacados.map((destacado) => {
            return (<CardDestacado key={destacado.id} destacado={destacado}/>)
          })}
        </div>
      </>
    );
}

export default Favs