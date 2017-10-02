import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Items from './items.json';
// import IcoMenu from 'Images/ic_menu_white.svg';
import './styles/menu.css';
// import assign from 'object-assign';

class Menu extends React.Component {
  // constructor(props) {
  //   super(props);

  // }
  render() {
    const self = this,
          {props, state: _state} = self,
          {themes} = props;

    return (
      <div className={'menu ' + 'menu-' + themes}>
        {
          Items.map((item, index)=>{
            return item.needLogin ? null : (
              <Link key={index} to={item.toPage} className='menu-item'>{item.title}</Link>
            );
          })
        }
      </div>
    );
  }
}
export default Menu;
