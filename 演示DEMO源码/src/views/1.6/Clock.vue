<template>
  <div>
    <!-- 为了log输出在哪渲染 -->
    {{ log('render dom～～～') }}
    <!-- 当前时间 -->
    {{ now }}
    <!-- 切换按钮 -->
    <button @click="start = !start">{{ start ? '停止' : '开始' }}</button>
    <h1>{{ $data }}</h1>
    <h1>clockInterval: {{ clockInterval }}</h1>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data: function() {
    console.log('data init～～～');
    return {
      now: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      start: false,
      clockInterval: null
    };
  },
  // 监听器
  watch: {
    start() {
      this.startClock();
    }
  },
  // 生命周期
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
    console.log('---------------------------');
    this.startClock();
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
    console.log('---------------------------');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
    clearInterval(this.clockInterval);
  },
  destroyed() {
    console.log('destroyed');
  },
  // 方法
  methods: {
    moment: moment,
    log: window.console.log,
    startClock() {
      clearInterval(this.clockInterval);
      if (this.start) {
        this.clockInterval = setInterval(() => {
          this.now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        }, 1000);
      }
    }
  }
};
</script>
