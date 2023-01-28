import RightBlock from '/components/ui/HeaderRightBlock/HeaderRightBlock'
import Header from '/components/Header/Header'
import Container from '/components/ui/Container/Container'

import styles from '/styles/Main.module.scss'

const Layout = ({ children, page }) => {
  return (
    <Container>
      <Header className={styles.Header}>
        {page === 'main' && <RightBlock />}
      </Header>
      <main>{children}</main>
    </Container>
  )
}

export default Layout
