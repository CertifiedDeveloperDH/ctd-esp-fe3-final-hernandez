import { useState } from "react";
import Mensaje from '../Components/Mensaje.jsx'
const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState("")
    const [submited, setSubmited] = useState(false)

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
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Nombre Completo"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              required
            />
            <button type="submit">
              Send
            </button>
          </form>
          <Mensaje success={success} nombre={nombre} submited={submited}/>
    </>
  );
};

export default Form;
