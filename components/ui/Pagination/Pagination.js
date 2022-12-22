import React from 'react'

import GridBlock from '/components/ui/GridBlock/GridBlock'

const Pagination = ({ countPizzas, totalPizzas, onClickPaginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPizzas / countPizzas); i++) {
    pageNumbers.push(i)
  }

  return (
    <GridBlock>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <span onClick={() => onClickPaginate(number)}>{number}</span>
          </li>
        ))}
      </ul>
    </GridBlock>
  )
}

export default Pagination
