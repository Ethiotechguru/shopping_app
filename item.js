class Item{
    constructor(){
        this.items = [];
    }
    
    addItem(name,price,category){
        this.items.push({name,price,category})
    }
    
}