const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
    }
    encrypt (message, key) {
        if (!message || !key) {
            throw new Error ();
        }

        const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        let messageWithoutSpaces = message.toUpperCase().replace(/\s+/g, '');
        let keyword = key.toUpperCase().repeat(message.length).substring(0, message.length).split('').join('');
        let encryptMessageWithoutSpaces = '';
        let encryptMessageArray = [];
        let messageArray = message.split(' ');
        let substringWord;
        let encryptMessageString;
		
        for (let i = 0; i < messageWithoutSpaces.length; i++) {
            if (ALPHABET.includes(messageWithoutSpaces[i])) {
                encryptMessageWithoutSpaces += ALPHABET[(ALPHABET.indexOf(messageWithoutSpaces[i]) + ALPHABET.indexOf(keyword[i])) % 26];
            } else {
                encryptMessageWithoutSpaces += messageWithoutSpaces[i];
            }
        }

        for (let i = 0; i < messageArray.length; i++) {
            encryptMessageArray.push(encryptMessageWithoutSpaces.substring(0, messageArray[i].length));
            substringWord = encryptMessageWithoutSpaces.substring(0,messageArray[i].length);
            encryptMessageWithoutSpaces = encryptMessageWithoutSpaces.replace(substringWord, '');
        }

        encryptMessageString = encryptMessageArray.join(' ');

        if (this.mode === false) {
            return encryptMessageString.split('').reverse().join('')
        } else {
            return encryptMessageString
        }
    }    
  
    decrypt (message, key) {
        if (!message || !key) {
            throw new Error ()
        }

        const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        let messageWithoutSpaces = message.toUpperCase().replace(/\s+/g, '');
        let keyword = key.toUpperCase().repeat(message.length).substring(0, message.length).split('').join('');
        let decryptMessageWithoutSpaces = '';
        let decryptMessageArray = [];
        let messageArray = message.split(' ');
        let substringWord;
        let decryptMessageString;

        for (let i = 0; i < messageWithoutSpaces.length; i++) {
            if (ALPHABET.includes(messageWithoutSpaces[i])) {
                decryptMessageWithoutSpaces += ALPHABET[(ALPHABET.indexOf(messageWithoutSpaces[i]) + 26 - ALPHABET.indexOf(keyword[i])) % 26];
            } else {
                decryptMessageWithoutSpaces += messageWithoutSpaces[i];
            }
        }

        for (let i = 0; i < messageArray.length; i++) {
            decryptMessageArray.push(decryptMessageWithoutSpaces.substring(0, messageArray[i].length));
            substringWord = decryptMessageWithoutSpaces.substring(0,messageArray[i].length);
            decryptMessageWithoutSpaces = decryptMessageWithoutSpaces.replace(substringWord, '');
        }

        decryptMessageString = decryptMessageArray.join(' ');

        if (this.mode === false) {
            return decryptMessageString.split('').reverse().join('')
        } else {
            return decryptMessageString
        }
    }
}

module.exports = VigenereCipheringMachine;
