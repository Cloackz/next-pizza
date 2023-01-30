import GridBlock from '/components/ui/GridBlock/GridBlock';
import Link from 'next/link';

import styles from './Header.module.scss';
import classNames from 'classnames';

const Header = ({ children, className }) => {
  return (
    <GridBlock Tag="header" className={classNames(styles.Header, className)}>
      <div className={styles.Logo}>
        <Link href="/">
          <img src="/img/logo.svg"></img>
        </Link>
        <div className={styles.LogoText}>
          <h1>pizza</h1>
          <p>Просто вкусная пицца</p>
        </div>
      </div>
      {children}
    </GridBlock>
  );
};

export default Header;
