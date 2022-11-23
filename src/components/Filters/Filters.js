import React from 'react'
import Gender from '../Filters/Category/Gender'
import Species from '../Filters/Category/Species'
import Status from '../Filters/Category/Status'

const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  let limpiar=()=>{
    setStatus("");setPageNumber(""); setGender(""); setSpecies("")
    window.location.reload(false)
  }
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filtros</div>
      <div 
      onClick={limpiar}
      style={{cursor: "pointer" }} className="text-center text-primary text-decoration-underline mb-4">
        Quitar Filtros
        </div>

        <div className="accordion" id="accordionExample">
        <Status  setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
 
  
</div>

    </div>
  )
}

export default Filters
