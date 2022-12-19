import Header from '/components/Header/Header'
import Button from '../ui/Button/Button'
import Container from '/components/ui/Container/Container'
import styles from '/styles/Main.module.scss'

const Layout = ({ children, page }) => {
  return (
    <Container>
      <Header>
        {page === 'main' && (
          <Button className={styles.Button} href={'/cart'}>
            <span className={styles.ButtonPrice}>520 ₽</span>
            <div className={styles.ButtonMount}>
              <img src="/img/cart.svg"></img>
              <span>3</span>
            </div>
          </Button>
        )}
      </Header>
      <main>{children}</main>
    </Container>
  )
}

export default Layout
