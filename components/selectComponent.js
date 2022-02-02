import styles from "../styles/Home.module.css";
const SelectInputComponent = ({
	placeholder,
	nameArray,
	handleOnChangeSelectInputComponent,
}) => {
	return (
		<div className={styles.selectComponent}>
			<select
				className={styles.selectInputComponent}
				onChange={handleOnChangeSelectInputComponent}
			>
				<option className={styles.option} value="0">
					{placeholder}
				</option>

				{nameArray !== undefined ? (
					nameArray.map((c, i) => (
						<option key={i} className={styles.option} value={c}>
							{c}
						</option>
					))
				) : (
					<></>
				)}
			</select>
		</div>
	);
};

export default SelectInputComponent;
