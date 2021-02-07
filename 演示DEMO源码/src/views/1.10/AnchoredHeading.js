export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render: function(createElement) {
    console.log('js this.$slots :>> ', this.$slots);
    return createElement(
      'h' + this.level, // 标签名称
      this.$slots.default // 子元素数组
    );
  }
};
