import { Link } from 'react-router-dom';
import { LuAccessibility } from 'react-icons/lu';
import styles from './SideMenu.module.scss';


export const SideMenu = ({ isMenuOpen }) => {
	return (
		<div className={styles.wrapper} style={{ width: isMenuOpen ? '300px' : '50px' }}>
			<Link to="/">
				<button className={styles.wrapper_button}>
					<div className={styles.wrapper_button_icon}>
						<LuAccessibility />
					</div>
					<div className={styles.wrapper_button_text}>Home</div>
				</button>
			</Link>
			<Link to="/login">
			<button className={styles.wrapper_button}>
				<div className={styles.wrapper_button_icon}>
					<LuAccessibility />
				</div>
				<div className={styles.wrapper_button_text}>Login</div>
			</button>
			</Link>
			<Link to="/">
			<button className={styles.wrapper_button}>
				<div className={styles.wrapper_button_icon}>
					<LuAccessibility />
				</div>
				<div className={styles.wrapper_button_text}>Page 2</div>
			</button>
			</Link>
		</div>
	);
};
