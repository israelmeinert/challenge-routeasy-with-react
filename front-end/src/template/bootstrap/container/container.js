import React, { Component } from 'react'

export default (props) =>(
  <div className={`container${props.is_fluid ? `-fluid` : ''}`}>
    { props.children}
  </div>
)