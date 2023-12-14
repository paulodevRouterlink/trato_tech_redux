import { createSlice } from '@reduxjs/toolkit'
import { CategoryProps } from '@/@types/CategoryProps'

import { Assets } from '@/assets'
import { RootState } from '../index'

export const initialState: CategoryProps[] = [
  {
    id: 'eletronicos',
    name: 'Eletrônicos',
    thumbnail: Assets.Electronics,
    header: Assets.HeadElectronic,
    description:
      'Os melhores e mais atuais dispositivos eletrônicos estão aqui!',
  },
  {
    id: 'automotivos',
    name: 'Automotivo',
    thumbnail: Assets.Automotive,
    header: Assets.HeadAutomotive,
    description:
      'Encontre aqui equipamentos para deixar seu carro com a sua cara!',
  },
  {
    id: 'jogos',
    name: 'Jogos',
    thumbnail: Assets.Games,
    header: Assets.HeadGames,
    description: 'Adquira os consoles e jogos mais atuais do mercado !',
  },
  {
    id: 'escritorio',
    name: 'Escritório',
    thumbnail: Assets.Setup,
    header: Assets.HeadSetup,
    description: 'Tudo para o que escritório ficar incrível!',
  },
  {
    id: 'som',
    name: 'Som e imagem',
    thumbnail: Assets.Sound,
    header: Assets.HeadSound,
    description: 'Curta suas músicas e seus filmes com a melhor qualidade!',
  },
]

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
})

export default categoriesSlice.reducer
export const selectState = (state: RootState) => state.categories
