var Message = require('./message.js');

function AddressbookMessage() {
    this.address = '';
    this.addressName = '';
    this.target = '';

    this.set_address = function(address) {
        this.address = address;
    };

    this.set_addressName = function(addressName) {
        this.addressName = addressName;
    };

    this.set_addressbook = function(target) {
        this.target = target;
    };

    this.build_params = function() {
        var params = {};
        params['address'] = this.addressName + '<' + this.address + '>';
        if (this.target != '') {
            params['target'] = this.target;
        }
        return params;
    };
    this.subscribe = function() {
        var addressbook = new Message();
        console.log(this.build_params());
        addressbook.subscribe(this.build_params());
    };
    this.unsubscribe = function() {
        var addressbook = new Message();
        console.log(this.build_params());
        addressbook.unsubscribe(this.build_params());
    }
};

module.exports = AddressbookMessage;