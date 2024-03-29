module.exports = async function ({ getNamedAccounts, deployments, run }) {
    const { deploy, read } = deployments;
    const { deployer } = await getNamedAccounts();
   
    const deployment = await deploy("Box", {
        contract: "Box",
        from: deployer,
        proxy: {
          proxyContract: "OpenZeppelinTransparentProxy",
          owner: deployer,
          execute: {
            methodName: "initialize",
            args: [30],
          },
        },
        log: true,
      });
    
    //   if (deployment.newlyDeployed) {
    //     await run("etherscan-verify");
    // }
  };
  
  module.exports.id = 'deploy_boxv1'
  module.exports.tags = ['Box'];
  // module.exports.dependencies = [];
  module.exports.dependencies = [];
  