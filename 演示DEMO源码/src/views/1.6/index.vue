<template>
  <div>
    <a-tabs>
      <!-- 时钟 -->
      <a-tab-pane key="clock" tab="时钟">
        <button @click="destroyClock = !destroyClock">
          {{ destroyClock ? '加载时钟' : '销毁时钟' }}
        </button>
        <hr />
        <!-- 子组件:时钟 -->
        <!-- v-if销毁子组件 -->
        <Clock v-if="!destroyClock" />
        <h1>destroyClock: {{ destroyClock }}</h1>
      </a-tab-pane>
      <!-- 函数式组件 -->
      <a-tab-pane key="Functional" tab="函数式组件">
        <Functional :name="name" :destroy-clock="destroyClock" />
        <TempVar :var1="`hello ${name}`" :var2="destroyClock ? 'destroyed clock' : 'not destroyed clock'">
          <template v-slot:default="{ var1, var2 }">
            <div>var1: {{ var1 }}</div>
            <div>var2: {{ var2 }}</div>
          </template>
        </TempVar>
        <h1>destroyClock: {{ destroyClock }}</h1>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Clock from './Clock';
import Functional from './Functional';
import TempVar from './TempVar';
export default {
  components: {
    Clock,
    Functional,
    TempVar
  },
  data() {
    return {
      destroyClock: false,
      name: 'var1'
    };
  },
  mounted() {
    window.vm = this;
  }
};
</script>
