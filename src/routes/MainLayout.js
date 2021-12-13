import { useState, useLayoutEffect } from "react"
import { Outlet } from "react-router"
import { useApi } from "../api/ApiContext"
import Header from '../components/Header'
import Loader from "../components/Loader"

const MainLayout = () => {
    const { isLoading } = useApi()
    const [showLoader, setShowLoader] = useState(false)

    useLayoutEffect(() => {
        isLoading && setShowLoader(true)
        !isLoading && setTimeout(() => setShowLoader(false), 2000)
    }, [isLoading])

    return (
        <div className="App">
            <Header>
                <h1>REST Countries API</h1>
            </Header>
            <Outlet />
            {
                showLoader &&
                <Loader isLoading={isLoading} />
            }
        </div>
    )
}

export default MainLayout