import GridBlock from '/components/ui/GridBlock/GridBlock'
import PizzaItem from '/components/PizzaItem/PizzaItem'
import Skeleton from '/components/ui/PizzaSkeleton/PizzaSkeleton'

import styles from './PizzaBlock.module.scss'

const PizzaBlock = ({ isLoading, items, countPizzasPerPage }) => {
  return (
    <GridBlock>
      <h1 className={styles.Title}>Все пиццы</h1>
      <ul className={styles.List}>
        {isLoading
          ? [...new Array(countPizzasPerPage)].map((_, i) => (
              <Skeleton className={styles.Skeleton} key={i} />
            ))
          : items?.map((item) => (
              <PizzaItem
                title={item.title}
                img={`/img/pizzaItem/${item.src}.png`}
                width={260}
                height={260}
                price={item.price}
                types={item.types}
                sizes={item.sizes}
                key={item.id}
              />
            ))}
      </ul>
    </GridBlock>
  )
}

export default PizzaBlock
