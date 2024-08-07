const { Image } = require('image-js');
const fs = require('fs')

/**
 * This program inverts the *.png images in this folder
 */

function test() {
    fs.readdir('./', (err, files) => {
        if (err) {
            console.log('Error reading folder', err);
            process.exit(1);
        }
        for (let file of files) {
            if (file.endsWith('.png')) {
                console.log(file);
                Image.load(file).then((image) => {
                    let max = image.size;
                    for (let i = 0; i < max; i++) {
                        let newVal = 255 - image.getPixel(i)[0];
                        image.setPixel(i, [newVal]);
                    }
                    image.save(file);
                })
                .catch((loadErr) => {
                    console.log('Error loading', loadErr);
                })
            }
        }
    })
}

test();
