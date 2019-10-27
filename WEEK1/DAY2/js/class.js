class Person {
    constructor(name='no one', age='20')
    {
        this.name = name;
        this.age = age;
        this.sex = 'male';
        this.value = undefined;
        let myFn = (result) => {
            this.value = result;
            if (this.value == 'OK') {
                console.log('创建成功');
            }
        };
      myFn(' OK');
    }
    say(result){
        console.log('my name is ' + this.name+this.value);
    }
    static move(position){
        console.log('go' + position);
    }
};
let person=function () {
  return new Person('james','35')
}();
//console.log(person);
person.say();
console.log(person.__proto__);
Person.move('北京');
//console.log(person.__proto__);
