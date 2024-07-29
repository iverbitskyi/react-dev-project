import styles from './Navbar.module.scss';

export const Navbar = () => {
	return (
		<div className={styles.wrapper}>
			<span>Home</span>
			<span>About</span>
			<span>Contact</span>
		</div>
	);
};
