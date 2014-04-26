'use strict';

define(

  [
    'flight/lib/component',
    'bower_components/mustache/mustache',
    'app/data',
    'app/templates'
  ],

  function(defineComponent, Mustache, dataStore, templates) {
    return defineComponent(mailBox);

    function mailBox() {

      this.defaultAttrs({
        dataStore: dataStore,
      });

      this.serveMailBox = function(ev, data) {
        // console.log(data);
        var markup = this.renderMailBox(data.type, data.mailItems);
        // console.log(markup);
        this.trigger("dataMailBoxServed", {
          markup: markup,
          type: data.type });
      };

      this.renderMailBox = function(type, mailId) {
        // var recipientId = this.getRecipientId(type, relatedMailId);
        // var contacts = this.attr.dataStore.contacts.map(function(contact) {
        //   contact.recipient = (contact.id == recipientId);
        //   return contact;
        // });

        // var self = this;

        var obj = this.attr.dataStore.mail.filter(function(each) {
          // console.log(each.id);
          // console.log(self.isNumber(each));
          console.log(parseInt(each.id, 10) ===  parseInt(mailId, 10));

          return parseInt(each.id, 10) ===  parseInt(mailId, 10);
        })[0];
        console.log(obj);

        return Mustache.render(templates.mailBox, { mail: obj });
      };

      this.getSubject = function(type, relatedMailId) {
        var relatedMail = this.attr.dataStore.mail.filter(function(each) {
          return each.id ==  relatedMailId;
        })[0];

        var subject = relatedMail && relatedMail.subject;

        var subjectLookup = {
          newMail: this.attr.subjectHint,
          forward: this.attr.forwardPrefix + ": " + subject,
          reply: this.attr.replyPrefix + ": " + subject
        }

        return subjectLookup[type];
      };

      this.getRecipientId = function(type, relatedMailId) {
        var relatedMail = (type == 'reply') && this.attr.dataStore.mail.filter(function(each) {
          return each.id ==  relatedMailId;
        })[0];

        return relatedMail && relatedMail.contact_id || this.attr.recipientHintId;
      };

      this.after("initialize", function() {
        this.on("uiMailBoxRequested", this.serveMailBox);
        this.on("uiSendRequested", this.send);
      });
    }

  }
);
