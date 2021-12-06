import { Spin  } from "ant-design-vue";
import { createVNode } from "vue";

const defaultVNode = createVNode(
  Spin,
  {
    tips:'loading'
  }
)

export default defaultVNode