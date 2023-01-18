import './ContinentCard.css'
import {Link} from 'react-router-dom'

export default function ContinentCard({continentImage, title, description, linkTo}) {

    return (
        <div className="card" alt={title} style={{background: `url(${continentImage})`, backgroundSize: '100% 100%',
        backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
            <div className="card-bottom-sheet">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={linkTo}>Explore</Link>
            </div>
            


        </div>
    )

}