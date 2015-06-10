var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute, NotFoundRoute} = Router;

var Login = require('./pages/login');
var Dashboard = require('./pages/dashboard');

var routes = (
    <Route path='/'>
        <Route name='login' path='login' handler={Login}/>
        <Route name='dashboard' path='Dashboard' handler={Dashboard}/>
        <DefaultRoute handler={Dashboard} />
    </Route>
);

Router.run(routes, function runRouter(Handler){
    React.render(<Handler/>, document.getElementById('app'));
});