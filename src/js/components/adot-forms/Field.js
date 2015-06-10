var React = require('react');
var Fields = require('./Available-fields');
var _ = require('lodash');

var Field = React.createClass({
    onFieldChange(name, value){
        this.props.onFieldChange(name, value)
    },

    render(){
        var Field = Fields[this.props.field.type];

        var errorStyle = {
            backgroundColor: '#FD6A66',
            padding: 5 + 'px',
            borderRadius: 3 + 'px'
        };

        if(this.props.field.hasError){
            var error = <span style={errorStyle}>{this.props.field.errors[0]}</span>
        }
        return (
            <div style={{marginBottom: '10px'}}>
                <p><strong>{this.props.field.label} : </strong> {error || null}</p>
                <Field field={this.props.field} onFieldChange={this.onFieldChange}/>
            </div>
        )
    }
});

module.exports = Field;
