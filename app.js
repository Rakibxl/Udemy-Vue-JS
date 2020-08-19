new Vue({
    el: '#app',
    data:{
        title: 'Becoming a vue ninja',
        items: ['Mushroom', 'Green Shells', 'Red Shells', 'Banana', 'Star'],
        ninjas: [
            {name: 'Crystal', age:25, belt: 'Black'},
            {name: 'Ryu', age:30, belt: 'Brown'},
            {name: 'Rakib', age:31, belt: 'Orange'}
        ]        
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



