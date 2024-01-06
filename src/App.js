import React, { useState } from "react";
import "./index.css";

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setImc] = useState("")
  const [mensaje, setMensaje] = useState("")

  let imgSrc= "./assets/bajo_peso.png";
  let calimc = (e) =>{
    e.preventDefault()

    if(peso ===0 || altura === 0){
      alert("Por favor ingrese una altura y un peso.")
    }else{
      let imc = (peso/((altura/100)^2))
      setImc(imc.toFixed(1))
      if(imc<18.5){
        setMensaje("Estás por debajo de tu peso recomendado")
        imgSrc = "./assets/bajo_peso.png"
      }else if(imc>=18.5 && imc<24.9 ){
        setMensaje("Estás es tu peso recomendado ")
        imgSrc = require("./assets/buen_peso.png")
      }else if(imc>=25 && imc<29.9){
        setMensaje("Estás por encima de tu peso recomendado")
        imgSrc = require("./assets/mal_peso.png")
      }else{
        setMensaje("Estás con sobrepeso, acude a un médico para mejor atención")
        imgSrc = require("./assets/obeso.png")
      }
    }
  }


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className="container">
        <h2>Calculadora de Índice de masa corporal</h2>
        <form onSubmit={calimc}>
          <div>
            <label>Peso(KG)</label>
            <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
          </div>
          <div>
            <label>Estatura(CM)</label>
            <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">Guardar</button>
            <button className="btn btn-outline" type="submit" onClick={reload}>Reiniciar</button>
          </div>
        </form>
        <div className="results">
          <h3>Tu IMC es: {imc}</h3>
          <p>{mensaje}</p>
        </div>
        <div className="img-container"></div>
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}

export default App;
