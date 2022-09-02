import styles from './Container.module.css';

export const Container = ({ style = {}, ...props }) => {
  return <div className={styles.container} {...props} />;
};
