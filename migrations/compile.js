const solc = require("solc");
const path = require("path");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "../build");
fs.removeSync(buildPath);

const tokenPath = path.resolve(__dirname, "../contracts", "Token.sol");
const source = fs.readFileSync(tokenPath, "utf8");

var jsonContractSource = {
    language: 'Solidity',
    sources: {
        'Token.sol': {
            content: source,
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}

const output = JSON.parse(solc.compile(JSON.stringify(jsonContractSource)));

fs.ensureDirSync(buildPath);
fs.outputJsonSync(path.resolve(buildPath, "Token.json"), output);