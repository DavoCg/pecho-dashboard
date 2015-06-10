var React = require('react');
var Field = require('./Field');
var _ = require('lodash');

var Text = React.createClass({
    onFieldChange(e){
        this.props.onFieldChange.call(this, this.props.field.name, e.target.value);
    },

    render(){
        var defaultStyle = {
            width: 100 + '%',
            height: 35 + 'px',
            padding: 3 + 'px'
        };

        var type = (this.props.field.options && this.props.field.options.type) ? this.props.field.options.type : null;

        return (
            <div>
                <input
                    className='input'
                    value={this.props.field.value}
                    type={type}
                    style={defaultStyle}
                    onChange={this.onFieldChange}/>
            </div>
        )
    }
});


module.exports = Text;
