'use strict';

define(

  [
    'app/component_data/mail_items',
    'app/component_data/compose_box',
    'app/component_data/move_to',
    'app/component_data/mail_box',
    'app/component_ui/mail_items',
    'app/component_ui/mail_controls',
    'app/component_ui/compose_box',
    'app/component_ui/folders',
    'app/component_ui/move_to_selector',
    'app/component_ui/mail_box'
  ],

  function(
    MailItemsData,
    ComposeBoxData,
    MoveToData,
    MailBoxData,
    MailItemsUI,
    MailControlsUI,
    ComposeBoxUI,
    FoldersUI,
    MoveToSelectorUI,
    MailBoxUI) {

    function initialize() {
      MailItemsData.attachTo(document);
      ComposeBoxData.attachTo(document, {
        selectedFolders: ['inbox']
      });
      MoveToData.attachTo(document);
      MailItemsUI.attachTo('#mail_items', {
        itemContainerSelector: '#mail_items_TB',
        selectedFolders: ['inbox']
      });
      MailControlsUI.attachTo('#mail_controls');
      ComposeBoxUI.attachTo('#compose_box');
      FoldersUI.attachTo('#folders');
      MoveToSelectorUI.attachTo('#move_to_selector', {
        moveActionSelector: '#move_mail',
        selectedFolders: ['inbox']
      });
      MailBoxUI.attachTo('#mail_box');
      MailBoxData.attachTo(document);
    }

    return initialize;
  }
);
