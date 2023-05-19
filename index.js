async function connect(){
    try {
      await window.chia.request({ method: "connect" });
      const publicKeys = await window.chia.request({ method: "getPublicKeys" });
      // synthetic public keys
      // more details, please visit: https://docs.goby.app/example
      console.log(publicKeys)
      document.getElementById('connect').innerHTML = 'connected';
      
    } catch (err) {
      // { code: 4001, message: 'User rejected the request.' }
    }
    
  }
 async function CreateNFToffer(){
    window.chia.request({
      method: 'createOffer',
      params: {
        requestAssets: [
          {
            assetId: document.getElementById("request").value,
            amount: 1
          }
        ],
        offerAssets: [
          {
            assetId: document.getElementById("amount").value,
            amount: document.getElementById("offer").value,
          }
        ]
      }
    })
  }
