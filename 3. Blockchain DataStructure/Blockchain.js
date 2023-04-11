const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block()];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(newBlock);
    }

    isValid() {
      for(let i = this.chain.length-1; i > 0 ; i--) {
          let block = this.chain[i];
          let prev = this.chain[i-1];

          if(block.previousHash.toString() !== prev.toHash().toString()) {
              return false;
          }          
      }
      return true;
    }
}

module.exports = Blockchain;