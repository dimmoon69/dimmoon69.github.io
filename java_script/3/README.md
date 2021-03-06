## <font color="red">Преобразование примитивных типов</font>
#### Всего есть три преобразования:

<b>1</b> Строковое преобразование.

<b>2</b> Численное преобразование.

<b>3</b> Преобразование к логическому значению.
Тут ничего сложного, думаю по примеру сразу станет всё понятно.

```js
//Number
Number('1') //1
Number(true) //1
Number(null) //0

//String
String(null) // "null"
String(100) // "100"

//Boolean
Boolean(1) //true
Boolean('') //false
Boolean(null) //false
```

Также мы знаем, что если к числу прибавить строку(случай конкатенации), то результат этой операции будет строка

`13+" друзей Оушена" = "13 друзей Оушена"`


Можно преобразовать строку или логическое значение в число одним арифметическим символом

```js
+"100" //100

+""//0

+true //1
```

Также для преобразования строчных значений в числовые используются следующие функции :

Допустим у нас есть строка `'1.625'` , у нас есть два варианта :

<b>1</b> преобразовать её в целочисленное значение (в других языках это тип integer ,сокращенно int), причем без математического округления

```js
Number.parseInt('1.625'); //1
//или просто
parseInt('1.625'); //1
```

<b>2</b> либо в число с плавающей точкой (в других языках это float)

```js
let n = Number.parseFloat('1.625'); //1.625
n = n + 0.105; //1.73
//либо аналог
parseFloat('1.73');//1.73
```