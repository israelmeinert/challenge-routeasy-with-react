import React from 'react';
import './layout.css';

const Layout = props =>(
  <div className='layout-container'>
    { props.children }
  </div>
)
const Aside = props =>(
  <div className='aside-left'>
    {props.children}
  </div>
)

const Content = props =>(
  <div className='main'>
    {props.children}
  </div>
)



export default { Aside, Layout, Content }