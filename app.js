new Vue({
    el: '#app',
    data:{
        title: 'Becoming a vue ninja',
        name: ''
    
    },
    methods:{
        updateName(e){
            this.name = e.target.value
        }
    }     
})