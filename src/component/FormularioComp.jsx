export const FormularioComp = () => {
  return (
    <>
        <div className="container p-3 bg-color-red">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Formulario Completo</h3>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-6 align-items-center justify-content-center">
                  <label className="p-2" htmlFor="rut-user">Ingrese su Rut:</label>
                  <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Ej: 18341345 (sin guion ni ceros)"
                    name="rut-user"
                  />
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-6 align-items-center justify-content-center">
                  <label className="p-2" htmlFor="">Ingrese su Nombre Completo</label>
                  <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Ej: Juan Roman Aguilar Paz"
                  />
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-6 align-items-center justify-content-center">
                  <label className="p-2" htmlFor="">Ingrese su Correo Electronico</label>
                  <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Ej: jr.aguilar@gmail.com"
                  />
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-6 align-items-center justify-content-center">
                  <label className="p-2" htmlFor="">Ingrese su :</label>
                  <input 
                    className="form-control " 
                    type="text" 
                    placeholder="Ej: 18341345 (sin guion ni ceros)"
                  />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
