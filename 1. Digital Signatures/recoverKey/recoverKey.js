const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    messageHash = hashMessage(message);
    return secp.recoverPublicKey(messageHash, signature, recoveryBit);
}

module.exports = recoverKey;


/* 

When the signature is passed with all of its components (recovery bit included), 
the public key can be recovered. 
This means that blockchain nodes will be able to understand who signed the transaction that was sent to them.


Given a message, signature, and recoveryBit find the public key and return it! 
Be sure to hash the message when passing it to the recovery method.


*/