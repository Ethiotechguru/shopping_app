class Users{
  
  constructor(){
    this.users =[];
  }
  addUser(name,age,job){
    this.users.push({name,age,job});
    console.log(this.users);
  }
}
