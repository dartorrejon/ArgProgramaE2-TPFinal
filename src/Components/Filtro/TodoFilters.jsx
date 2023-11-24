import React from 'react'
import { FilterButton, FiltersContainer } from './Filtro.components'
import { Center, Link } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'


const TodoFilters = () => {
  return (
    // <FiltersContainer>
    //   <FilterButton action={() => { }} filter='Noche' icon={1} />
    //   <FilterButton action={() => { }} filter='Completed' icon={2} />
    //   <FilterButton action={() => { }} filter='Remaining' icon={3} />
    // </FiltersContainer>

    <Center>
      <Link href='/'>All</Link>
      <Link href='/completed'>Completed</Link>
      <Link href='/remaining'>Remaining</Link>
    </Center>
  )
}

export default TodoFilters