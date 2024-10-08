import { useState } from 'react';
import { SideMenu } from '../sideMenu/SideMenu';
import styles from './Navbar.module.scss';
import { CiMenuFries } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handeMenuOpenChange = () => {
		setIsMenuOpen(prevState => !prevState);
	};

	return (
		<>
			<div className={`${styles.wrapper} bg-neutral-800`}>
				<button className={`${styles.wrapper_menu} text-neutral-100`} onClick={handeMenuOpenChange}>
					{isMenuOpen ? <IoIosClose size={25} /> : <CiMenuFries size={25} />}
				</button>
				<div className={styles.wrapper_user}>
					<span>User</span>
					<FaUserCircle size={25} />
				</div>
			</div>

			<SideMenu isMenuOpen={isMenuOpen} />
		</>
	);
};
