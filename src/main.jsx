import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

/*
// <p> Hola mundo </p>
//const x = <p> Hola mundo </p>

//Componentes y Propiedades

const Li = ({ children, estado, casa, edad }) => {
  console.log(casa, edad);
  return (
    <li>{children} {estado}</li>
  )
}
const X = () =>
<ul>
  <Li
   estado = {'feliz'}
   casa = {false}
   edad = {5}
   >
     Peluu
     </Li>
  <Li estado={'chingon'}>Atos</Li>
  <Li estado={'the best'}>Bad Bunny</Li>
</ul>

ReactDOM.render(
 // 'lala',document.getElementById('root') 
 <X />,document.getElementById('root') 
)
// Puede ser cambiado por React.createElement()

*/