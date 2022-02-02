import styles from "../styles/Home.module.css";
import ScrollBarComponentCard from "./scrollbarComponentCard";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { useRef, useState } from "react";
const ScrollbarComponent = ({ productName, cardArray, image }) => {
	const [scrollEnded, setScrollEnded] = useState(false);
	const [scrollOffsetValue, setScrollOffsetValue] = useState(null);
	const cardRef = useRef(null);
	const scroll = (scrollOffset) => {
		cardRef.current.scrollLeft += scrollOffset;
		console.log(cardRef.current.scrollLeft);
		setScrollOffsetValue(cardRef.current.scrollLeft);
	};

	return (
		<div>
			<div className={styles.ScrollbarComponentMain}>
				<div>
					<IoChevronBackOutline
						onClick={() => {
							scroll(-300);
						}}
						color="#FFFFFF"
						className={styles.icon}
					/>
				</div>
				<div style={{ width: "95%" }}>
					<h3 className={styles.headingText2}>{productName}</h3>
					<div className={styles.line}></div>
					<div className={styles.ScrollbarComponent} ref={cardRef}>
						{cardArray !== undefined ? (
							cardArray.map((c, i) => (
								<ScrollBarComponentCard
									key={i}
									productName={c.product_name}
									brandName={c.brand_name}
									price={c.price}
									image={c.image}
									state={c.address.state}
									city={c.address.city}
									description={c.discription}
									date={c.date}
								/>
							))
						) : (
							<></>
						)}
					</div>
				</div>
				<div>
					<IoChevronForwardOutline
						onClick={() => {
							scroll(300);
						}}
						color="#FFFFFF"
						className={styles.icon}
					/>
					{/* {scrollOffsetValue < 300 ? (
						<IoChevronBackOutline
							onClick={() => {
								scroll(-300);
							}}
							color="#FFFFFF"
							className={styles.icon}
						/>
					) : (
						<IoChevronForwardOutline
							onClick={() => {
								scroll(300);
							}}
							color="#FFFFFF"
							className={styles.icon}
						/>
					)} */}
				</div>
			</div>
		</div>
	);
};

export default ScrollbarComponent;
