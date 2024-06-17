import React, { Component } from 'react'
import sip from './sip.gif'
export default class Loding extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src= {sip} alt="" />
      </div>
    )
  }
}
