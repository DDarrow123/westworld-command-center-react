import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  let allHosts = props.hostState.map((host) => {
    return <Host key={host.id} host={host} handleSelectedHostClick={props.handleSelectedHostClick}/>
  })

  return(
    <Card.Group itemsPerRow={9}>
      {allHosts}
    </Card.Group>
  )
}

export default HostList
