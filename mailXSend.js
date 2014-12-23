var Mail = require('./mail.js');

function MailXSend() {
    this.to = [];
    this.toName = [];
    this.from = '';
    this.fromName = '';
    this.addressbook = [];
    this.cc = [];
    this.ccName = [];
    this.bcc = [];
    this.bccName = [];
    this.reply = '';
    this.subject = '';
    this.project = '';
    this.vars = {};
    this.links = {};
    this.headers = {};

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

    this.set_from = function(from) {
        this.from = from;
    };

    this.set_fromName = function(fromName) {
        this.fromName = fromName;
    };

    this.set_reply = function(reply) {
        this.reply = reply;
    };

    this.add_cc = function(ccAddress) {
        this.cc.push(ccAddress);
    };

    this.add_ccName = function(ccName) {
        this.ccName.push(ccName);
    };

    this.add_bcc = function(bccAddress) {
        this.bcc.push(bccAddress);
    };

    this.add_bccName = function(bccName) {
        this.bccName.push(bccName);
    };

    this.set_subject = function(subject) {
        this.subject = subject;
    };

    this.set_project = function(project) {
        this.project = project;
    };

    this.add_var = function(key, val) {
        this.vars[key] = val;
    };

    this.add_link = function(key, val) {
        this.links[key] = val;
    };

    this.add_headers = function(key, val) {
        this.headers[key] = val;
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
        if (this.from != '') {
            params['from'] = this.from;
        }
        if (this.fromName != '') {
            params['from_name'] = this.from_name;
        }
        if (this.reply != '') {
            params['reply'] = this.reply;
        }
        if (this.cc.length > 0) {
            var ccValue = '';
            for (index in this.cc) {
                var name = ''
                if (this.ccName[index] != undefined) {
                    name = this.ccName[index];
                }
                ccValue += name + '<' + this.cc[index] + '>,';
            }
            params['cc'] = ccValue.substring(0, ccValue.length-1);
        }
        if (this.bcc.length > 0) {
            var bccValue = '';
            for (index in this.bcc) {
                var name = ''
                if (this.bccName[index] != undefined) {
                    name = this.bccName[index];
                }
                bccValue += name + '<' + this.bcc[index] + '>,';
            }
            params['bcc'] = bccValue.substring(0, bccValue.length-1);
        }
        if (this.subject != '') {
            params['subject'] = this.subject;
        }
        if (this.project != '') {
            params['project'] = this.project;
        }
        if (this.vars.length > 0) {
            params['vars'] = JSON.stringify(this.vars);
        }
        if (this.links.length > 0) {
            params['links'] = JSON.stringify(this.links);
        }
        if (this.headers.length > 0) {
            params['headers'] = JSON.stringify(this.headers);
        }
        return params;
    };
    this.xsend = function() {
        var mail = new Mail();
        console.log(this.build_params());
        mail.xsend(this.build_params());
    }
};

module.exports = MailXSend;