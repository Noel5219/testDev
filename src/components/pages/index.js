import React from 'react';
import { connect } from 'react-redux';
import Card from 'Controls/card/card';

class Index extends React.Component {
  render() {
  	console.log(this.props);
    return (
    	<div>
	      <Card content={'<div>ff</div>'}/>
      </div>

    );
  }
}
export default Index;
