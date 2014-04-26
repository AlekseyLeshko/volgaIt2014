'use strict';

define(
  function() {
    return {
      folders: ["inbox", "sent", "trash", "important"],
      contacts: [
        {
          "id": "1",
          "firstName": "Aleksey",
          "lastName": "Leshko",
          "email": "ms@proxyweb.com"
        },
        {
          "id": "2",
          "firstName": "Иван",
          "lastName": "Иванов",
          "email": "mary@jones.net"
        }
      ],
      mail: [
        {
          "id": "1",
          "contact_id": "2",
          "author_id": "1",
          "folders": ["inbox"],
          "time": 1334891976104,
          "subject": "Consectetur adipiscing elit",
          "message": "Vestibulum vestibulum varius diam in iaculis. Praesent ultrices dui vitae nibh malesuada non iaculis ante vulputate. Suspendisse feugiat ultricies egestas. Aenean a odio libero. Quisque mollis leo et est euismod sit amet dignissim sapien venenatis. Morbi interdum adipiscing massa"
        }]
    };
    return data;
  }
);

