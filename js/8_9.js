//!Функція в JavaScript — це блок коду, який можна викликати для виконання певного завдання.
//!Функції дозволяють повторно використовувати код, організовувати його та робити його більш читабельним та зрозумілим.

//?Іменована функція — це функція, яка має ім'я. Її можна викликати як за допомогою імені, так і через змінну.
//?Іменовані функції підлягають підняттю (hoisting), що означає, що їх можна викликати до оголошення в коді.
//варіант1
function greet() {
  return console.log("Привіт!");
}
greet(); // Виведе "Привіт!"
function match(a, b) {
  return a * b;
}
function match1(a, b) {
  const dobutok = a * b;
  return dobutok;
}
console.log(match(1, 2));
console.log(match1(1, 2));
function hi(name) {
  console.log("Привіт " + name);
}
hi("Марк");
hi("Максим");
const kit = match(2, 2);
console.log(kit);
const Any = hi("Any");
console.log(Any);
const dod = (a, b) => a + b;
console.log(dod(5, 9));
////*варіант2
//greet(); // Виведе "Привіт!"

//function greet() {
//    console.log("Привіт!");
//}

//?Анонімна функція
//?Анонімна функція — це функція, яка не має імені і зазвичай присвоюється змінній або використовується як аргумент іншої функції.

//const greet = function() {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"

//?Стрілкова функція
//?Стрілкова функція (arrow function) — це новий синтаксис для оголошення функцій, введений в ECMAScript 6 (ES6).
//?Стрілкові функції мають коротший синтаксис і не мають власного значення this, arguments, super та new.target.

//const greet = () => {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"
//const day=(d)=>{
//    return console.log(`Сьогодні ${d} `)
//}
//day("Четверг")
//const match = (x,y)=>{
//    c = x*y-y+2*x;
//    return testFunction (c)
//}
//const testFunction = (c)=>{
//    c = c**2
//    return console.log(`Результат обчислень ${c}`)
//}
//match(3,4)
//!Проект
//?У вас є початковий стейт.Реалізуйте:
//*фільтр за типом продуктів
//* Підрахунок цін обраного типу продуктів
const state = [
  {
    name: "Хліб",
    price: 20,
    description: "Свіжий пшеничний хліб",
    type: "Випічка",
  },
  {
    name: "Молоко",
    price: 25,
    description: "Свіже коров'яче молоко",
    type: "Молочні продукти",
  },
  {
    name: "Сир",
    price: 150,
    description: "Твердий сир з натурального молока",
    type: "Молочні продукти",
  },
  {
    name: "Масло",
    price: 80,
    description: "Вершкове масло",
    type: "Молочні продукти",
  },
  {
    name: "Яйця",
    price: 30,
    description: "Свіжі курячі яйця, 10 шт",
    type: "Молочні продукти",
  },
  {
    name: "Курка",
    price: 120,
    description: "Ціла курка, охолоджена",
    type: "М'ясо",
  },
  {
    name: "Яблука",
    price: 40,
    description: "Свіжі червоні яблука",
    type: "Фрукти",
  },
  { name: "Банани", price: 50, description: "Свіжі банани", type: "Фрукти" },
  {
    name: "Апельсини",
    price: 60,
    description: "Свіжі апельсини",
    type: "Фрукти",
  },
  {
    name: "Картопля",
    price: 15,
    description: "Молода картопля",
    type: "Овочі",
  },
  { name: "Морква", price: 18, description: "Свіжа морква", type: "Овочі" },
  {
    name: "Помідори",
    price: 45,
    description: "Свіжі червоні помідори",
    type: "Овочі",
  },
  {
    name: "Огірки",
    price: 35,
    description: "Свіжі зелені огірки",
    type: "Овочі",
  },
  { name: "Цибуля", price: 10, description: "Ріпчаста цибуля", type: "Овочі" },
  { name: "Часник", price: 20, description: "Свіжий часник", type: "Овочі" },
  {
    name: "Борошно",
    price: 25,
    description: "Пшеничне борошно, 1 кг",
    type: "Сухі продукти",
  },
  {
    name: "Цукор",
    price: 30,
    description: "Білий цукор, 1 кг",
    type: "Сухі продукти",
  },
];
const objProduct = {
  open: document.getElementsByClassName("open")[0],
  filter(nameProduct) {
    let sumProduct = 0;
    for (let i = 0; i < state.length; i++) {
      if (state[i].type === nameProduct) {
        console.log(`
                    Назва -${state[i].name}.
                    Опис -${state[i].description}.
                    Тип -${state[i].type}.`);
        sumProduct += state[i].price;
      }
    }
    console.log(
      "Загальна Сума:" + sumProduct + "грн. Вид товару:" + nameProduct
    );
  },
  newPriceProduct(NewPrice, nameProduct) {
    for (let i = 0; i < state.length; i++) {
      if (state[i].name === nameProduct) {
        state[i].price = NewPrice;
        console.log(state[i]);
      }
    }
  },
  render() {
    console.log(this.open);
    this.open.addEventListener("click", () => {
      console.log(1);
      this.filter("Фрукти");
      this.newPriceProduct(100, "Курка");
    });
  },
};
objProduct.render();

//?Самостійне завдання
//* Написати функцію, яка приймає рядок і повертає повідомлення про те, чи є довжина рядка меншою, більшою чи рівною 10 символам.
function sum(a, b) {
  let s = 0;
  for (let i = a; i < b + 1; i++) {
    s += i;
  }
  return console.log(s);
}
sum(0, 10);

function stingLenth(string) {
  if (string.length < 10) {
    console.log("довжина рядка меньше 10 символів");
  }

  if (string.length === 10) {
    console.log("довжина рядка рівна 10 симовлам");
  }

  console.log("довжина рядка більше 10 символів");
}
//* Написати функцію, яка приймає номер місяця (1-12) і повертає номер кварталу (1-4)

function kvartal(number) {
  console.log(Math.ceil(number / 3));
}
//* Написати функцію, яка приймає число і повертає повідомлення про те, чи є це число позитивним, негативним чи нульовим.

function positive(number) {
  if (number < 0) {
    console.log("число є негативним");
  }

  if (number === 0) {
    console.log("число є нульовим");
  }

  if (number > 0) {
    console.log("число є позитивним");
  }
}
//* Написати функцію, яка приймає число і повертає повідомлення про те, чи входить це число в один з заданих діапазонів: [0-10], [11-20], [21-30], чи ні.

function expo(number) {
  if (number >= 0 && number <= 10) {
    console.log("число належить до проміжку 0-10");
  }
  if (number >= 11 && number <= 20) {
    console.log("число належить до проміжку 11-20");
  }
  if (number >= 21 && number <= 30) {
    console.log("число належить до проміжку 21-30");
  }
  if (number > 30 || number < 0) {
    console.log("число не входить до жодного проміжку");
  }
}
//* Створіть функцію, яка обчислює площу трикутника за трьома сторонами, введеними користувачем.

function squere(a, b, c) {
  const per = (a + b + c) / 2;
  const squere = Math.sqrt(per * (per - a) * (per - b) * (per - c));

  console.log(squere);
}
//*Створіть функцію,для пошук мінімального значення в масиві чисел.
const arr = [2, 3, 4, 5, 1];

function min(arr) {
  const min = Math.min(arr);
  console.log(min);
}
//*Створіть функцію, для пошук всіх індексів елементу в масиві.

const array = [2, 3, 4, 5, 1, 5, 3, 3, 3, 2];

function indexes(arr, element) {
  const indexes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      indexes.push(i);
    }
  }

  console.log(indexes);
}
