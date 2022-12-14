import GridBlock from '/components/ui/GridBlock/GridBlock'
import data from '/data/pizzaItem'
import PizzaItem from '/components/PizzaItem/PizzaItem'

import styles from './PizzaBlock.module.scss'

const PizzaBlock = () => {
  return (
    <GridBlock>
      <h1 className={styles.Title}>Все пиццы</h1>
      <ul className={styles.List}>
        {data.map((item, index) => (
          <PizzaItem
            title={item.title}
            img={`/img/pizzaItem/${item.src}.png`}
            width={260}
            height={260}
            price={item.price}
            types={item.types}
            sizes={item.sizes}
            key={index}
          />
        ))}
      </ul>
    </GridBlock>
  )
}

export default PizzaBlock
