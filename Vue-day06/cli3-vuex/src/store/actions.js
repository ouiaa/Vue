export default {
  // context上下文
  aUpdateInfo(context, payload) {
    // 使用Promise对象包裹异步操作用来表明actions已完成
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload);
        resolve('已完成')
      }, 1000);
    })
  }
}