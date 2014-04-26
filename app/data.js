'use strict';

define(
  function() {
    return {
      folders: ["inbox", "sent", "trash", "important"],
      owner: {
        "contact_id": "3"
      },
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
        },
        {
          "id": "3",
          "firstName": "Алексей",
          "lastName": "Франк",
          "email": "alexeyfrank@gmail.com"
        }
      ],
      mail: [
        {
          "id": "1",
          "contact_id": "3",
          "author_id": "1",
          "folders": ["inbox"],
          "time": 1334891976104,
          "subject": "Volga IT 2014",
          "message": "Я ни черта не успел!!! Все очень плохо.. = )"
        },
        {
          "id": "2",
          "contact_id": "3",
          "author_id": "1",
          "folders": ["inbox"],
          "time": 1334891976102,
          "subject": "Undev на работу берет?! = )",
          "message": "А?!"
        },
        {
          "id": "3",
          "contact_id": "3",
          "author_id": "1",
          "folders": ["inbox"],
          "time": 1334891976102,
          "subject": "Много много много Много много много Много много много Много много много Много много много Много много много Много много много Много много много Много много много Много много много Много много много Много много много букв",
          "message": "Много много много Много много много Много много много Много много много Много много много Много много много Много много много Много много много Много много много Много много много Много много много Много много много букв"
        },
        {
          "id": "4",
          "contact_id": "3",
          "author_id": "3",
          "folders": ["inbox"],
          "time": 1334891976102,
          "subject": "Я самый лучший!",
          "message": "Я самый лучший!"
        },
        {
          "id": "5",
          "contact_id": "3",
          "author_id": "3",
          "folders": ["sent"],
          "time": 1334891976102,
          "subject": "Я самый лучший!",
          "message": "Я самый лучший!"
        }]
    };
    return data;
  }
);

