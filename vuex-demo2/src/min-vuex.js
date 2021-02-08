import Vue from 'vue';
const Store = function Store(options = {}) {
  const { state = {}, mutations = {} } = options;

  this._vm = new Vue({
    data: {
      $$state: state
    }
  });

  this._mutations = mutations;
};

Store.prototype.commit = function (type, payload) {
  if (this._mutations[type]) {
    this._mutations[type](this.state, payload);
  }
};

//1.0 Object.defineProperty
Object.defineProperty(Store.prototype, 'state', {
  get: function () {
    console.log('this :>> ', this);
    console.log('this._vm :>> ', this._vm);
    return this._vm._data.$$state;
  }
});

//2.0 Object.defineProperties
// Object.defineProperties(Store.prototype, {
//   state: {
//     get: function () {
//       console.log('this :>> ', this);
//       console.log('this._vm :>> ', this._vm);
//       return this._vm._data.$$state;
//     }
//   }
// });

export default { Store };
