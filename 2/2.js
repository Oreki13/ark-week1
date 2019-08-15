var data= [9,1,5,2];
function menambah(num){
    let total = 0;
    for(let i = 0; i < num.length; i ++){
        total += data[i];
    }
    return total;
}

console.log(menambah(data));