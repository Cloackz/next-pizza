import Layout from '/components/Layout/Layout'
import ControlBar from '/components/ControlBar/ControlBar'

import PizzaBlock from '/components/PizzaBlock/PizzaBlock'

const index = () => {
  return (
    <Layout page="main">
      <ControlBar />
      <PizzaBlock />
    </Layout>
  )
}

export default index
