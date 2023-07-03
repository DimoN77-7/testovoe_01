const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i=0

//Добавляем событие на кнопку
btn.addEventListener('click', (e) => {
    // console.log(input.value);
    // result.innerHTML += `<li>${input.value}</li>`
    if(input.value === ' ') return;
    createDeleteElements(input.value);
    input.value = '';
    
})
//создание и удаление  todo
function createDeleteElements(value) {
    // console.log(value);
    i++;
    const li = document.createElement('li') ;
    const btn = document.createElement('button');
    
    li.className = 'li';
    li.textContent = value;

    btn.className = 'btn';
    btn.textContent = 'X';
    li.appendChild(btn);

    //удаляем todo
    btn.addEventListener('click', (e)=> {
        i--;
        total.textContent = i;
        // console.log(li);
        //Удаляем дочерний узел
        result.removeChild(li)
    });
    // Переключаем активный класс 
    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active');         
    });

    total.textContent = i;
    result.appendChild(li);
}