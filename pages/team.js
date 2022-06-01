import React from 'react'
import { MemberFrame, ToolFrame } from '../components/frames'

export default function Team() {
  return (
    <div>
        Hello Team!
        
      <MemberFrame src="/team/David_montufo.jpg" name="Telmo Beroiz Bilbao" role="Putita"/>
      <ToolFrame src="/contents/tools/drive.png" name="Google Drive" role="Artist" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit."></ToolFrame>
    </div>
  )
}
