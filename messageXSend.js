var Message = require('./message.js');

function MessageXSend() {
    this.to = [];
    this.toName = [];
    this.addressbook = [];
    this.project = '';
    this.vars = {};

    // set email
    this.add_to = function(toAddress) {
        this.to.push(toAddress);
    };

    this.add_toName = function(toName) {
        this.toName.push(toName);
    };

    this.add_addressbook = function(addressbook) {
        this.addressbook = addressbook;
    };

    this.set_project = function(project) {
        this.project = project;
    };

    this.add_var = function(key, val) {
        this.vars[key] = val;
    };

    this.build_params = function() {
        var params = {};
        if (this.to.length > 0) {
            var toValue = '';
            for (index in this.to) {
                var name = ''
                if (this.toName[index] != undefined) {
                    name = this.toName[index];
                }
                toValue += name + '<' + this.to[index] + '>,';
            }
            params['to'] = toValue.substring(0, toValue.length-1);
        }
        if (this.addressbook.length > 0) {
            var addressbookValue = '';
            for (index in this.addressbook) {
                addressbookValue += this.addressbook[index] + ',';
            }
            params['addressbook'] = addressbookValue.substring(0, addressbookValue.length-1);
        }
        if (this.project != '') {
            params['project'] = this.project;
        }
        if (this.vars.length > 0) {
            params['vars'] = JSON.stringify(this.vars);
        }
        return params;
    };
    this.xsend = function() {
        var message = new Message();
        console.log(this.build_params());
        message.xsend(this.build_params());
    }
};

module.exports = MessageXSend;