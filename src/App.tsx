import { Counter } from './pages/Counter'
import { PokemonApp } from './pages/PokemonApp'

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <div>
        <Counter />
        <PokemonApp />
      </div>
    </div>
  )
}

export default App
