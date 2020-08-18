new Vue({
    el: '#app',
    data:{
        title: 'Becoming a vue ninja',
        name: 'Rakib'
    },
    methods:{
        greet(time){            
            return `Hello and good ${time} ${this.name}`
        }
    }
})