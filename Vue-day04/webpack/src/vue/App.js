// vue文件夹下的App.js  导出子组件
export default {
  template: `
  <div>
    <h3>{{message}}</h3>
    <button>按钮</button>
    <p>{{name}}</p>
  </div>`,
  data() {
    return {
      message: 'hello webpack',
      name: 'template'
    }
  }
}