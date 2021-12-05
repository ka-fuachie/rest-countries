import { Outlet } from "react-router"
import Header from '../components/Header'

const MainLayout = () => {
    return (
        <div className="App">
            <Header>
            <h1>REST Countries API</h1>
            </Header>
            <Outlet />
        </div>
    )
}

export default MainLayout