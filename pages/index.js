import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPizzas } from '/redux/slices/itemsSlice'

import GridBlock from '/components/ui/GridBlock/GridBlock'
import Layout from '/components/Layout/Layout'
import Categories from '/components/ui/Categories/Categories'
import Sort from '/components/ui/Sort/Sort'
import PizzaBlock from '/components/PizzaBlock/PizzaBlock'
// import Pagination from '/components/ui/Pagination/Pagination'

import styles from '/styles/Main.module.scss'
// import { useRouter } from 'next/router'
// const location = useRouter().asPath

// console.log(location)

const index = () => {
  const dispatch = useDispatch()
  const { categoryId, sortId } = useSelector((state) => state.filter)
  const { searchValue } = useSelector((state) => state.search)
  const { items, status } = useSelector((state) => state.pizzas)

  // const [currentPage, setCurrentPage] = useState(1)
  // const [countPizzasPerPage] = useState(4)

  const getPizzas = async () => {
    const API_URL = `https://63998b6316b0fdad7740477b.mockapi.io/items?`
    const categoryApi = categoryId > 0 ? `category=${categoryId}` : ''
    const sortApi = sortId.sortProp.includes('-') ? 'desc' : 'asc'
    const sortByApi = sortId.sortProp.replace('-', '')
    const searchApi = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchPizzas({
        API_URL,
        categoryApi,
        sortApi,
        sortByApi,
        searchApi,
      })
    )

    // await axios
    //   .get(
    //     `${API_URL}&${categoryApi}&sortBy=${sortByApi}&order=${sortApi}${searchApi}`
    //   )
    //   .then((res) => {
    //     dispatch(setItems(res.data))
    //     setIsLoading(false)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     setIsLoading(false)
    //   })
  }

  useEffect(() => {
    getPizzas()
  }, [categoryId, sortId.sortProp, searchValue])

  // const lastPizzaIndex = currentPage * countPizzasPerPage
  // const firstPizzaIndex = lastPizzaIndex - countPizzasPerPage
  // const currentPizza = pizzasItems.slice(firstPizzaIndex, lastPizzaIndex)

  // const onClickPaginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Layout page="main">
      <GridBlock className={styles.ControlBar}>
        <Categories />
        <Sort />
      </GridBlock>
      {status === 'error' ? (
        <div className={styles.ErrorContainer}>
          <h1>Ошибка сервера</h1>
          <p>К сожалению произошла ошибка. Попробуйте еще раз!</p>
        </div>
      ) : (
        <PizzaBlock items={items} status={status} />
      )}
      {/* {countPizzasPerPage < pizzasItems.length ? (
        <Pagination
          countPizzasPerPage={countPizzasPerPage}
          totalPizzas={pizzasItems.length}
          onClickPaginate={onClickPaginate}
          currentPage={currentPage}
        />
      ) : null} */}
    </Layout>
  )
}

export default index
