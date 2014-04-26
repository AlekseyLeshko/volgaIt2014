'use strict';

define(

  [
    'flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(mailBox);

    function mailBox() {

      this.defaultAttrs({
        viewControlSelector: '#view_mail',
        cancelSelector: '#cancel_composed',
        selectionChangedEvent: 'uiMailItemSelectionChanged',
      });

      this.launchMailBox = function(ev, data) {
        this.$node.html(data.markup).show();
      };

      this.cancel = function() {
        this.$node.html('').hide();
      };

      this.updateMailItemSelections = function(ev, data) {
        this.attr.selectedMailItems = data.selectedIds;
      }

      this.after('initialize', function() {
        this.on(document, 'dataMailBoxServed', this.launchMailBox);

        this.on('uiMailItemSelectionChanged', this.updateMailItemSelections);

        this.on(document, "click", {
          'cancelSelector': this.cancel,
        });
      });
    }
  }
);
