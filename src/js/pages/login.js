var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');
var LoginStore = require('../stores/login');
var { Navigation } = Router;
var { Form } = require('../components/adot-forms');
var { Box, Row, Col } = require('../components/react-flex-grid');
var loginSchema = require('form-schemas').login;


var LoginMessage = React.createClass({

    componentWillMount: function componentWillMount(){
        setTimeout(() => {
            this.props.close()
        }, 2000)
    },

    render: function render(){
        var color = (this.props.error)? '#FD6A66' : '#48E68B';
        return (
            <div style={{backgroundColor: color}} className='login-message'>
                {this.props.message}
            </div>
        )
    }
});

var Login = React.createClass({

    mixins: [
        Reflux.ListenerMixin,
        Navigation
    ],

    getInitialState: function getInitialState(){
        return ({
            error: false,
            success: false
        })
    },

    componentWillMount: function componentWillMount(){
        this.listenTo(LoginStore, this.onUpdate);
    },

    onUpdate: function onUpdate(data){
        if(data.error) return this.setState({
            error: data.error.message
        });
        return this.setState({
            success: 'You are well logged'
        });
    },

    onSubmit: function onSubmit(payload){
        Actions.login(payload);
    },

    onClose: function onClose(){
        if(this.state.success) return this.transitionTo('dashboard');
        this.setState({ error: false, success: false});
    },

    render: function render(){

        var message = (this.state.error) ?
            <LoginMessage
                error={true}
                message={this.state.error}
                close={this.onClose}/>:
            null;

        if(this.state.success) {
            message = (
                <LoginMessage
                error={false}
                message={this.state.success}
                close={this.onClose}/>)
        }

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
                        {message}
                    </Box>
                </Col>
            </Row>
        );
    }
});

module.exports = Login;