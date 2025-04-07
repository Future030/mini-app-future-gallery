const hre = require("hardhat");

async function main() {
    const Gallery = await hre.ethers.getContractFactory("FutureGallery");
    const gallery = await Gallery.deploy();

    await gallery.waitForDeployment(); // modern ethers.js v6+
    console.log(`✅ FutureGallery deployed to: ${gallery.target}`);
}

main().catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exitCode = 1;
});