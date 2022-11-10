import GridBlock from '/components/ui/GridBlock/GridBlock'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <GridBlock Tag="header" className={styles.Header}>
      <div className={styles.Logo}>
        <img src="/img/logo.svg"></img>
        <div className={styles.LogoText}>
          <h1>pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <button className={StyleSheet.Button}>
        <span className={StyleSheet.ButtonPrice}>520 р</span>
        <div className={StyleSheet.ButtonФmount}>
          <svg></svg>
          <span>3</span>
        </div>
      </button>
    </GridBlock>
  )
}

export default Header
