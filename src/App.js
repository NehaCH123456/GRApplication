import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import GithubApp from './components/GithubApp'
import GithubCardDetailsItem from './components/GithubCardDetailsItem'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GithubApp} />
      <Route exact path="/owner/repo" component={GithubCardDetailsItem} />
    </Switch>
  </BrowserRouter>
)

export default App
