const fs = require('fs');
const path = require('path');

function greetUser(name) {
    if(!name) {
        console.log('No name provided!');
        return;
    }
    console.log(`Hello, ${name}!`);
}

function sum(a, b) {
    return a + b;
}

function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}

function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content);
        console.log('File written successfully');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

function listFiles(dir) {
    try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            console.log(file);
        });
    } catch (err) {
        console.error('Error listing files:', err);
    }
}

function getFileExtension(filename) {
    return path.extname(filename);
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