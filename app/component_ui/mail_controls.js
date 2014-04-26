'use strict';

define(
  [
    'flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(mailControls);

    function mailControls() {
      this.defaultAttrs({
        //selectors
        actionControlsSelector: 'button.mail-action',
        deleteControlSelector: '#delete_mail',
        moveControlSelector: '#move_mail',
        forwardControlSelector: '#forward',
        replyControlSelector: '#reply',
        viewControlSelector: '#view_mail',
        singleItemActionSelector: 'button.single-item'
      });

      this.disableAll = function() {
        this.select('actionControlsSelector').attr('disabled', 'disabled');
      };

      this.restyleOnSelectionChange = function(ev, data) {
        if (data.selectedIds.length > 1) {
          this.select('actionControlsSelector').not('button.single-item').removeAttr('disabled');
          this.select('singleItemActionSelector').attr('disabled', 'disabled');
        } else if (data.selectedIds.length == 1) {
          this.select('actionControlsSelector').removeAttr('disabled');
        } else {
          this.disableAll();
        }
      };

      this.requestViewMail = function(type, relatedMailId) {
        this.trigger('uiComposeBoxRequested', {type: type, relatedMailId: relatedMailId});
      };

      this.deleteMail = function(ev, data) {
        this.trigger('uiDeleteMail');
      };

      this.moveMail = function(ev, data) {
        this.trigger('uiMoveMail');
      };

      this.forwardMail = function(ev, data) {
        this.trigger('uiForwardMail');
      };

      this.replyToMail = function(ev, data) {
        this.trigger('uiReplyToMail');
      };

      this.viewMail = function(ev, data) {
        this.trigger('uiViewMail');
      };

      this.after('initialize', function() {
        this.on('.mail-action', 'click', {
          'deleteControlSelector': this.deleteMail,
          'moveControlSelector': this.moveMail,
          'forwardControlSelector': this.forwardMail,
          'replyControlSelector': this.replyToMail,
          'viewControlSelector': this.viewMail,
        });
        this.on(document, 'uiMailItemSelectionChanged', this.restyleOnSelectionChange);
        this.on(document, 'uiFolderSelectionChanged', this.disableAll);
      });
    }
  }
);

