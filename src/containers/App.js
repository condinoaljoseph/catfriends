import React from 'react'
import Scroll from '../components/Scroll'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'

class App extends React.Component {
  state = {
    cats: [],
    searchfield: ''
  }

  onSearchChange = (e) => {
    this.setState({
      searchfield: e.target.value
    })
  }

  async componentDidMount() {
    const respUsers = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await respUsers.json()
    this.setState({
      cats: dataUsers
    })
  }

  render() {
    const { cats, searchfield } = this.state
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !cats.length ?
    <h1 className="tc">Loading...</h1> :
    (
      <div className="tc">
        <h1 className="f1">Cat Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList cats={filteredCats} />
        </Scroll>
      </div>
    )
  }
}

export default App