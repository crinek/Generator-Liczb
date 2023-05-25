//zmienne
//inicjowanie zmiennej
let age = 18; //zmienna let, to zmienna której można zmieniać przypisaną wartość; 
console.log(age);
age = '21'; //zmieniono przypisaną wartość oraz typ danych;
console.log(age);


const name = 'Adam'; //zmienna const, to zmienna, która ma wartość przypisaną na stałe i nie możemy jej zmienić;
console.log(name);
//name = 'Tomek'; //aby sprawdzić czy wyświetli się błąd, usuń dwa slashe na początku;
//console.log(name); //usuń dwa slashe na początku aby sprawdzić czy wyświetli się błąd;


//znaczenie wielkosci liter
const myNumber = 5;
const myNUMBER = 2;
console.log(myNumber);
console.log(myNUMBER);


//sprawdzenie typu danych
const a = 5;
const b = '5';
console.log(typeof(a)); //wyświetlając wynik zauważymy, że zmienna a to number
console.log(typeof(b)); //wyświetlając wynik zauważymy, że zmienna b to string 

//przyrównanie typu danych, a wartości
console.log(a == b); //wyświetla się true, ponieważ zarówno zmienna a jak i b, mają wartość 5;
console.log(a === b); //wyświetla się false, ponieważ zmienna a to number, a zmienna b to string;



// instrukcje warunkowe
//przykład nr 1
let x = 5;
if (x > 0) { //jeżeli pytanie w argumencie jest prawdą to wykona się instrukcja zawarta pomiędzy klamerkami;
    console.log(`zmienna x jest dodatnia i wynosi: ${x}`);
} else if (x < 0) { //jeżeli pierwszy warunek był fałszem, ale ten jest prawdą, to wyświetli się ta instrukcja;
    console.log(`zmienna x jest ujemna i wynosi ${x}`);
} else { //jeżeli ani pierwszy ani drugi warunek nie był prawdą, to wyświetli się poniższa instrukcja;
    console.log(`zmienna x jest równa zero!`);
}

//przykład nr 2
let myAge = 19;
let drivingLicence = false;
if (myAge >= 18 && drivingLicence) {
    console.log('możesz jeździć samochodem');
} else if (myAge >= 18 && !drivingLicence) {
    console.log('możesz jeździć samochodem jeżeli zrobisz prawko!');
} else {
    console.log('musisz skończyć 18 lat aby móc zrobić prawko i jeździć samochodem!');
}

//switch
let fruit = 'apple'; //w zależnosci od przypisanej wartości do zmiennej, wykona się konkretna instrukcja
switch (fruit) {
    case 'apple':
        console.log('wybrałeś jabłko');
        break;
    case 'orange':
        console.log('wybrałeś pomarańcz');
        break;
    case 'banana':
        console.log('wybrałeś banana');
        break;
    default:
        console.log('nie znam tego owocu');
        break;
}
//instrukcja prompt;
//instrukcja dzięki której możemy spytać się użytkownika o dane i przypisać je do zmiennej;

let userName = prompt('podaj swoje imię:');
alert(`Cześć ${userName}`); //instrukcja wyświetli okno aletru z przywitaniem
document.write(`Cześć ${userName}`); //instrukcja wyświetli bezpośrednio tekst przywitania w dokumencie