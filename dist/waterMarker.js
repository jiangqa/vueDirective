import Vue from 'vue'

function addWaterMarker(str, parentNode) {
  // 水印文字，父元素，字体，文字颜色
  const can = document.createElement('canvas')
  parentNode.appendChild(can)
  can.width = 125
  can.height = 125
  can.style.display = 'none'
  const cans = can.getContext('2d')
  cans.rotate((-20 * Math.PI) / 180)
  cans.font = '11px Microsoft JhengHei'
  cans.fillStyle = 'rgba(180, 180, 180, 0.8)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  // cans.fillText(str, can.width / 10, can.height / 2)
  cans.fillText(str, can.width / 6 - 40, 100)
  parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}
/**
 * 指令用法：
 1.v-water:文字
 2.默认取localStorage.getItem('userStr)
 */
const water = Vue.directive('water', {
  inserted: function(el, binding) {
    addWaterMarker(binding.arg || localStorage.getItem('userStr'), el)
  }
})
export default water
