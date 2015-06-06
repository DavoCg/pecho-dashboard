(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

},{}],2:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var Login = require('./pages/login');

var routes = React.createElement(Route, { name: 'login', path: '/login', handler: Login });

Router.run(routes, function runRouter(Handler) {
    React.render(React.createElement(Handler, null), document.getElementById('app'));
});

},{"./pages/login":3,"react":"react","react-router":"react-router"}],3:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');

var Login = React.createClass({
    displayName: 'Login',

    render: function render() {
        return React.createElement(
            'p',
            null,
            'Login Page'
        );
    }
});

module.exports = Login;

},{"../actions":1,"react":"react","react-router":"react-router","reflux":"reflux"}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYWN0aW9ucy9pbmRleC5qcyIsIi9Vc2Vycy9kYXZpZDEvZGV2L3BlY2hvLWRhc2hib2FyZC9zcmMvanMvYXBwLmpzIiwiL1VzZXJzL2RhdmlkMS9kZXYvcGVjaG8tZGFzaGJvYXJkL3NyYy9qcy9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7Ozs7QUNEQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLEtBQUssR0FBaUMsTUFBTSxDQUE1QyxLQUFLO0lBQUUsWUFBWSxHQUFtQixNQUFNLENBQXJDLFlBQVk7SUFBRSxhQUFhLEdBQUksTUFBTSxDQUF2QixhQUFhOztBQUV2QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRXJDLElBQUksTUFBTSxHQUNOLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLEtBQUssQUFBQyxHQUFFLEFBQ3RELENBQUM7O0FBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFDO0FBQzFDLFNBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsT0FBTyxPQUFFLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQzVELENBQUMsQ0FBQzs7Ozs7QUNaSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRXBDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMxQixVQUFNLEVBQUUsU0FBUyxNQUFNLEdBQUU7QUFDckIsZUFDSTs7OztTQUFpQixDQUNuQjtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lJdlZYTmxjbk12WkdGMmFXUXhMMlJsZGk5d1pXTm9ieTFrWVhOb1ltOWhjbVF2YzNKakwycHpMMkZqZEdsdmJuTXZhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciB7Um91dGUsIERlZmF1bHRSb3V0ZSwgTm90Rm91bmRSb3V0ZX0gPSBSb3V0ZXI7XG5cbnZhciBMb2dpbiA9IHJlcXVpcmUoJy4vcGFnZXMvbG9naW4nKTtcblxudmFyIHJvdXRlcyA9IChcbiAgICA8Um91dGUgbmFtZT0nbG9naW4nIHBhdGg9Jy9sb2dpbicgaGFuZGxlcj17TG9naW59Lz5cbik7XG5cblJvdXRlci5ydW4ocm91dGVzLCBmdW5jdGlvbiBydW5Sb3V0ZXIoSGFuZGxlcil7XG4gICAgUmVhY3QucmVuZGVyKDxIYW5kbGVyLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG59KTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIFJlZmx1eCA9IHJlcXVpcmUoJ3JlZmx1eCcpO1xudmFyIEFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zJyk7XG5cbnZhciBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHA+TG9naW4gUGFnZTwvcD5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpbjsiXX0=
