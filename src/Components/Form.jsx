import { useState , useContext} from "react";
import styles from "./Form.module.css";
import Mensaje from '../Components/Mensaje.jsx'
import { themeContext } from "../context/themeContext";

const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState("")
    const [submited, setSubmited] = useState(false)
    let {theme, changeTheme} = useContext(themeContext) 
    
    const validarNombre = (nombre) => {
        let sinEspacios = nombre.trim()
        if (sinEspacios.length > 5){
            return true
        }
        return false
    }
    const validarEmail = (email) => {
        const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
        return regex.test(email)
    }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmited(true)
    
    if (!validarNombre(nombre) || !validarEmail(email)){
      setSuccess(false)
    } else{
      setSuccess(true)
    }
  };

  return (
    <>
    <div
        className={`text-center card container ${theme.opcion == "light" ? styles.card : styles.cardDark}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Nombre Completo"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              required
            />
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </form>
          <Mensaje success={success} nombre={nombre} submited={submited}/>
        </div>
      </div>
    </>
  );
};

export default Form;
