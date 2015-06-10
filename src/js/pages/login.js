var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');
var { Form } = require('../components/adot-forms');
var { Box, Row, Col } = require('../components/react-flex-grid');

var loginSchema = require('form-schemas').login;

var Login = React.createClass({

    onSubmit: function onSubmit(cleanData){
        console.log(cleanData);
    },

    render: function render(){
        return (
            <Row classes={['full-height']}>
                <Col
                    lg={4} offLg={4}
                    md={6} offMd={3}
                    sm={8} offSm={2}
                    xs={10} offXs={1}>
                    <Box classes={['login-container', 'box-shadow-1']}>
                        <Form
                            btnClassName='pecho-btn pecho-btn-center'
                            onSubmit={this.onSubmit}
                            schema={loginSchema}/>
                    </Box>
                </Col>
            </Row>
        );
    }
});

module.exports = Login;