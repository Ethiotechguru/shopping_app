class Food{
  constructor(){
    this.food = ['one','two', 'three', 'four'];
  }
  addMoreFood(item){
    if(Array.isArray(item)){
      this.food.push(...item)
    }else{
      this.food.push(item);
    }
    console.log(this.food);
  }
}
let newItem = new Food();

newItem.addMoreFood(['enjera', 'dabo', 'sambusa'])
