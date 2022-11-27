import GridBlock from '/components/ui/GridBlock/GridBlock'
import PizzaList from '/components/PizzaList/PizzaList'

import styles from './PizzaBlock.module.scss'

const PizzaBlock = () => {
  return (
    <GridBlock>
      <h1 className={styles.Title}>Все пиццы</h1>
      <PizzaList />
    </GridBlock>
  )
}

export default PizzaBlock
