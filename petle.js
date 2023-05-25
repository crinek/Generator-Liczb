let b = 1;

//pętla while
while(b<1){
    b++;
    console.log(b); 
}

//pętla do while
let a = 1

do{
a++
console.log(a);
}while(a<1);


//pętla for, oraz pętle w pętli
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        for(let k=0;k<10;k++){
            console.log(`${i}${j}${k}`)
        }
    }
}