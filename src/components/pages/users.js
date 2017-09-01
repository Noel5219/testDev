import React from 'react';
import { connect } from 'react-redux';
// import assign from 'object-assign';

class Index extends React.Component {
  render() {
  	console.log(this.props);
    return (
      <div style={{height: '400px', backgroundColor: '#888'}}>
	      Users
      </div>

    );
  }
}
export default Index;

