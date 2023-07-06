import { FaTasks, FaCog } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink, BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./search/SearchPage";
import SettingsPage from "./settings/SettingsPage";
import TasksPage from "./tasks/TasksPage";

const App = () => {
	return (
		<>
			<div className="flex">
				<BrowserRouter basename="/">
					<div className="flex flex-col h-screen w-1/5 bg-gray-800 text-white">
						<div className="flex-grow py-4 px-6 border-gray-800">
							<div className="flex items-center justify-between mb-4 border-b border-gray-600 pb-4">
								<div className="flex items-center">
									<img src="/dragon-light.png" alt="App Icon" className="w-16" />
									<div className="flex flex-col m-4">
										<div className="text-xl font-bold">Dragonnade</div>
										<div className="text-sm text-gray-500">Version 1.0.0</div>
										<div className="text-sm text-gray-500">fr.mateis.dragonnade</div>
									</div>
								</div>
							</div>

							<NavLink to="/search" className="flex items-center py-2 px-4 mb-2 rounded hover:bg-gray-600 active:bg-gray-600 transition">
								<FaMagnifyingGlass className="mr-2" />
								<span>Recherche</span>
							</NavLink>

							<NavLink to="/tasks" className="flex items-center py-2 px-4 mb-2 rounded hover:bg-gray-600 active:bg-gray-600 transition">
								<FaTasks className="mr-2" />
								<span>Tâches</span>
							</NavLink>

							<div className="flex-grow"></div>
						</div>

						<div className="py-4 px-6 border-gray-800">
							<NavLink to="/settings" className="flex items-center py-2 px-4 rounded hover:bg-gray-600 active:bg-gray-600 transition">
								<FaCog className="mr-2" />
								<span>Paramètres</span>
							</NavLink>
						</div>
					</div>

					<main className="flex flex-col h-full w-full">
						<Routes>
							<Route path="/search" element={ <SearchPage /> } />
							<Route path="/tasks" element={ <TasksPage /> } />
							<Route path="/settings" element={ <SettingsPage /> } />
						</Routes>
					</main>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;