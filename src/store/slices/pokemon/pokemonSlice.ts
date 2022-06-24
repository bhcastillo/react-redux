import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IPokemonState {
  page: number
  pokemons: any[]
  isLoading: boolean
}

const initialState: IPokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'Pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true
    },
    setPokemons: (state, action: PayloadAction<{ page: number; pokemons: any[] }>) => {
      state.isLoading = false
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    },
  },
})

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
