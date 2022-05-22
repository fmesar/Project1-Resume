import axios from 'axios'; // install axios package "npm i axios"
import fs from 'fs';

// 1. This example saves generated pdf document to the file system
axios.post('https://api.html2pdf.app/v1/generate', {
  html: '<h1>Hello world!</h1>',
  apiKey: '{your-api-key}',
}, {responseType: 'arraybuffer'}).then((response) => {
  fs.writeFileSync('./document.pdf', response.data);
}).catch((err) => {
  console.log(err.message);
});

// 2. This example outputs generated pdf document content
axios.post('https://api.html2pdf.app/v1/generate', {
  html: '<h1>Hello world!</h1>',
  apiKey: '{your-api-key}',
}).then((response) => {
  console.log(response.data);
}).catch((err) => {
  console.log(err.message);
});


FQDx7OfkbMcHWEn280OH3uk5Nzzuys13A8a3iwc56Z2FiB5nesQhhxZqtu6IvGxS

https://html2pdf.app/#demo


https://www.qrcode-monkey.com/#about
https://goqr.me/api/doc/create-qr-code/