let x : number = 3;
let s : string = 'Hola';
let a : any [];

interface User{
	name : string,
	age : number,
	date : string
}

class UserAdd{
	users : User[];
	add( user : User ){
		this.users.push(user);
	}
}

const u = new UserAdd();
let user_1 : User = {
	name : 'Hunter',
	age : 30,
	date : '24/11/2016'
}
u.add(user_1);