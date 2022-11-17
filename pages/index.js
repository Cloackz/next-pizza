import Container from '/components/ui/Container/Container'
import Header from '/components/Header/Header'
import Categories from '/components/Categories/Categories'

import styles from '/styles/Main.module.scss'

const index = () => {
  return (
    <>
      <Container className={styles.ContainerHeader}>
        <Header />
      </Container>
      <Container>
        <Categories />
      </Container>
    </>
  )
}

export default index
