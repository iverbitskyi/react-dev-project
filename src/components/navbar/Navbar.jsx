import { useState } from 'react';
import { SideMenu } from '../sideMenu/SideMenu';
import styles from './Navbar.module.scss';
import { CiMenuFries } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handeMenuOpenChange = () => {
		setIsMenuOpen(prevState => !prevState);
	};

	return (
		<>
			<div className={styles.wrapper}>
				<button className={styles.wrapper_menu} onClick={handeMenuOpenChange}>
					{isMenuOpen ? <IoIosClose /> : <CiMenuFries />}
				</button>
				<span>Home</span>
				<span>About</span>
				<span>Contact</span>
			</div>

			<SideMenu isMenuOpen={isMenuOpen} />
		</>
	);
};
