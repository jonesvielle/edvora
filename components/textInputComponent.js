import styles from "../styles/Home.module.css";
const InputComponent = () => {
	return (
		<div className={styles.inputComponentContainer}>
			<input placeholder="Filter" className={styles.inputComponent} />
		</div>
	);
};

export default InputComponent;
