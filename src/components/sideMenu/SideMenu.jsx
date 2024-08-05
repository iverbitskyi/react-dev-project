import styles from './SideMenu.module.scss';

export const SideMenu = ({ isMenuOpen }) => {
	return (
		<div className={styles.wrapper} style={{ width: isMenuOpen ? '300px' : '50px' }}>
			Side menu
		</div>
	);
};
