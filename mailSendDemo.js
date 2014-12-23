/**
 * Created by jinshang on 14-12-23.
 */
var MailSend = require('./mailSend.js');

var mail = new MailSend('a');
mail.add_to('toot');
mail.add_to('v2');
mail.add_to('v3');
mail.add_addressbook('address');
mail.say();