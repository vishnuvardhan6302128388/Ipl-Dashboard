// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, lists: []}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({lists: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, lists} = this.state
    console.log(lists)
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />
              <h1 className="heading">
                IPL <span>Dashboard</span>
              </h1>
            </div>

            <ul className="list-container">
              {lists.map(each => (
                <TeamCard key={each.id} itemDetails={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
