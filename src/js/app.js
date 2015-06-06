var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute, NotFoundRoute} = Router;

var Login = require('./pages/login');

var routes = (
    <Route name='login' path='/login' handler={Login}/>
);

Router.run(routes, function runRouter(Handler){
    React.render(<Handler/>, document.getElementById('app'));
});