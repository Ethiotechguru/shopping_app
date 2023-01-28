class Item{
    constructor(){
        this.items = [];
    }
    
    addItem(name,price,category){
        this.items.push({name,price,category})
    }
    
    sort(){
       return this.items.sort((a,b)=>{
            return a.price-b.price;
        })
    }
}