<template>
  <div>
    <hr />
    <span>Message: {{ msg }}</span>
    <hr />

    <VNodes :vnodes="getJSXSpan()" />
    <hr />

    <anchored-heading1 :level="1">
      <template>
        Hello world template!
      </template>
    </anchored-heading1>
    <hr />

    <anchored-heading2 :level="2">
      <template>
        Hello world js!
      </template>
    </anchored-heading2>
    <hr />

    <anchored-heading3 :level="3">
      <template>
        Hello world jsx!
      </template>
    </anchored-heading3>
    <hr />

    <VNodes :vnodes="getAnchoredHeading(4)" />
    <hr />
  </div>
</template>
<script>
import AnchoredHeading1 from './AnchoredHeading.vue';
import AnchoredHeading2 from './AnchoredHeading.js';
import AnchoredHeading3 from './AnchoredHeading.jsx';
console.log('AnchoredHeading1 :>> ', AnchoredHeading1);
console.log('AnchoredHeading2 :>> ', AnchoredHeading2);
console.log('AnchoredHeading3 :>> ', AnchoredHeading3);

export default {
  components: {
    AnchoredHeading1,
    AnchoredHeading2,
    AnchoredHeading3,
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  data() {
    return {
      msg: 'hello vue'
    };
  },
  methods: {
    getJSXSpan() {
      return <span>Message: {this.msg}</span>;
    },
    getAnchoredHeading(level) {
      const Tag = `h${level}`;
      return <Tag>Hello world!</Tag>;
    }
  }
};
</script>
