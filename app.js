new Vue({
    el: '#app',
    data:{
        title: 'Becoming a vue ninja',
        showName: false,
        showAge: true
    },
    methods:{
        toggleName(){
            this.showName = ! this.showName
        },
        toggleAge(){
            this.showAge = ! this.showAge
        }
    }     
})



