import React from 'react'
import data from '/data/pizzaItem'
import PizzaItem from '/components/PizzaItem/PizzaItem'

import styles from './PizzaList.module.scss'

const PizzaList = () => {
  return (
    <ul className={styles.List}>
      {data.map((item, index) => (
        <PizzaItem
          title={item.title}
          img={`/img/pizzaItem/${item.src}.png`}
          width={260}
          height={260}
          price={item.price}
          key={index}
        />
      ))}
    </ul>
  )
}

export default PizzaList
