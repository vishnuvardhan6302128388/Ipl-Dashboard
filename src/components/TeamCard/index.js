// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {itemDetails} = props
  const {id, name, teamImageUrl} = itemDetails

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="nav-link">
        <img src={teamImageUrl} alt={name} className="img" />
        <h1 className="name">{name}</h1>
      </Link>
    </li>
  )
}

export default TeamCard
