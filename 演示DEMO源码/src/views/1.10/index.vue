<template>
  <div>
    <span>Message: {{ msg }}</span>
    <hr />
    <VNodes :vnodes="getJSXSpan()" />
    <hr />
    <anchored-heading1 :level="1">
      <template>
        Hello world 111!
      </template>
    </anchored-heading1>
    <anchored-heading2 :level="2">
      <template>
        Hello world 222!
      </template>
    </anchored-heading2>
    <anchored-heading3 :level="3">
      <template>
        Hello world 333!
      </template>
    </anchored-heading3>
    <VNodes :vnodes="getAnchoredHeading(4)" />
  </div>
</template>
<script>
import AnchoredHeading1 from './AnchoredHeading.vue';
import AnchoredHeading2 from './AnchoredHeading.js';
import AnchoredHeading3 from './AnchoredHeading.jsx';

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
