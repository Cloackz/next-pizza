import Header from '/components/Header/Header'
import Container from '/components/ui/Container/Container'

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  )
}

export default Layout
