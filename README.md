### v-action
 1.用法 v-action:权限字符串 
 2.登陆后将权限列表存储到 sessionStorage.setItem('permissions',JSON.stringify(permissions array))
 
### v-number
1.改变input type 为number
2.v-number:需要保留的位数  默认为 2
3.输入框 v-model 及 value 会改变值 ；其他则改变显示值，不改变data 值

### v-water
1.v-water:文字
2.登陆后将字符串存储到 localStorage.setItem('userStr','水印文字')
2.默认取localStorage.getItem('userStr')
