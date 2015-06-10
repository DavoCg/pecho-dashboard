var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');
var { Form } = require('../components/adot-forms');
var { Box, Row, Col } = require('../components/react-flex-grid');
var { RouteHandler } = Router;

var NavBar = require('../components/nav-bar');

var Dashboard = React.createClass({

    render: function render(){
        return (
            <div>
                <Row>
                    <Col
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}>
                        <NavBar className='box nav-bar box-shadow-1'/>
                    </Col>
                </Row>
                <Row>
                    <Col
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}>
                        <p>Hey im dashboard</p>
                        <RouteHandler/>
                    </Col>
                </Row>
            </div>


        );
    }
});

module.exports = Dashboard;