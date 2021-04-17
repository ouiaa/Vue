let app = new Vue({
  el: '.app',
  data: {
    // 通过数组里放对象形式存放数据，不包括按钮
    books: [{
      id: 1,
      name: '《数据结构》',
      date: '2006-9',
      price: 85,
      num: 1
    },
    {
      id: 2,
      name: '《计算机网络》',
      date: '2006-2',
      price: 59,
      num: 1
    }, {
      id: 3,
      name: '《操作系统》',
      date: '2008-10',
      price: 75,
      num: 1
    }, {
      id: 4,
      name: '《计算机组成原理》',
      date: '2006-3',
      price: 100,
      num: 1
    },
    ]
  },
  methods: {
    /*getPrice(price) {
      return '￥' + price.toFixed(2)
    }*/
    increment(index) {
      return this.books[index].num++
    },
    decrement(index) {
      return this.books[index].num--
    },
    removeHandler(index) {
      return this.books.splice(index, 1)
    }
  },
  computed: {

    totalPrice() {
      let totalPrice = 0
      // 1.普通的for循环方法
      /* for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].num
      } */
      // 2.for...in方法  i是索引值
      /* for (let i in this.books) {
        totalPrice += this.books[i].price * this.books[i].num
      } */
      // 3.for...of方法
      /* for (let item of this.books) {
        totalPrice += item.price * item.num
      } */
      // return totalPrice
      // 4.reduce()
      return this.books.reduce(function (preValue, item) {
        // 让preValue初始化为0，item是books里的对象
        return preValue + item.price * item.num
      }, 0)

    }

  },
  filters: {
    // 函数
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }

})