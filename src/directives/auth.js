import { check } from "../utils/auth";

// 权限指令弊端：只有第一次渲染时才会控制，无法解决权限会动态改变的问题
// 权限组件唯一缺点：就是写法复杂点 e.g.
// <Authorized :authority="['admin']">
//   <SettingDrawer />
// </Authorized>
function install(Vue, options = {}) {
  Vue.directive(options.name || "auth", {
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
}

export default { install };
