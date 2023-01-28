import { useSelector } from 'react-redux'
import { selectItems } from '/redux/slices/itemsSlice'

import GridBlock from '/components/ui/GridBlock/GridBlock'
import PizzaItem from '/components/PizzaItem/PizzaItem'
import Skeleton from '/components/ui/PizzaSkeleton/PizzaSkeleton'

import styles from './PizzaBlock.module.scss'

const PizzaBlock = ({ items, status }) => {
  const { perPage } = useSelector(selectItems)
  return (
    <GridBlock>
      <h1 className={styles.Title}>Все пиццы</h1>
      <ul className={styles.List}>
        {status === 'loading'
          ? [...new Array(perPage)].map((_, i) => (
              <Skeleton className={styles.Skeleton} key={i} />
            ))
          : items.map((item) => <PizzaItem {...item} key={item.id} />)}
      </ul>
    </GridBlock>
  )
}

export default PizzaBlock
