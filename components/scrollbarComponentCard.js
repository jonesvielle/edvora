import styles from "../styles/Home.module.css";

import Image from "next/image";
const ScrollBarComponentCard = ({
	productName,
	brandName,
	price,
	image,
	state,
	city,
	description,
	date,
}) => {
	return (
		<div className={styles.ScrollbarComponentCard}>
			<div className={styles.ScrollbarComponentCardTop}>
				<div style={{ borderRadius: "1000px", width: "40%" }}>
					<img
						className="product"
						src={image}
						alt="Picture of the product"
						width={70}
						height={70}
						// layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className={styles.ScrollbarComponentCardTopRight}>
					<b className={styles.headingText} style={{ fontSize: "16px" }}>
						{productName}
					</b>
					<b className={styles.headingText1} style={{ fontSize: "13px" }}>
						{brandName}
					</b>
					<b className={styles.headingText} style={{ fontSize: "13px" }}>
						{price}
					</b>
				</div>
			</div>
			<div className={styles.ScrollbarComponentCardBottom}>
				<b
					className={styles.headingText1}
					style={{
						fontSize: "13px",
						whiteSpace: "nowrap",
					}}
				>
					{state}, {city}
					{"  "}
				</b>
			</div>
			<b className={styles.headingText1} style={{ fontSize: "13px" }}>
				{date}
			</b>
			<div className={styles.ScrollbarComponentCardBottom1}>
				<b className={styles.headingText1} style={{ fontSize: "13px" }}>
					{description}
				</b>
			</div>
		</div>
	);
};

export default ScrollBarComponentCard;
