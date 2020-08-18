new Vue({
    el: '#app',
    data:{
        title: 'Becoming a vue ninja',
        name: 'Rakib',
        url:'http:/wwww.youtube.com',
        classes: ['one', 'two']
    },
    methods:{
        greet(time){            
            return `Hello and good ${time} ${this.name}`
        }
    }
})