import Vue from 'vue'

/**
 * 指令用法：
 1.改变input type 为number
 2.v-number:需要保留的位数  默认为 2
 3.输入框 v-model 及 value 会改变值 ；其他则改变显示值，不改变data 值
 */
const number = Vue.directive('number', {
  inserted: function(el, binding, Vnode) {
    const input = Vnode.tag === 'input' ? el : el.querySelector('input')
    const num = binding.arg ? Number(binding.arg) : 2
    if (input) {
      input.type = 'number'
      input.addEventListener('blur', e => {
        if (e.target.value) {
          e.target.value = Number(e.target.value).toFixed(num)
          el.dispatchEvent(new Event('input'))
        }
      })
    } else {
      el.innerText = Number(el.innerText).toFixed(num)
    }
  }
})

export default number
