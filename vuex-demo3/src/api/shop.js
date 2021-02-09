/**
 * Mocking client-server processing
 */
const _products = [
  { id: 1, title: '华为 Mate 20', price: 3999, inventory: 2 },
  { id: 2, title: '小米 9', price: 2999, inventory: 0 },
  { id: 3, title: 'OPPO R17', price: 2999, inventory: 5 }
];

export default {
  getProducts(callback) {
    new Promise(resolve => {
      setTimeout(resolve(_products), 200);
    })
      .finally(() => {
        console.log('Promise: getProducts finally');
      })
      .then(res => {
        console.log('getProducts res :>> ', res);
        callback(res);
      });
  },

  buyProducts(products, callback, errorCallback) {
    new Promise((resolve, reject) => {
      Math.random() > 1
        ? setTimeout(() => {
            resolve('successful 666');
          }, 200)
        : setTimeout(() => {
            reject('failed 888');
          }, 200);
    })
      .finally(() => {
        console.log('Promise: buyProducts finally');
        console.log('buyProducts products :>> ', products);
      })
      .then(res => {
        console.log('buyProducts res :>> ', res);
        callback(res);
      })
      .catch(err => {
        console.log('buyProducts err :>> ', err);
        errorCallback(err);
      });
  }
};
