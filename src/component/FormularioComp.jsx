export const FormularioComp = () => {
   const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    const voteMade = () => {
  }
  return (
    <>
      <div className="container" >
        <form onSubmit={onSubmit}>
          <div className="row shadow mt-3" style={{ 
              borderRadius: '15px', 
              marginLeft: '100px', 
              marginRight: '100px', 
              backgroundColor: '#F8F9F9' 
              }}>
            <div className="col mt-2">
              <h3 className="text-center">Formulario Completo</h3>
            </div>
            <div className="row mt-2">
              <div className="col d-flex justify-content-evenly">
                <label htmlFor="rut-user">1.- Ingrese su Rut :</label>
              </div>
              <div className="col">
                <input
                  className="text-center"
                  type="text"
                  placeholder="Ej: 18341345 (sin guion ni ceros)"
                  name="rut-user"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col d-flex justify-content-evenly">
                <div>
                  <label htmlFor="full_name"> 2.- Ingrese su Nombre Completo :</label>
                </div>
                <input
                  className=""
                  type="text"
                  placeholder="Ej: Juan Roman Aguilar Paz"
                  name="full_name"
                />
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-6 align-items-center justify-content-center">
                <label className="p-1" htmlFor="correo">3.- Ingrese su Correo Electronico:</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Ej: jr.aguilar@gmail.com"
                  name="correo"
                />
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-6 align-items-center justify-content-center">
                <label className="p-1" htmlFor="">4.- Ingrese su Region:</label>
                <select className="form-select form-select-sm" defaultValue="default">
                  <option disabled value="default">Ej: Coquimbo</option>
                  <option value="">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-6 align-items-center justify-content-center">
                <label className="p-1" htmlFor="">5.- Ingrese su Comuna:</label>
                <select className="form-select form-select-sm" defaultValue="default">
                  <option disabled value="default">Ej: La Serena</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-6 align-items-center justify-content-center">
                <label className="p-1" htmlFor="">6.- Ingrese su Candidato:</label>
                <select className="form-select form-select-sm" defaultValue="default">
                  <option disabled value="default">Ej: Carlos Contreras</option>
                  <option value="1" >One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-6 align-items-center justify-content-center">
                <label className="p-1" htmlFor="">7.- Ingrese su Comuna:</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Web</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">TV</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Redes Sociales</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Amigos</label>
                  </div>
                </div>
                <div className="row mt-2 mb-4">
                  <div className="col-6 ">
                    <button className="btn btn-success" onClick={voteMade}>Ingressar Voto</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
