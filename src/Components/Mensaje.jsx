import { useState } from "react"
import { useEffect } from "react"

const Mensaje = ({success, nombre, submited}) => {
    const [visible, setVisible] = useState(true)
    const displayMensaje = (success, nombre, submited) => {
        if (submited){
            if (success){
                return (
                    <>
                    <div className="alert alert-danger alert-dismissible"  style={{display: visible ? 'block' : 'none'}} role="alert">
                        <button type="button" className="btn-close" data-dismiss="alert" onClick={() => setVisible(false)}>&times;</button>
                        <strong></strong> Gracias {nombre}, te contactaremos cuanto antes vía mail</div>
                        </>
                )
            } else {
                return (
                    <>
                    <div className="alert alert-danger alert-dismissible"  style={{display: visible ? 'block' : 'none'}} role="alert">
                    <button type="button" className="btn-close" data-dismiss="alert" onClick={() => setVisible(false)}>&times;</button>
                    <strong> "Por favor verifique su información nuevamente"</strong> </div>
                    </>
                )
            }
        } else {
            return (<></>)
        }
    }
    useEffect(()=>{
        setVisible(true)
        },[success])
        console.log(visible)
    return (
        <>
        {displayMensaje(success, nombre, submited)}
        </>
    )
}

export default Mensaje