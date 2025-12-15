const fs = require('fs');
const path = require('path');

function main2(){

}



function main() {
    greetUser('Alice');
    greetUser();

    const result = sum(5, '10'); // Error: adding number and string
    console.log('Sum:', result);

    const fileContent = readFile('sample.txt');
    if (fileContent) {
        console.log('File Content:', fileContent);
    }

    writeFile('output.txt', 'This is a test output.');

    listFiles('./nonexistent'); // Error: directory may not exist

    const ext = getFileExtension('document.pdf');
    console.log('Extension:', ext);

    const ext2 = getFileExtension(); // Error: missing argument
    console.log('Extension:', ext2);
}

main();


const fs = require('fs');
const path = require('path');

function main2(){

}



function main() {
    greetUser('Alice');
    greetUser();

    const result = sum(5, '10'); // Error: adding number and string
    console.log('Sum:', result);

    const fileContent = readFile('sample.txt');
    if (fileContent) {
        console.log('File Content:', fileContent);
    }

    writeFile('output.txt', 'This is a test output.');

    listFiles('./nonexistent'); // Error: directory may not exist

    const ext = getFileExtension('document.pdf');
    console.log('Extension:', ext);

    const ext2 = getFileExtension(); // Error: missing argument
    console.log('Extension:', ext2);
}

main();