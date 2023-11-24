import React from 'react'
import { FilterButton, FiltersContainer } from './Filtro.components'

const TodoFilters = () => {
  return (

    
   <FiltersContainer>
        <FilterButton action={()=>{}}  filter='Noche' icon={1}/>
        <FilterButton action={()=>{}}  filter='Completed' icon={2}/>
        <FilterButton action={()=>{}}  filter='Remaining' icon={3}/>
   </FiltersContainer>
  )
}

export default TodoFilters