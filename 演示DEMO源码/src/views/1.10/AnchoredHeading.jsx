export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render: function(h) {
    console.log('jsx this.$slots :>> ', this.$slots);
    const Tag = `h${this.level}`;
    return <Tag>{this.$slots.default}</Tag>;
    // return h(`h${this.level}`, this.$slots.default);
  }
};
