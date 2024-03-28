const { ethers, upgrades } = require('hardhat');

require('dotenv').config();

async function deployBoxV1() {
    try {
        const Box = await ethers.getContractFactory('Box');

        const box = await upgrades.deployProxy(Box, [42], {
            initializer: 'initialize',
        });

        await box.deployed();

        console.log('Box deployed to:', box.address);

        
    } catch (error) {
        console.error('Error in addLiquidity:', error);
    }
}

if (require.main === module) {
    deployBoxV1()
        .then(() => {
            // process.exit(0)
        }
        )
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
}