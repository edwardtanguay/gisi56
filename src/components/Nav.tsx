import { NavLink, useLocation } from "react-router-dom";

const pages = [
	"welcome",
	"page002",
	"page003",
	"page004",
	"page005",
	"page006",
	"page007",
	"page008",
	"page009",
	"page010",
	"page011",
	"page012",
];


export const Nav = () => {
	const location = useLocation();
	const path = location.pathname;
	const segments = path.split('/').filter(Boolean);
	const currentPageId = segments.length > 0 ? segments[segments.length - 1] : "welcome";
	const currentIndex = pages.indexOf(currentPageId);
	const currentPageNumber = currentIndex + 1;

	const getPrevPageId = () => {
		if (currentIndex === -1 || currentIndex === pages.length - 1) {
			return 'welcome';
		}
		return pages[currentIndex - 1];
	}
	const getNextPageId = () => {
		if (currentIndex === -1 || currentIndex === pages.length - 1) {
			return 'welcome';
		}
		return pages[currentIndex + 1];
	}
	const prevPageId = getPrevPageId();
	const nextPageId = getNextPageId();

	return <nav className="flex justify-between mt-2 mr-2">
		{currentPageNumber !== 1 ? (
			<button><NavLink to={prevPageId}>prev</NavLink></button>
		) :
			<button className="text-white bg-white"><NavLink to={prevPageId}>prev</NavLink></button>
		}
		{currentPageNumber}/13
		<button><NavLink to={nextPageId}>next</NavLink></button>
	</nav>;
};
