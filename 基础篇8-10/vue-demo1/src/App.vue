<template>
  <div id="app">
    <hello-world msg="hello, world" />
    <hr />
    <input v-model="message" />
    <input :value="message" @input="handleChange" />
    <div>{{ message }} | {{ message + '-' + message }}</div>
    <div class="bg" :id="message"></div>
    <hr />
    <todo-list>
      <template v-slot:default="{ msg }">
        <button>msg1: {{ msg }}</button>
        <todo-item @delete="handleDelete" v-for="item in list" :key="item.id" :title="item.title" :del="item.del">
          <template v-slot:pre-icon="{ icon }">
            <button>msg2: {{ msg }}</button>
            <span>前置图标: {{ icon }}</span>
          </template>
          <template v-slot:suf-emoji="{ emoji }">
            <button>msg3: {{ msg }}</button>
            <span>后置图标: {{ emoji }}</span>
          </template>
        </todo-item>
      </template>
    </todo-list>
  </div>
</template>

<script>
//App.vue是根组件
// const TodoList = () => import('@/components/TodoList.vue');
// const TodoItem = () => import('@/components/TodoItem.vue');
// const HelloWorld = () => import('@/components/HelloWorld.vue');

export default {
  name: 'App',
  components: {
    // TodoItem,
    // TodoList,
    // HelloWorld
  },
  data() {
    return {
      message: 'hello world',
      list: [
        {
          id: '001',
          title: '课程1',
          del: false
        },
        {
          id: '002',
          title: '课程2',
          del: true
        },
        {
          id: '003',
          title: '课程3',
          del: false
        }
      ]
    };
  },
  methods: {
    handleChange(e) {
      this.message = e.target.value;
    },
    handleDelete(val) {
      // eslint-disable-next-line no-console
      console.log('handleDelete', val);
    }
  }
};
</script>

<style scoped>
#red {
  background: red;
}
#blue {
  background: blue;
}
#purple {
  background: purple;
}
#yellow {
  background: yellow;
}

.bg {
  width: 100%;
  height: 50px;
  background-color: #ccc;
}
</style>
