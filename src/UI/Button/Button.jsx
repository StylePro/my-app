import styles from './Button.module.css'

const Button = ({children, onClick, title, disable=false}) => {
    return (
        <button className={styles.button} onClick={onClick} title={title}>
            {children}
        </button>
    );
};

export default Button;