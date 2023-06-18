const button = document.querySelector('.button--js');
const list = document.querySelector('.list--js');

console.log(button);
console.log(list);

let numbers;
let check = true;

function generate() {
    numbers = [];
    list.innerHTML = '';
    for(let i=0;i<6;i++){
        do{
            check = true;
            numbers.push(Math.floor(Math.random()*49)+1);
            for(let j=0; j<i; j++){
                if(numbers[i] == numbers[j]){
                    console.log('wylosowano tę samą liczbę!');
                    numbers.pop();
                    check = false;
                }
            }
        }while(!check);

        list.innerHTML += 
        `<li>
            ${numbers[i]}
        </li>
        `
    }

    console.log(numbers);
}

button.addEventListener('click',generate);