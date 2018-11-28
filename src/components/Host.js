import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  console.log(props);

  const clickedHost = () => {
    props.handleSelectedHostClick(props.host)

  }

  return(
    <Card
      className="host selected"
      onClick={clickedHost}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
