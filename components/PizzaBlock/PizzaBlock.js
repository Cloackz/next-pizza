import GridBlock from '/components/ui/GridBlock/GridBlock'
import PizzaItem from '/components/PizzaItem/PizzaItem'
import Skeleton from '/components/ui/PizzaSkeleton/PizzaSkeleton'

import styles from './PizzaBlock.module.scss'

const PizzaBlock = ({ items, status }) => {
  return (
    <GridBlock>
      <h1 className={styles.Title}>Все пиццы</h1>
      <ul className={styles.List}>
        {status === 'loading'
          ? [...new Array(8)].map((_, i) => (
              <Skeleton className={styles.Skeleton} key={i} />
            ))
          : items.map((obj) => <PizzaItem {...obj} key={obj.id} />)}
      </ul>
    </GridBlock>
  )
}

export default PizzaBlock
