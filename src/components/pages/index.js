import React from 'react';
import { connect } from 'react-redux';
import HomeModule from 'Modules/home';

class Index extends React.Component {
  render() {
  	console.log(this.props);
    return (
    	<div>
	      <HomeModule/>
      </div>

    );
  }
}
export default Index;
