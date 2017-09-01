import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Items from './items.json';
import IcoMenu from 'Images/ic_menu_white.svg';
import './styles/top.css';
// import assign from 'object-assign';

class NavTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      openMenu: false
    }
  }
  render() {
    const self = this,
          {props, state: _state} = self,
          {themes} = props,
          {openMenu} = _state;

    return (
      <div className={'nav-top ' + 'nav-top-' + themes}>
        <div className='logo'>Logo</div>
        {
          Items.map((item, index)=>{
            return item.needLogin ? null : (
              <Link key={index} to={item.toPage} className='item'>{item.title}</Link>
            );
          })
        }
        <div
          className='menuIcon'
          onClick={()=>{
            self.setState({
              openMenu: !openMenu
            });
          }}>
          <img src={IcoMenu} />
        </div>
        {
          openMenu ? (
            <div className='listFrame'>
              {
                Items.map((item, index)=>{
                  return item.needLogin ? null : (
                    <Link key={index} to={item.toPage} className='list'>{item.title}</Link>
                  );
                })
              }
            </div>
          ) : null
        }
      </div>
    );
  }
}
export default NavTop;
