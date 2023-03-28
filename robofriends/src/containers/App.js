
import React, { useState, useEffect} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'


function App() {

  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [], 
  //     searchfield: ''
  //   }
  // }
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0);

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({robots: users}))
  // }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {setRobots(users)})
  },[]) 

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }
  
  
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })
  if (!robots.length) {
    return <h1>Loading..</h1>
  } else {
    return (
      <div>
        <h1>Robofriends</h1>
        <button onClick={()=>setCount(count+1)}>Click me!</button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/> 
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;