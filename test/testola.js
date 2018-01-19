/* eslint-disable*/
var Reverter = artifacts.require('./Reverter.sol');

contract('Reverter', function(accounts) {
  it('should reject', () => {
    return Reverter.new()
    .then(reverter=>{
      return reverter.crapout()
      .then(()=>assert.equal(true, false, "This should NOT happen because the crapout() call should reject."))
      .catch(e=>assert.equal(e.message, "VM Exception while processing transaction: revert"))
    })
  })
})
