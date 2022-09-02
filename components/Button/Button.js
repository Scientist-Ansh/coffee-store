import styles from './Button.module.css';

export const Button = ({ text, icon, styleType, onClick, ...props }) => {
  return (
    <button {...props} className={styles[styleType]} onClick={onClick}>
      {text}
    </button>
  );
};
