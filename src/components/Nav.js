import React, { Component } from 'react'
import { Responsive, Input, Icon } from 'semantic-ui-react';

import '../css/Nav.css';

class Nav extends Component {
  render() {
    return(
      <div className="navbar">
        <div className="logo">Instagram</div>
        <Responsive as={Search} minWidth={640} />
        <Icons />
      </div>
    )
  }
}

const Search = () => {
  return <Input size='mini' icon='search' placeholder='搜尋' />
}

class Icons extends Component {
  render() {
    return(
      <div className="navbar__icons">
        <Icon name='home' size='large' />
        <Icon name='safari' size='large' />
        <Icon name='heart outline' size='large' />
        <Icon name='user circle' size='large' />
      </div>
    )
  }
}

export default Nav