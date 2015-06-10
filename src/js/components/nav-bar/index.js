var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('../../actions');
var Modal = require('boron/FadeModal');
var { Box, Row, Col } = require('../../components/react-flex-grid');

var NavBar = React.createClass({

    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
        this.refs.modal.hide();
    },

    render: function render(){
        return (
            <div className={this.props.className}>
                <Modal ref="modal">
                    <div className="pecho-modal">
                        <h3>Want to Logout ?</h3>
                        <div className='pecho-btn pecho-btn-center'
                             onClick={this.hideModal}>
                            Close
                        </div>
                    </div>
                </Modal>

                <Row>
                    <Col
                        lg={1} offLg={11}
                        md={1} offMd={11}
                        sm={1} offSm={11}
                        xs={1} offXs={11}>
                        <Box>
                            <div className='centered-text-logout' onClick={this.showModal}>Logout</div>
                        </Box>
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = NavBar;