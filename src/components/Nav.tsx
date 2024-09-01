import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav className="flex justify-end">
		<button><NavLink to="/page002">next</NavLink></button>
	</nav>;
};
