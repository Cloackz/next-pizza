import { useRouter } from 'next/router'

import RightBlock from '/components/ui/HeaderRightBlock/HeaderRightBlock'
import Header from '/components/Header/Header'
import Container from '/components/ui/Container/Container'

import styles from '/styles/Main.module.scss'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <Container>
      <Header className={styles.Header}>
        {router.pathname === '/' && <RightBlock />}
      </Header>
      <main>{children}</main>
    </Container>
  )
}

export default Layout
