import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from '../store/slices/pokemon'

export const PokemonApp = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <div>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        <li>pro</li>
        <li>pro</li>
        <li>pro</li>
        <li>pro</li>
      </ul>
    </div>
  )
}
