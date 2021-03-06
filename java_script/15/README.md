## <font color="red">Новые методы массивов ES6+</font>

Для начала условимся, что все методы кроме <b>reduce</b> принимают на вход функцию, которая имеет возможность принимать 3 аргумента,`function(el,i,arr)`, где <b>el</b> - текущий элемент при переборе. <b>i</b> - его индекс, <b>arr</b> - исходный массив.
Эта функция перебирает один за одним элементы массива и выполняет операцию, которую вы зададите. Ниже вы увидите как это происходит на практике.

<font color="red">!Про стрелочные функции</font>, которые используются в этом шаге, вы можете узнать в этом уроке.

#### Метод every

Метод массивов `every(fn)` можно использовать для организации проверки всех их элементов с использованием некоего условия. Если все элементы массива соответствуют условию, функция возвратит `true`, в противном случае она возвратит `false`.

Этому методу передаётся функция, котороя может принимать текущее значение, индекс и сам массив. Для удобства используем стрелочную функцию:

```js
let arr = [0,1,2,3,4,5];

//Проверим все ли элементы меньше 10

var allLessThenTen = arr.every( el => el < 10);//true

//Используем возможность передать индекс
//и проверим равно ли значение своему индексу

arr.every( (el,index) => el === index );//true
```

Так же мы могли записать функцию отдельно и  вставить её аргументов для every():

```js
var test = el => el<10; arr.every(test);
```

Так разумно поступать, когда ровно такую же функцию нужно использовать для проверки несколько раз.

### Метод some

Этот метод похож на `every()`, только возвращает `true` когда хотя бы один элемент в массиве удовлетворяет условию, в противном случае `false`

#### Метод forEach

Метод просто перебирает все элементы в массиве, принимая в качестве аргумента функцию с теми же аргументами, что и прошлые две, при этом ничего не возвращает. `arr.forEach((elem,index,arr)=>{...ваш код})`

Рассмотрим пример:

```js
let arr = ['Dmitry','Levanov', 22];

arr.forEach(function(el,i){
  i++;
  console.log(i+": "+el);
});
//Вывод
1: Dmitry
2: Levanov
3: 22
```

#### Метод map

Метод массивов `map()` позволяет перебирать массивы, применяя к каждому их элементу функцию, преобразующую элемент, и создавать из полученных значений новые массивы.

Например, мы хотим получить новый массив, элементы которого будут равны элементам исходного массива во второй степени:

```js
let nums = [1,2,3,4,5];

let squareNums = nums.map( n => n*n);//[1,4,9,16,25]
```

#### Метод filter

Метод `filter()` похож на метод `map()`, но он позволяет создавать новые массивы, содержащие лишь те элементы исходных массивов, которые удовлетворяют условию, задаваемому передаваемой методу `filter()` функцией. Это часто используемый и полезный метод.

Например, сформируем массив из чётных чисел:

```js
let arr = [100,101,200,213,300,399];

let resArr = arr.filter( el => el%2==0);//[100,200,300]
```

#### Метод reduce

Итак, в начале статьи было отмечено, что reduce отличается от других методов, рассмотрим чем же.
Сам метод принимает 2 аргумента : `arr.reduce(callback, initialValue);`

* `callback` - это функция, которую вам предстоит написать.
* `initialValue`- это значение, которое будет начальным результатом функции.

Аргументы функции `callback(accumulator, currentItem, currentIndex, arr)`:

* `accumulator` – последний результат вызова функции, он же «промежуточный результат».
* `currentItem` – текущий элемент массива, элементы перебираются по очереди слева-направо.
* `currentIndex` – номер текущего элемента.
* `arr` – обрабатываемый массив.

Узнаем произведение всех элементов массива:

```js
const composition = [1,2,3,4,5].reduce((acc,curItem,curIndex)=>{
  console.log(curIndex+": "+curItem + ", currentValue: "+acc);
  return acc*curItem;
},1);

//Вывод
0: 1, currentValue: 1// (здесь начальное значение 1,которое мы задали после функции,
//умножается на первый элемент равный 1.

1: 2, currentValue: 1
2: 3, currentValue: 2
3: 4, currentValue: 6
4: 5, currentValue: 24

//А результат, то есть итоговое значение acc, будет записан в composition
console.log(composition);//120
```

#### ES7 Метод includes 

В ES7 появился метод `includes()`, который позволяет проверить наличие некоего элемента в массиве. Он возвращает `true` или `false`, найдя или не найдя интересующий программиста элемент.

С помощью этого метода можно проверять на наличие некоего элемента не весь массив, а лишь некоторую его часть, начинающуюся с заданного при вызове этого метода индекса. Индекс задаётся с помощью второго, необязательного, параметра этого метода.

```js
var arr = ['string',1,2,3,4];
arr.includes(2,1);//true (проверяем есть ли в массиве 2, начиная с элемента с индексом 1)
```

#### Метод find/findIndex

Метод `find` выполняет поиск по массиву с использованием передаваемой ему функции. Если функция возвращает `true`, метод возвращает значение первого найденного элемента. Если элемент найти не удаётся, функция возвратит `undefined`.

Метод `findIndex` возвращает индекс найденного элемента, иначе `undefined`.

```js
var arr = [100,200,300];

arr.find(x => x===100);//100
arr.findIndex(x => x===200);//1
```

_*в [ ] указываются необязательные параметры._

#### Метод flat([depth=1])

Метод `flat` создает новый массив из элементов вложенных массивов, проще говоря он схлопывает уровни вложенности до указанного в аргументе `depth`, который по умолчанию равен 1.

Пример:

```js
let arr = [ [1,2], [3,4], [5,6] ];

let flatArr = arr.flat();// [1,2,3,4,5,6]
```

Возьмем с большей вложенностью: 

```js
let arr = [ [[1],[2]], [[3],[4]], [[5],[6]] ];

let flatArr = arr.flat(2);//[1,2,3,4,5,6];
```

А чтобы схлопнуть все уровни,  которые могут быть :

```js
arr.flat(Infinity)
```

#### Метод flatMap( function callback( currentValue [, indx [, arr] ]) [,thisArg] )

Этот метод эквивалентен вызову `map()` функции, за которым следует вызов `flat(1)`.

Аргументы:

* `callback` - Функция, которая создает элемент нового массива, в свою очередь имеет 3 аргумента:
- `currentValue` - текущий перебираемый элемент исходного массива
- `index` - индекс текущего перебираемого элемента
- `arr` - массив, на котором вызвана map
* `thisArg` - Значение, которое callback будет использовать как `this` 

Традиционно рассмотрим сначала простой пример: 
 
```js
//Для начала совсем бессмысленный пример:
//Мы имеем массив с массивами внутри, в которых пусть будет условная сумма чего-то, а нам нужен одномерный массив с этими суммами в квадрате.

[ [1] , [2] ].flatMap(el => el*el); // [ 1 , 4];

//А теперь представим, что массив ниже - это массив координат в виде [x,y], а нам почему-то захотелось подсчитать призведение каждой пары координат.

[ [1,2], [2,3] ].flatMap( el => [ el[0]*el[1] ]); [2, 6];

//Вот здесь уже можно запутаться, но вспомим что flatMap = map(func).flat() 
//Воспользуемся этим равенством и представим эту работу "под копотом":

[ [1,2], [2,3] ].map( el => [ el[0]*el[1] ]) //Здесь получим [ [2],[6] ]
.flat() //А на этой стадии [2, 6]

//Разумеется благодаря map составляющей фукции flatMap вы можете менять представление данных как вам угодно

//Еще один пример напоследок. У нас есть массив фраз, а мы хотим получить массив всех слов в этих фразах

[ "Hi bro!", "blabla 123",""].flatMap( el => el.split(' ')); //['Hi','bro!','blabla','123,'']

//Если непонятно почему так получилось, проводим мысленный эксперимент, как это сделано выше, с заменой flatMap на map().flat()
```
