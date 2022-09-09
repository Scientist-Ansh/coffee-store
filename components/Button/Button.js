import styles from './Button.module.css';

export const Button = ({
  text,
  icon,
  styleType,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles[styleType]} ${className} ${styles.button}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
