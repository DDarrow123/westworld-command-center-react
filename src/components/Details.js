import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = (props) => {
  console.log(props);
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderLogo = () => (<Image size='medium' src={Images.westworldLogo}/>)
  const renderHostInfo = () => (<HostInfo hostState={props.hostState} selectedHost={props.selectedHost} areaState={props.areaState} dropDownOptions={props.dropDownOptions}/>)

  return(
    <Segment id="details" className="HQComps">
      {props.selectedHostId ? renderLogo() : renderHostInfo()}
    </Segment>
  )
}

export default Details
