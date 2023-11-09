import {Link} from 'react-router-dom'
import './index.css'

const GithubCard = props => {
  const {details} = props
  const {name, avatarUrl, description, owner} = details
  return (
    <Link to="/owner/repo" className="card-container">
      <div>
        <img src={avatarUrl} alt={name} className="image" />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </Link>
  )
}
export default GithubCard
