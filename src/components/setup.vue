<template>
  <router-link to="/">Home</router-link>
  <br />
  <button @click="changeReadonly(0)">
    useReactiveReadonly: {{ useReactiveReadonly }}
  </button>
  <br />
  <Child msg="setup's child" :useRef="useRef" @event="changeReadonly">
    <div>solt</div>
  </Child>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  readonly,
  getCurrentInstance,
} from "vue";
import Child from "./child.vue";
export default defineComponent({
  components: { Child },
  setup() {
    console.warn("this", this);
    console.warn("getCurrentInstance", getCurrentInstance());
    const useRef = ref(0);
    const useReactive = reactive({
      a: 1,
      b: 2,
    });
    console.warn("useRef", useRef);
    console.warn("useRef.value", useRef.value);
    console.warn("useReactive", useReactive);
    console.warn(
      "useReactive.value",
      useReactive.value,
      "// 只有 ref 有 value 属性"
    );
    onMounted(function () {
      console.log(this);
    });
    const useReactiveWillReadonly = reactive({ a: 1 });
    const useReactiveReadonly = readonly(useReactiveWillReadonly);
    const changeReadonly = (aaa) => {
      console.log(`try change useReactiveReadonly to ${aaa || 123}`);
      useReactiveReadonly.a = aaa || 123;
    };
    return {
      useRef,
      useReactive,
      changeReadonly,
      useReactiveReadonly,
    };
  },
});
</script>
