class Users{
  
  constructor(){
    this.users =[];
  }
  addUser(name,age,job){
    this.users.push({name,age,job});
    console.log(this.users);
  }
}
let user = new Users();
user.addUser('sam',23,'developer');
user.addUser("mamo", 13, "driver");
user.addUser("age", 23, "sales");
user.addUser("mora", 34, "engineer");
user.addUser("tufa", 23, "tumaka");
user.addUser("dema", 23, "duma");

user.addUser('Mamo', 22, "Farmer");
