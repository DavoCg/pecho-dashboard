var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var Row = React.createClass({
    render: function render(){
        var classes = ['row'];

        if(this.props.classes){
            _.each(this.props.classes, (classe) =>{
                classes.push(classe);
            })
        }

        return (
            <div className={classNames(classes)}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Row;
