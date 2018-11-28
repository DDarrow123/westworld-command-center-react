import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {

  const mapAreas = () => {
    return props.areaState.map((area) => {
        return <Area key={area.id} area={area}/>
    })
  }

  return (
    <Segment id="map" >
      {mapAreas()}
    </Segment>
  )
}

export default WestworldMap
