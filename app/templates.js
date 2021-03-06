'use strict';

define(
  function() {
    var mailItem =
      '{{#mailItems}}\
        <tr id="{{id}}" class="mail-item">\
        {{#important}}\
          <td class="span1"><span class="label label-important">Important</span></td>\
        {{/important}}\
        {{^important}}\
          <td class="span1"><span>&nbsp;</span></td>\
        {{/important}}\
          <td class="span2 mailContact">{{name}}</td>\
          <td class="span8">\
            <span class="mailSubject">\
              {{formattedSubject}}\
            </span>\
            <span class="mailMessage">\
              - {{formattedMessage}}\
            </span>\
          </td>\
        </tr>\
      {{/mailItems}}';

    var composeBox =
      '<div id="compose_to" class="modal-header compose-header">\
        To: <select id="recipient_select">\
          {{^reply}}<option id="recipient_hint" class="hint" style="color:#CACACA" >[Select Recipient]</option>{{/reply}}\
          {{#contacts}}\
           <option id="{{id}}"{{#recipient}} selected{{/recipient}}>{{firstName}} {{lastName}}</option>\
          {{/contacts}}\
        </select>\
      </div>\
      <div class="modal-body compose-body">\
        <div id="compose_subject" class="{{#newMail}}hint{{/newMail}}{{^newMail}}compose-header{{/newMail}}" contentEditable="true">\
          {{subject}}\
        </div>\
        <div id="compose_message" class="hint" contentEditable="true">\
          {{message}}\
        </div>\
      </div>\
      <div class="modal-footer">\
        <button id="send_composed" {{^reply}}disabled="disabled"{{/reply}} class="btn btn-primary">Send</button>\
        <button id="cancel_composed" class="btn">Cancel</button>\
      </div>';

    var moveToSelector =
      '<ul class="nav nav-list">\
      {{#moveToItems}}\
        <li id="{{.}}" class="move-to-item">{{.}}</li>\
      {{/moveToItems}}\
      </ul>';

    var mailBox =
    '{{#mail}}\
      <div class="modal-header compose-header">\
        <div id="mail_id" style="margin-bottom: 10px;">\
          {{id}}\
        </div>\
        <div id="contact_id" style="margin-bottom: 10px;">\
          {{contact_id}}\
        </div>\
        <div id="subject" style="margin-bottom: 10px;">\
          {{subject}}\
        </div>\
        <div id="message" style="margin-bottom: 10px;">\
          {{message}}\
        </div>\
        <button id="cancel_composed" class="btn">Cancel</button>\
      </div>\
    {{/mail}}';

    return {
      mailItem: mailItem,
      composeBox: composeBox,
      moveToSelector: moveToSelector,
      mailBox: mailBox
    }
  }

);
