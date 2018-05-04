　　require.config({

    paths: {

        "Vue": "./lib/vue",

    }

});

　　require(['Vue'], function (Vue) {

    Vue.component('todo-item', {
        // todo-item 组件现在接受一个
        // "prop"，类似于一个自定义特性。
        // 这个 prop 名为 todo。
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
      })

    new Vue({
        el: '#app',
        data: {
            parentMessage: 'wuxun msg',
            items: [
              { message: 'www.runoob.com1' },
              { message: 'www.runoob.com2' }
            ],
            aaaa: 'titleaaa',
            groceryList: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' }
              ]
        },
        methods: {
            clickFunc: function () {
                this.aaaa = 'titlebbb'
            }
        }
    });

});




