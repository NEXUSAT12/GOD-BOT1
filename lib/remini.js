const FormData = require('form-data'),
const Jimp = require('jimp');

async function remini(imageBuffer, type) {
    return new Promise(async (resolve, reject) => {
        let options = ['enhance', 'recolor', 'dehaze'];

        if (!options.includes(type)) {
            type = options[0];
        }

        let formData = new FormData(),
            url = 'https://inferenceengine.ai/' + type;

        formData.append('model_version', 1, {
            'Content-Transfer-Encoding': 'binary',
            'contentType': 'multipart/form-data; charset=uttf-8'
        });

        formData.append('image', Buffer.from(imageBuffer), {
            'filename': 'enhance_image_body.jpg',
            'contentType': 'image/jpeg'
        });

        formData.submit({
            'url': url,
            'host': 'inferenceengine.ai',
            'path': '/' + type,
            'protocol': 'https:',
            'headers': {
                'User-Agent': 'okhttp/4.9.3',
                'Connection': 'Keep-Alive',
                'Accept-Encoding': 'gzip'
            }
        }, function (error, response) {
            if (error) {
                reject();
            }
            let dataChunks = [];
            response.on('data', function (chunk) {
                dataChunks.push(chunk);
            })
            .on('end', () => {
                resolve(Buffer.concat(dataChunks));
            })
            .on('error', (error) => {
                reject();
            });
        });
    });
}

module.exports.remini = remini;
                       
