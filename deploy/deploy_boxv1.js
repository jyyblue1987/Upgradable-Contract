module.exports = async function ({ getNamedAccounts, deployments, run }) {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
   
    const deployment = await deploy("Box", {
        contract: "Box",
        from: deployer,
        proxy: {
          proxyContract: "OpenZeppelinTransparentProxy",
          owner: deployer,
          execute: {
            init: {
                methodName: "initialize",
                args: [20],
            }
          },
        },
        log: true,
      });

    // await deploy('Box', {
    //     from: deployer,
    //     proxy: true,
    //     log: true
    // });
  };
  
  module.exports.id = 'deploy_boxv1'
  module.exports.tags = ['Box'];
  // module.exports.dependencies = [];
  module.exports.dependencies = [];
  