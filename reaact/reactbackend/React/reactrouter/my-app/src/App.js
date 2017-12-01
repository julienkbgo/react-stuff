import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About me </Link></li>
        <li><Link to="/topics">Fitness</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about me" component={about me}/>
      <Route path="/Fitness" component={Fitness}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About me</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Fitness</h2>
    <ul>
      <li>
        <Link to={`${match.url}/nutrition`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/advices`}>

        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Fitness`}>
          tips
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample
