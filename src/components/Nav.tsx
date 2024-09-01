import { NavLink, useLocation } from "react-router-dom";

const pages = [
	"welcome",
	"page002",
	"page003"
];


export const Nav = () => {
	const location = useLocation();

	const getNextPageId = () => {
		const path = location.pathname;
		const segments = path.split('/').filter(Boolean);
		const currentPageId = segments.length > 0 ? segments[segments.length - 1] : "welcome";
		const currentIndex = pages.indexOf(currentPageId);
		if (currentIndex === -1 || currentIndex === pages.length - 1) {
			return 'welcome';
		}
		return pages[currentIndex + 1];
	}
	const nextPageId = getNextPageId();

	return <nav className="flex justify-end mt-2 mr-2">
		<button><NavLink to={nextPageId}>next</NavLink></button>
	</nav>;
};
