import { useRouter } from 'next/router'
import Head from 'next/head'

import RightBlock from '/components/ui/HeaderRightBlock/HeaderRightBlock'
import Header from '/components/Header/Header'
import Container from '/components/ui/Container/Container'

import styles from '/styles/Main.module.scss'

const Layout = ({ children }) => {
  const router = useRouter()

  let title

  switch (router.pathname) {
    case '/cart':
      title = 'Корзина'
      break

    default:
      title = 'Главная'
      break
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Header className={styles.Header}>
          {router.pathname === '/' && <RightBlock />}
        </Header>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout
