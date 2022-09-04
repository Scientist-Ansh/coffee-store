import styles from './Container.module.css';

export const Container = ({ className, ...props }) => {
  return <div className={`${styles.container} ${className}`} {...props} />;
};
