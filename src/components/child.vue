<template>
  <h2>{{ msg2 }}</h2>
  <h3>{{ useRef }}</h3>
  <h4>{{ propsRef }}</h4>
  <button @click="test11">test11</button>
</template>
<script>
import {
  defineComponent,
  toRef,
  toRefs,
  computed,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
    useRef: Number,
    noAttr: () => true,
  },
  emits: {
    event: null,
  },
  setup(props, context) {
    console.warn("props", props);
    console.warn("context", context);
    const {
      msg: message,
      useRef: propsRef,
      noAttr: propsNoAttrToRefs,
    } = toRefs(props); // toRefs 将 props 传值的 prop 结构为 ref，没有传值就会被解构为 undefined
    console.warn("propsNoAttrToRefs", propsNoAttrToRefs);
    const propsNoAttr = toRef(props, "noAttr"); // 将 prop 里面可能没有传值的属性转变为一个 ref
    console.warn("propsNoAttr", propsNoAttr);
    console.warn("propsNoAttr.value", propsNoAttr.value);
    const msg2 = computed(() => `MSG: ${message.value}`);
    console.warn("msg2", msg2);

    return {
      test11: () => {
        context.emit("event", 456);
      },
      propsRef,
      msg2,
    };
  },
});
</script>
