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
 function createoffer() {
  window.chia.request({
    method: 'createOffer',
    params: {
      requestAssets: [
        {
          assetId: document.getElementById('request').value,
          amount: document.getElementById('amount').value,
        }
      ],
      offerAssets: [
        {
          assetId: document.getElementById('offer').value,
          amount: document.getElementById('amount2').value,
        }
      ]
    }
  })
 }
 function getVal() {
  const val = document.querySelector('input').value;
  console.log(val);
}
