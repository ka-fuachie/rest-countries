import { Outlet } from "react-router"

const MainLayout = () => {
    return (
        <div className="App">
            <h1>REST Countries API</h1>
            <Outlet />
        </div>
    )
}

export default MainLayout