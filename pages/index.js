import Container from '/components/ui/Container/Container'
import Header from '/components/Header/Header'

import styles from '/styles/Main.module.scss'

const index = () => {
  return (
    <Container className={styles.ContainerHeader}>
      <Header />
    </Container>
  )
}

export default index
