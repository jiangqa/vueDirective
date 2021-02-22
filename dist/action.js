import Vue from 'vue'

/**
 * Action 权限指令
 * 指令用法：
   1.SessionStorage 存储指令列表
   2.v-action:{{权限字符串}}
 */
const action = Vue.directive('action', {
  inserted: function(el, binding) {
    console.log(binding)
    const actionName = binding.value
    JSON.parse(sessionStorage.getItem('permissions') || '[]').indexOf(
      actionName
    ) === -1
      ? el.parentNode.removeChild(el)
      : ''
  }
})

export default action
