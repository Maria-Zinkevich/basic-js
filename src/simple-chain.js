const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        this.chain.push(`( ${value} )`);
        return this
    },
    removeLink(position) {
        if (position > 0) {
            this.chain.splice(position - 1, 1);
        } else {
            this.chain = [];
            throw Error ('Error');
        }
	    return this
    },
    reverseChain() {
        this.chain.reverse();
        return this
    },
    finishChain() {
        let arr = [];
        for (let i = 0; i < this.chain.length; i++) {
            if (i !== this.chain.length - 1) {
                arr.push(this.chain[i] + '~~');
            } else {
                arr.push(this.chain[i]);
            }
        }
        this.chain = [];
        return arr.join('')
    }
};

module.exports = chainMaker;
