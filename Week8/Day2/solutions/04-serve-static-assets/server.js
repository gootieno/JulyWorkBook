const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {


  // Your code here
  // if (req.method === 'GET' && req.url === '/static/css/application.css') {
  //   const css = fs.readFileSync('./assets/css/application.css');
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/css');
  //   return res.end(css)
  // }
  // if (req.method === 'GET' && req.url === '/static/images/dog.jpg') {
  //   const img = fs.readFileSync('./assets/images/dog.jpg');
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'image/jpg');
  //   return res.end(img);
  // }

  const getContentType = (filePath) => { // '/css/application.css'
    const type = filePath.split('.')[1]; // 'css'
    let contentType; // 'text/css'
    switch (type) { // switch ('css')
      case 'jpg':
      case 'jpeg':
        contentType = 'image/jpg';
        break;
      case 'css':
        contentType = 'text/css';
        break;
      case 'html':
        contentType = 'text/html'
        break;
      default:
        contentType = 'text/plain'
        break;
    }
    return contentType
  }

  if (req.method === 'GET' && req.url.startsWith('/static')) {
    const urlParts = req.url.split('/static')[1];
    console.log(urlParts);
    try {
    const files = fs.readFileSync('./assets' + urlParts);
    res.statusCode = 200;
    res.setHeader('Content-Type', getContentType(urlParts))
    res.end(files);
    return
  } catch (err) {
    console.error('Something failed');
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain')
    return res.end('Couldn"t find static asset');
  }
}
  const html = fs.readFileSync('./index.html');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  return res.end(html);

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
