import Layout from '/components/Layout/Layout'
import GridBlock from '/components/ui/GridBlock/GridBlock'
import Button from '/components/ui/Button/Button'

import styles from '/styles/Error.module.scss'

const error = () => {
  return (
    <Layout>
      <GridBlock className={styles.Error}>
        <h1 className={styles.ErrorTitle}>
          Извините, такой стараницы не существует!
        </h1>
        <Button href={'/'}>Вернуться на главную</Button>
      </GridBlock>
    </Layout>
  )
}

export default error
