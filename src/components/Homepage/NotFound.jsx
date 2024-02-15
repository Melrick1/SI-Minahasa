import {Link} from 'react-router-dom'

const NotFoundPage = () => {
    return(
        <section>
            <h1>404 Page Not Found</h1>
            <Link to="/" >Back to Homepage</Link>
        </section>
    )
}

export default NotFoundPage