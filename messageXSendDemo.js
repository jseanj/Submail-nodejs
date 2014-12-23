var MessageXSend = require('./messageXSend.js');

var messageXSend = new MessageXSend();

messageXSend.add_to('18610812046');
messageXSend.add_toName('jseanj');
messageXSend.set_project('qagsN');

messageXSend.xsend();