var Reflux = require('reflux');
var Actions = require('../actions');
var request = require('superagent');
var { server } = require('config');
var HTTPStatus = require('http-status');

var loginStore = Reflux.createStore({
    init: function init(){
        this.listenTo(Actions.login, this.login);
    },

    login: function login(payload){
        request
            .post(server.url + '/login/owners')
            .set('Content-Type', 'application/json')
            .send(payload)
            .end( (err, res) =>{
                if(err) return this.trigger({error: {message: 'Server error'}});
                if(res.status !== HTTPStatus.OK) return this.trigger({error: {message: res.text}});
                setStorage(res);
                return this.trigger({error: false});
            });
    }

});


function setStorage(res){
    localStorage.setItem('pecho-token', res.body.token);
    localStorage.setItem('pecho-admin', res.body.admin);
    return;
}

module.exports = loginStore;