const { ethers, upgrades } = require('hardhat');

require('dotenv').config();

const PROXY = "0x861FeE30e9475862146a93Eaef05fD21E736cb7A";

async function upgradeBoxV2() {
    try {
        const BoxV2 = await ethers.getContractFactory('BoxV2');
        await upgrades.upgradeProxy(PROXY, BoxV2);

        console.log('BoxV2 upgraded');
        
    } catch (error) {
        console.error('Error in addLiquidity:', error);
    }
}

if (require.main === module) {
    upgradeBoxV2()
        .then(() => {
            // process.exit(0)
        }
        )
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
}