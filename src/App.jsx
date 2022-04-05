import Button from './Button'

const arr = [
  'lobaa',
  'peluu',
  'neni',

]
const App = () => {
  const miVariable = false
  if (miVariable){
    return <p>Mi variable es true</p>
  }
  return (
    <div>
      <h1 onClick={(e) => console.log('click', e)}
      >Hola Mundo</h1>
      {arr.map(el => <p key={el}>{el}</p>)}
     <Button onClick = {() => console.log('clikeado')}>
       Enviar
       </Button>
    </div>
  )
}

export default App;