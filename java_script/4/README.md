## <font color="red">Объекты</font>
Все значения, не являющиеся примитивными, являются объектами, соответственно имеют тип object

Объект хранит в себе данные в формате ключ:значение, они называются свойствами объекта. Так выглядел бы объект user

```js
var user = {
   name:'John',
   age:18,
   sayHi: function(){
     console.log('Hello');
   }
}

alert(user.name);//John
//вызов функции объекта
user.sayHi();//Hello
```

Объект может хранить как свойства примитивного типа, так и другие объекты, массивы, функции.

Существует несколько способов инициализации и создания объектов.

```js
//Создание пустого объекта:
var obj = new Object();
var obj1 = {};
```

#### Способы доступа к свойствам объекта.

```js
//object - это какой-то объект, а property - его свойство

object.property
object['property']

//Cоздадим объект person и поработаем с ним

var person = {
  info:{
    first_name:'John',
    last_name:'Doe',
    age:20
  },
  greeting:function(name){
    console.log('Hello, '+name);  
  }
}

alert(person.info.first_name); // John
person.greeting('Dmitry');//Hello, Dmitry

//Теперь добавим какое-нибудь свойство, а другое изменим.
person.info.age = 30;
console.log(person.info.age);//30

person.work = 'programming';

alert(person.work);//programming
```

Как мы видим на примере выше изменять и добавлять свойства в объект очень просто и мы легко их вызываем из программы, но как объекту, например, в функции вызвать свои свойства? 

Чтобы разобраться модифицируем функции greetingиз прошлого примера
 
```js
var person = {
  ...
  greeting:function(name){
    console.log(`Hello, ${name}! I'm ${this.info.first_name}`);  
  }

};

person.greeting('Dmitry');//Hello, Dmitry! I'm John
```

#### Обращение к свойствам объекта внутри объекта

Чтобы обратиться к свойствам или методам объекта внутри этого объекта, используется ключевое слово this. Оно означает ссылку на текущий объект. Соответственно для объекта info который находится внутри person this будет указывать на info

```js
var person = {
  info:{
    first_name:'John',
    last_name:'Doe',
    age:20,
    printAge(){
    console.log(this.age);
   },
...
}

person.info.printAge();//20
```

Для того, чтобы удалить свойство из объекта нужно воспользоваться следующей конструкцией :

`delete object.property`

#### Проверка наличия свойств в объекте

Чтобы проверить наличие какого-то свойства в объекте, применяет ключевое слово in

```js
var person= {
   name:'John',
   age:18
}

let hasAgeProp = "age" in person;//true
let hasInfoProp = "info" in person;//false
```