import {Component} from 'react'
import GithubCard from '../GithubCard'
import './index.css'

class GithubApp extends Component {
  state = {MostStarredReposList: [], isSpinning: true}

  componentDidMount() {
    this.getRepos()
  }

  getRepos = async () => {
    const url =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'
    const options = {
      headers: {
        Authorization: 'Token' + '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',
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const fetchedData = data.items.map(eachRepo => ({
      avatarUrl: eachRepo.owner.avatar_url,
      name: eachRepo.name,
      description: eachRepo.description,
      id: eachRepo.id,
      owner: eachRepo.owner.login,
    }))
    this.setState({MostStarredReposList: fetchedData, isSpinning: false})
  }

  render() {
    const {MostStarredReposList, isSpinning} = this.state
    return (
      <div className="container">
        <h1>Most Starred Repos</h1>
        <ul className="ul-container">
          {MostStarredReposList.map(eachRepo => (
            <GithubCard details={eachRepo} key={eachRepo.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default GithubApp
