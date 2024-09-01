import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
	return (
		<div className="bg-white p-4 w-full md:w-[60rem] mt-0 md:mt-6">
			<Header/>
				<Outlet />
		</div>
	);
}

export default App;
