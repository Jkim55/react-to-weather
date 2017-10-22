import _ from 'lodash'
import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export default (props) => {
  return (
    <div>
      <Sparklines svgHeight={150} svgWidth={225} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{averageData(props.data)} {props.units}</div>
    </div>
  )
}

function averageData(data){
  return _.round(_.sum(data)/data.length)
}
