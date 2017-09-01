import React from 'react';
import { connect } from 'react-redux';
import './styles/card.css';

class Card extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { 
  //     openMenu: false
  //   }
  // }
  render() {
    const self = this,
          {props} = self,
          {
            content = false,
            frameStyle = {},
            shadow = true,
          } = props;

    return content ? (
      <div
        className={'card '.concat(shadow ? 'card-shadow' : '')}
        style={frameStyle}>
        <div dangerouslySetInnerHTML={{
           __html: content
         }}/>
      </div>
    ) : null;
  }
}
export default Card;
