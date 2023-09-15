const Mensaje = ({success, nombre, submited}) => {
    const displayMensaje = (success, nombre, submited) => {
        if (submited){
            if (success){
                return (
                    <>
                    <div className="alert alert-success alert-dismissible">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong></strong> Gracias {nombre}, te contactaremos cuanto antes vía mail</div>
                        </>
                )
            } else {
                return (
                    <>
                    <div className="alert alert-danger alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong> "Por favor verifique su información nuevamente"</strong> </div>
                    </>
                )
            }
        } else {
            return (<></>)
        }
    }
    return (
        <>
        {displayMensaje(success, nombre, submited)}
        </>
    )
}

export default Mensaje