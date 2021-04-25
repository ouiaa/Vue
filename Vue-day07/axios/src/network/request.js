import axios from 'axios'

// 以函数形式进行封装axios实例
// 有多种类型接口，选择需要的即可
export function request1(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 拦截器，给当前axios实例添加拦截器。参数是两个箭头函数
  // 1)请求拦截器 request方法
  instance.interceptors.request.use(config => {
    // 请求成功后拦截
    // console.log(config);
    // 在发生请求之前做些什么
    // 如:1.每次发送请求网络时，在界面上显示一个正在请求的图标/动画
    // 2.某些网络请求（如登录必须携带token），必须携带某些特殊信息，否则转入其他页面
    // 3.过滤掉config中一些不符合服务器要求的信息
    return config // 处理后必须返回请求，否则无法发送请求，后面同理
  }, err => {
    // 请求失败后拦截
    console.log(err);
    return err
  })

  // 2)响应拦截器 response方法  使用与请求拦截器差不多
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data  //一般只需要返回响应结果里的数据
  }, err => {
    return err
  })

  // 2.发送真正的网络请求,instance返回的就是一个Promise对象
  return instance(config)
}

export function request2(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  return instance(config)
}

