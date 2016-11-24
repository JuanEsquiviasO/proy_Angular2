var x = 3;
var s = 'Hola';
var a;
var UserAdd = (function () {
    function UserAdd() {
    }
    UserAdd.prototype.add = function (user) {
        this.users.push(user);
    };
    return UserAdd;
}());
var u = new UserAdd();
var user_1 = {
    name: 'Hunter',
    age: 30,
    date: '24/11/2016'
};
u.add(user_1);
