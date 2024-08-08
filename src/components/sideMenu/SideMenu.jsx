import styles from './SideMenu.module.scss';
import { LuAccessibility } from 'react-icons/lu';

export const SideMenu = ({ isMenuOpen }) => {
	return (
		<div className={styles.wrapper} style={{ width: isMenuOpen ? '300px' : '50px' }}>
			<button className={styles.wrapper_button}>
				<div className={styles.wrapper_button_icon}>
					<LuAccessibility />
				</div>
				<div className={styles.wrapper_button_text}>zalupa</div>
			</button>
			<button className={styles.wrapper_button}>
				<div className={styles.wrapper_button_icon}>
					<LuAccessibility />
				</div>
				<div className={styles.wrapper_button_text}>zalupa_bobra</div>
			</button>
			<button className={styles.wrapper_button}>
				<div className={styles.wrapper_button_icon}>
					<LuAccessibility />
				</div>
				<div className={styles.wrapper_button_text}>zalupa_root</div>
			</button>
		</div>
	);
};
