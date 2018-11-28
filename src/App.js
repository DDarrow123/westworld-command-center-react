import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

let areaUrl = 'http://localhost:4000/areas'
let hostUrl = 'http://localhost:4000/hosts'
class App extends Component {
  constructor(){
    super()
    this.state = {
      areaData: [],
      hostData: [],
      selectedHost: {}
    }
  }

  componentDidMount(){
    fetch(areaUrl).then(res => res.json()).then(data => this.setState({ areaData: data }))
    fetch(hostUrl).then(res => res.json()).then(hosts => this.setState({ hostData: hosts }))
  }

  handleSelectedHostClick = (host) => {
    this.setState({selectedHost: host}, ()=> {console.log(this.state);})
  }



  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.


  render(){

    return (
      <Segment id='app'>
        <WestworldMap areaState={this.state.areaData} hostState={this.state.hostData}/>
        <Headquarters hostState={this.state.hostData} handleSelectedHostClick={this.handleSelectedHostClick} selectedHost={this.state.selectedHost} areaState={this.state.areaData}/>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused import headquarters list later*/}
      </Segment>
    )
  }
}

export default App;
