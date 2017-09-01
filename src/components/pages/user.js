import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import assign from 'object-assign';

class Index extends React.Component {
  render() {
  	console.log(this.props);
    return (
      <div style={{height: '400px', backgroundColor: '#888'}}>
	      <Link to={`/index`}>user</Link>
      </div>

    );
  }
}
export default Index;

