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

    var app = new Vue({
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
            ],
            groceryListCopy: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' }
            ],
            fw: 'bold',
            stObj: {
                fontWeight: 'bold',
                fontSize: '2em'
            },
            stObj1: {
                color: 'red'
            },
            vIfFlg: true,
            vForObj: {
                item1: "item1Value",
                item2: "item2Value",
                item3: "item3Value",
                item4: "item4Value",
            },
            showParameterAndEventTagName: '',
            inputValue: '',
            spanValue: ''
        },
        methods: {
            clickFunc: function () {
                this.stObj.fontWeight = '';
                this.stObj.fontSize = '1em';
            },
            vIfYesClickFunc: function (event) {
                this.vIfFlg = false;
            },
            vIfNoClickFunc: function (event) {
                this.vIfFlg = true;
            },
            reversalArr: function (event) {
                this.groceryList.reverse();
            },
            reversalArrCopy: function (event) {
                this.groceryListCopy.reverse();
            },
            removeItemArr: function (event) {
                this.groceryListCopy.pop();
            },
            addItemArr: function () {
                this.groceryListCopy.push({ id: 3, text: 'new item' });
            },
            addItemForObj: function () {
                var keyName = Object.keys(this.vForObj).length + 1;
                Vue.set(this.vForObj, 'item' + keyName, 'item' + keyName + 'Value')
            },
            clickFuncWithParameter: function (msg, event) {
                this.showParameterAndEventTagName = "<br>Parameter is:" + msg + "<br>TagName is:" + event.target.tagName;
            },
            boardCastClick: function (event) {
                alert('BoardCast to div tag!');
            },
            copyValue: function (event) {
                this.spanValue = this.inputValue;
            }
        }
    });

});




