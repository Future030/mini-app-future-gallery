// scripts/exportAbi.js

const fs = require('fs');
const path = require('path');

const scriptDir = __dirname;
const contractsDir = path.resolve(scriptDir, '..');
const clientDir = path.resolve(contractsDir, '../FutureGallery.Client');

const contractName = 'FutureGallery';

const artifactPath = path.join(contractsDir, 'artifacts/contracts', `${contractName}.sol`, `${contractName}.json`);
const abiOutputPath = path.join(contractsDir, `${contractName}ABI.json`);
const clientOutputPath = path.join(clientDir, 'wwwroot/abi', `${contractName}.json`);

if (!fs.existsSync(artifactPath)) {
    console.error(`❌ Artifact not found: ${artifactPath}`);
    process.exit(1);
}

const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
const abi = artifact.abi;

// Save in contracts dir
fs.writeFileSync(abiOutputPath, JSON.stringify(abi, null, 2));
console.log(`✅ ABI saved to: ${abiOutputPath}`);

// Save in client dir
fs.mkdirSync(path.dirname(clientOutputPath), { recursive: true });
fs.writeFileSync(clientOutputPath, JSON.stringify(abi, null, 2));
console.log(`✅ ABI copied to frontend: ${clientOutputPath}`);