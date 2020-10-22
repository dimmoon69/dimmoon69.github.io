## <font color="red">Вложенные циклы и управление циклами</font>
В уроке про условные конструкции, когда мы разбирали `switch..case` вы уже встретились с <b>`break`</b> и знаем, что он прерывает выполнение. Теперь рассмотрим в том числе с директивой `break` относительно циклов.

#### Прерывание цикла: break

break позволит в любой нужный нам момент выйти из цикла, например, по какому-то условию:

```js
var people = ["Tom", "Alice", "Sam", "Bob"];

for(var i = 0; i<people.length; i++){
    if(people[i] === 'Sam'){
      console.log('stop!');
      break;
   }
    console.log(i+": "+people[i]);
}

//Вывод в консоль будет таким
0: Tom
1: Alice
stop!
```

Что-то опять Сэму досталось. Вы конечно заметили, что так как цикл прервался, то в консоль не попал Bob. Это можно исправить с помощью другой директивы `continue`

#### Следующая итерация: continue

Директива `continue` прекращает выполнение текущей итерации цикла.

```js
var people = ["Tom", "Alice", "Sam", "Bob"];

for(var i = 0; i<people.length; i++){
    if(people[i] === 'Sam') continue;

    console.log(i+": "+people[i]);
}

//Вывод в консоль будет таким
0: Tom
1: Alice
3: Bob
```

## <font color="red">Вложенные циклы и применение break и continue к ним.</font>

Представим, что у нас есть такой объект:

```js
let classes = {
  classA:["Tom","Alice"],
  classB:["Sam","Bob"],
  classC:["Ron","John"]
}
```

Нам нужно найти в каком классе находится Sam и вывести эту информацию в консоль. 
Как видно на примере ниже, это можно сделать с помощью двух циклов, один будет проходиться по свойстам объекта classes, а второй вложенный будет проходиться по каждому массиву. Верхний цикл будет дожидаться выполнения внутреннего, это понятно по тому, что выводит этот код в консоль.

```js
for(let key in classes){
  console.log(key+":");
  for(let val of classes[key]){
    console.log(val);
  }
}
//Вывод
classA:
Tom
Alice
classB:
Sam
Bob
classC:
Ron
John
```

Теперь нам нужно, допустим, чтобы все циклы прекращали своё выполнение после того как мы нашли Сэма для экономии ресурсов. Для этого в JavaScript есть метки, они указывают уровень до которого нужно выйти. Разберем на практике:

```js
outer: for(let key in classes){
  console.log(key+":");
  for(let val of classes[key]){
    if(val==='Sam'){
      console.log(val +" in class "+key);
      break outer;
    }
    console.log(val);
  }
}
//Вывод
classA:
Tom
Alice
classB:
Sam in class classB
```

<b>continue</b> можно также применять с метками, но в этом случае он оборвёт выполнение внутреннего цикла и о Бобе никто не узнает.
Если мы хотели бы просто пропустить Сэма, то достаточно было просто написать <b>continue</b> без метки. Будьте внимательны с этим.

```js
for(let key in classes){
  console.log(key+":");
  for(let val of classes[key]){
    if(val==='Sam'){   
      continue;
    }
    console.log(val);
  }
}
//Вывод
classA:
Tom
Alice
classB:
Bob
classC:
Ron
John
```