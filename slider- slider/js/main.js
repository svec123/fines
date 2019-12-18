


// define slider component
var items = [{
  title: 'Article 1',
  img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg",
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ex arcu, fringilla in urna quis, ultrices efficitur neque. Morbi lacinia arcu tellus, a imperdiet'
}, {
  title: 'Article 2',
  img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/grooves.jpg",
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ex arcu, fringilla in urna quis, ultrices efficitur neque. Morbi lacinia arcu tellus, a imperdiet'
}, {
  title: 'Article 3',
  img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/arch.jpg",
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ex arcu, fringilla in urna quis, ultrices efficitur neque. Morbi lacinia arcu tellus, a imperdiet'
}, {
  title: 'Article 4',
  img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/sunset.jpg",
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ex arcu, fringilla in urna quis, ultrices efficitur neque. Morbi lacinia arcu tellus, a imperdiet'
}

]



var items2 = [
  
  {
  title: '1 - месяц занятий',
  img: "1.jpg"
}, {
  title: '2 - месяц занятий',
  img: "2.jpg"
} , 
{
  title: '3 - месяц занятий',
  img: "3.jpg"
} , 
{
  title: '4 - месяц занятий',
  img: "4.jpg"
}  , 
{
  title: '5 - месяц занятий',
  img: "5.jpg"
}   

]


// boot up demo
new Vue({
  el: '#demo',
  data: {
    items: items
  }
})


// boot up demo
new Vue({
  el: '#example-2',
  data: {
    active: '',
  activeButton: null
  } , 
  // определяйте методы в объекте `methods`
  methods: {
    makeActive: function(item, e){
      // When a model is changed, the view will be automatically updated.
      this.active = item;
      this.activeButton = e.target
    }
}
   
})

 