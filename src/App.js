import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Icon, Menu } from 'semantic-ui-react';

import './index.css';

class App extends Component {
    state = {
        activeItem: 'Employees'
    };

    handleItemClick = (e, data) => this.setState({ activeItem: data.name }, this.onHandleItemClick);

    onHandleItemClick = () => {
        this.state.activeItem === 'Home' && !this.checkLocationPathname('Home') && browserHistory.push('/');
        this.state.activeItem === 'Create' && !this.checkLocationPathname('Create') && browserHistory.push('/create');
        this.state.activeItem === 'Data' && !this.checkLocationPathname('Data') && browserHistory.push('/data');
    };

    checkLocationPathname = pathname => {
        return this.props.location.pathname === pathname.toLowerCase()
    }

    showLogout() {
        return (
            <span>
                <Icon name="sign-out"
                      link
                      onClick={() => {
                          browserHistory.push('/login');
                      }} />
            </span>
        );
    }

    showMenu = () => {
        return (
            <Menu inverted pointing secondary className='header-menu'>
                <Menu.Item name='Home' active={this.checkLocationPathname('/')} onClick={ this.handleItemClick } />
                <Menu.Item name='Create' active={this.checkLocationPathname('/create') || this.checkLocationPathname('/create/manually') || this.checkLocationPathname('/create/upload')} onClick={ this.handleItemClick } />
                <Menu.Item name='Data' active={this.checkLocationPathname('/data')} onClick={ this.handleItemClick } />            
            </Menu>
        )
    };

    mapChildren = () => {
        const children = React.Children.map(this.props.children, child => React.cloneElement(child));

        return <div>{children}</div>
    };

    render() {
      return (
          <div className="app">
              <header className='header'>
                  { this.showMenu() }
                  { this.showLogout() }
              </header>
              { this.mapChildren() }
          </div>
      )
    }
}

export default App;
