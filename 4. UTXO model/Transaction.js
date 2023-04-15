class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        const anySpent = this.inputUTXOs.some((x) => x.spent);
        if(anySpent) {
            throw new Error ("cannot include a spent UTXO");
        }

        let inputUTXOsSum = 0;
        let outputUTXOsSum = 0;

        for (let i = 0; i< this.inputUTXOs.length; i++) {
            inputUTXOsSum += this.inputUTXOs[i].amount
            
        }
        // const inputSum = this.inputUTXOs.reduce((p, c) => {
        //                  return p + c.amount;
            //              }, 0 ) 

        for (let i = 0; i< this.outputUTXOs.length; i++) {
            outputUTXOsSum += this.outputUTXOs[i].amount
        }

        // const outputSum = this.outputUTXOs.reduce((p, c) => {
        //                  return p + c.amount;
            //              }, 0 ) 

        if(inputUTXOsSum < outputUTXOsSum) {
            throw new Error("Not enough UTXOs to spend");
        } else {
            for (let i = 0; i < this.inputUTXOs.length; i++) {
                
                this.inputUTXOs[i].spent = true;
            }            
        }
       // this.inputUTXOs.forEach((utxo) => {
       //      utxo.spend();
       // });        

        this.fee = inputUTXOsSum - outputUTXOsSum;
    }
}

module.exports = Transaction;