import { VNode,createApp } from 'vue';
import defaultVNode from './createNode'
interface options {
  target?:HTMLElement
  vNode?:VNode
  className?: string
  style?: Partial<CSSStyleDeclaration>
}


const createDom = (options:options) => {
  const {
    target = document.body,
    vNode = defaultVNode,
    style,className
  } =  options
  /** create VNode */
  const viewDom = createApp(vNode)
  /** create Dom */
  const mountedNode = document.createElement('div')
  /** Init state */
  mountedNode.className = className
  Object.assign(mountedNode.style,style)
  /** append Dom */
  target.appendChild(mountedNode);
  /** append VNode */
  viewDom.mount(mountedNode)
}

export default createDom