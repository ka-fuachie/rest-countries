import { useParams } from "react-router"

const Country = () => {
    const params = useParams()
    
    return (
        <div>
            <p>Country: {params.country}</p>
        </div>
    )
}

export default Country
