import React from "react"
import style from "./navbar.module.css"

const Navbar = () => {
	return (
		<div className={style.navbarContainer}>
			<div className={style.iconContaner}>
				<div className={style.icon}>Icon</div>
			</div>
			<div className={style.navOptionContainer}>
				<ul className={style.navContent}>
					<li className={style.navItem}>Item 1</li>
					<li className={style.navItem}>Item 2</li>
					<li className={style.navItem}>Item 3</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
