import { useState } from 'react';
import { SideMenu } from '../sideMenu/SideMenu';
import styles from './Navbar.module.scss';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handeMenuOpenChange = () => {
		setIsMenuOpen(prevState => !prevState);
	};

	return (
		<>
			<div className={styles.wrapper}>
				<button className={styles.wrapper_menu} onClick={handeMenuOpenChange}>
					{isMenuOpen ? 'Close' : 'Open'}
				</button>
				<span>Home</span>
				<span>About</span>
				<span>Contact</span>
			</div>

			<SideMenu isMenuOpen={isMenuOpen} />
		</>
	);
};
