const path = require('path');
const pdf = require('pdf-poppler');

let file = path.join(__dirname, 'remoteCompanies.pdf');

let opts = {
    format: 'jpeg',
    out_dir: path.join(__dirname, 'output'),
    out_prefix: 'page',
    page: null
}

pdf.convert(file, opts)
    .then(res => {
        console.log('Successfully converted');
    })
    .catch(error => {
        console.error(error);
    });
