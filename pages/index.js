import Layout from '/components/Layout/Layout'

import Categories from '/components/Categories/Categories'
import PizzaBlock from '/components/PizzaBlock/PizzaBlock'

const index = () => {
  return (
    <Layout>
      <Categories />
      <PizzaBlock />
    </Layout>
  )
}

export default index
