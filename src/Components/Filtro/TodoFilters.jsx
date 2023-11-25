import React from 'react'
import { FilterButton, FiltersContainer } from './Filtro.components'
import { Center, Link, Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'


const TodoFilters = ({ getFilter }) => {
  return (
    <FiltersContainer>
      <FilterButton action={() => { }} getFilter={getFilter} filter='All' icon={1} bg='black' />
      <FilterButton action={() => { }} getFilter={getFilter} filter='Completed' icon={2} />
      <FilterButton action={() => { }} getFilter={getFilter} filter='Remaining' icon={3} />
    </FiltersContainer>
  )
}

export default TodoFilters