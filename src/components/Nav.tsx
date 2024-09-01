import { NavLink, useLocation } from "react-router-dom";


export const Nav = () => {
  const location = useLocation();

  const path = location.pathname;
  const segments = path.split('/').filter(Boolean);
  const pageId = segments.length > 0 ? segments[segments.length - 1] : null;
  

	return <nav className="flex justify-end mt-2 mr-2">
		[{pageId}]
		<button><NavLink to="/page002">next</NavLink></button>
	</nav>;
};
