class Food{
  constructor(){
    this.food = ['one','two', 'three', 'four'];
  }
  addMoreFood(item){
    this.food.puhs(item);
    console.log(this.food);
  }
}
let newItem = new Food();
