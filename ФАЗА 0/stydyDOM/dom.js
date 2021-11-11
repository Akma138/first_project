// создать элемент div
const div =document.createElement('div'); 
console.log(div); 
// добавить к нему класс wrapper
div.classList.add("wrapper")
// поместить его внутрь тэга body 
const body =document.body;
body.appendChild(div); 

// создать заголовок H! "DOM"
const header = document.createElement('h1');
header.textContent = "DOM"
console.log(header); 
// добавить H! перед DIV со классом wrapper
div.insertAdjacentElement('beforebegin', header); 
// создать список <ul></ul>
// добавить в него 3 элемента с текстом "один, два, три"
const ul = `
  <ul>
    <li>one</li>
    <li>one</li>
    <li>one</li>
  </ul>

`;

// поместить список внутрь элемента с классом wrapper
div.innerHTML = ul; 
// создать изображение
const img=document.createElement('img')
// добавить следующие свойства и изображения 
// 1. добавить атрибут source 
img.src = 'pickture.png'; 
// 2.добавить атрибут width 240
img.width =240; 
// 3. добавить class super
img.classList.add('super'); 
// 4. добавить свойство alt со значением super man
img.alt = 'super man'; 
// поместить изображение внутрь элемента с классом wrapper 
div.appendChild(img); 
// 
// 
console.log(img)
//используя html строку создать див с классом 'pDiv' + с 2 параграфами 
const elemHTML = `
<div class='pDiv'>
  <p>paragraph1</p>
  <p>paragraph2</p>
</div>`
// 
// поместить этот div до элементов <ul>
const ullist = div.querySelector('ul');
ullist.insertAdjacentHTML("beforebegin", elemHTML)
// добавить для 2-го параграфа класс текст
const pDiv = document.querySelector('.pDiv'); 
pDiv.children[1].classList.add('text'); 

// удалить 1 параграф
pDiv.firstElementChild.remove(); 
// создать функцию generateAutoCard
// которая принимает 3 аргумента brand color year 
const generateAutoCard = (brand, color, year) => {
  const curDate = new Date();
  const curYear = curDate.getFullYear(); 
  return `
      <div class ="autoCard">
        <h2>${brand} ${year}</h2>
        <p>автомобиль ${brand} - ${year} года. Возраст авто - ${curYear - year} лет</p> 
        <p>Цвет: ${color}</p>
        <button type='button' class='btn'>удалить</button>

</div>
  `;
}

// функция должна возвращать разметку html;


// <h2>BRAND YEAR</h2>
//<p>автомобиль BRAND-YEAR ГОДА. возраст авто - years лет </p>
//</div>
//создать новый div с классом autos
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos'); 
//создать 3 карточки авто, используя функцию generateAutoCard 
 const carList = [
  {brand: 'Tesla', year: 2015, color: 'red'},
  {brand: 'Lexus', year: 2016, color: 'silver'},
  {brand: 'Nissan', year: 2012, color: 'black'},
]

const carsHTML = carList.map(car => {
  return generateAutoCard(car.brand, car.color, car.year); 
}).join(''); 


// поместить эти 3 карточки внутрь дива с классом autos
carsDiv.innerHTML= carsHTML; 
console.log(carsDiv); 
// поместить div с классом autos на страницу ДОМ до дива class wripper 
div.insertAdjacentElement('beforebegin', carsDiv); 

// добавить кнопку удалить на каждую карточку авто
// при клике на кнопку - удалить карточку из структуры дом
// 1 выбрать все кнопки
const buttons = document.querySelectorAll('.btn');
console.log(buttons); 

// создать функцию УДАЛЕНИЯ!
function handleClick(e) {
  const currentButton =e.currentTarget; 
 // currentButton.closest('.autoCard').remove(); 
// currentButton.parrentElement.remove(); осторожно! все удаляет 
// console.log(currentButton.parrentElement); 
}
//  использовать цикл чтобы повесить обработчик событий на каждую кнопку  
buttons.forEach(button =>  {
  button.addEventListener('click', handleClick)
})
