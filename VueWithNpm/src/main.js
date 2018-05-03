　　require.config({

    paths: {

        "Vue": "./lib/vue",

    }

});

　　require(['Vue'], function (Vue) {

    new Vue({
        el: '#app',
        data: {
            parentMessage: 'wuxun msg',
            items: [
              { message: 'www.runoob.com1' },
              { message: 'www.runoob.com2' }
            ],
            aaaa: 'aaaa'
        }
    });

});




