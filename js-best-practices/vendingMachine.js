var balanceManager = require('./balanceManager')
var changeHandler = require('./changeHandler')
var productInventory = require('./productInventory')

var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
]

module.exports = {
  insertCoin: function (coinType) {
    var value = changeHandler.getAmount(coinType)
    balanceManager.increaseBalance(value)
  },

  releaseChange: function () {
    var currentBalance = balanceManager.getBalance()
    balanceManager.decreaseBalance(currentBalance)
    return changeHandler.convertToChange(currentBalance)
  },
  isValidAmount: function (amount) {
    if (amount === null) {
      return false
    } else {
      return true
    }
  },

  vendProduct: function (productId) {
    var product = productInventory.getProduct(productId)
    balanceManager.decreaseBalance(product.price)
    return product
  },
  getProducts: function () {
    return products
  }

}
