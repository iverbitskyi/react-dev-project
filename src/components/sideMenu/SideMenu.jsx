import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { GiMonkey } from "react-icons/gi";
import styles from './SideMenu.module.scss';


export const SideMenu = ({ isMenuOpen }) => {
	return (
		<div className={`${styles.wrapper} bg-blue-300`} style={{ width: isMenuOpen ? '300px' : '50px' }}>
			<Link to="/">
				<button className={`${styles.wrapper_button} hover:bg-blue-100`}>
					<div className={styles.wrapper_button_icon}>
						<FaHome />
					</div>
					<div className={styles.wrapper_button_text}>Home</div>
				</button>
			</Link>
			<Link to="/login">
			<button className={`${styles.wrapper_button} hover:bg-blue-100`}>
				<div className={styles.wrapper_button_icon}>
					<MdOutlineLogin />
				</div>
				<div className={styles.wrapper_button_text}>Login</div>
			</button>
			</Link>
			<Link to="/">
			<button className={`${styles.wrapper_button} hover:bg-blue-100`}>
				<div className={styles.wrapper_button_icon}>
					<GiMonkey />
				</div>
				<div className={styles.wrapper_button_text}>Page 2</div>
			</button>
			</Link>
		</div>
	);
};
