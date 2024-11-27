  import SideBar from '../components/side-bar';
  import { Outlet } from 'react-router-dom';
  import styles from './index.module.scss';

  export default function Index() {
    return (
      <div className={styles.container}>
        <SideBar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    );
  }
