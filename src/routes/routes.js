import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import IndexPage from 'Pages/index';
import AboutPage from 'Pages/about';
import UsersPage from 'Pages/users';
import UserPage from 'Pages/user';
import NavTop from 'Controls/nav/top';
import 'Styles/global.css';

const themes = 'blue';

const Root = React.createClass({
  render: function() {
    return (
			<Router>
		  	<div>
		  		<NavTop themes={themes} />
		  		<div style={{paddingTop: '50px'}}>
			      <Route exact path='/' component={IndexPage}/>
			      <Route path='/about' component={AboutPage}/>
			      <Route path='/users' component={UsersPage}/>
			      <Route path='/users:user' component={UserPage}/>
		      </div>
		    </div>
		  </Router>
    );
  }
});
module.exports = Root;

// import React from 'react'
// import ReactDOM from 'react-dom';
// import { Router, Route , Link, IndexRoute } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import IndexPage from 'Pages/index';
// import AboutPage from 'Pages/about';
// import UsersPage from 'Pages/users';
// import UserPage from 'Pages/user';


// const Root = () => (
//   <Router>
//   	<div>
//   		<TopNav />
//       <Route exact path='/' component={IndexPage}/>
//       <Route path='/about' component={AboutPage}/>
//       <Route path='/users' component={UsersPage}/>
//     </div>
//   </Router>
// )

// export default Root
