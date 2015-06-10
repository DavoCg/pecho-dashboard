var React = require('react');
var Field = require('./Field');
var _ = require('lodash');

var Form = React.createClass({

    getInitialState: function getInitialState(){
        return({
            schema: _.cloneDeep(this.props.schema)
        });
    },

    handleSubmit: function handleSubmit(){
        _.each(_.flatten(this.state.schema), (field) => {
            field.errors = checkErrors(field, field.value);
            field.hasError = field.errors.length > 0;
        });

        var formHasError = _.some(_.flatten(this.state.schema), {hasError: true});
        if(!formHasError){
            var cleanedData = cleanData(_.flatten(this.state.schema));
            return this.props.onSubmit(cleanedData);
        }
        return this.setState({schema: this.state.schema})
    },

    componentWillMount: function componentWillMount(){
        if(this.props.defaultValue){
            _.each(_.flatten(this.state.schema), (field) => {
                if(this.props.defaultValue[field.name]){
                    field.value = this.props.defaultValue[field.name]
                }
            });
        }
        this.setState({schema: this.state.schema});
    },

    componentWillReceiveProps: function componentWillReceiveProps(next){
        if(next.defaultValue){
            _.each(_.flatten(this.state.schema), (field) => {
                if(next.defaultValue[field.name]){
                    field.value = next.defaultValue[field.name]
                }
            });
            this.setState({schema: this.state.schema});
        }
    },

    onFieldChange: function onFieldChange(name, value){
        var field = _.find(_.flatten(this.state.schema), (field) =>{ return field.name === name;});

        field.errors = checkErrors(field, value);
        field.hasError = field.errors.length > 0;
        field.value = value;
        this.setState({schema: this.state.schema});
    },

    render(){
        return (
            <div>
                {_.map(this.state.schema, (field) => {
                    if(Array.isArray(field)){
                        var style = {
                            width: (100 / field.length) - 1 + '%',
                            marginRight: 1 + '%',
                            display: 'inline-block'
                        };
                        return _.map(field, (f) => {
                            return (<div style={style}><Field field={f} onFieldChange={this.onFieldChange} /></div>)
                        })
                    }

                    return (<Field field={field} onFieldChange={this.onFieldChange} />);
                })}
                <div className={this.props.btnClassName} onClick={this.handleSubmit}>Submit</div>
            </div>
        )
    }
});

module.exports = Form;

/**
 * Utils
 */

// return array of error message
function checkErrors(field, value){
    return _.filter(_.map(field.validators, (validator) => {
        if(!validator.fn.call(this, value)){
            return validator.message;
        }
    }), (elem) => !!elem);
}

// Return object of clean data
function cleanData(schema){
    return _.reduce(schema, (acc, current) => {
        acc[current.name] = current.value;
        return acc;
    }, {});
}
