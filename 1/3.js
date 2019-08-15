var nilai2 = [1,2,2,3,9,3];

mean(nilai2)
median(nilai2)
modus(nilai2)
function mean(numbers){
    let total = 0 ;
        for(i = 0; i <numbers.length; i++){
            total += numbers[i];
         }
        var hasil = total / numbers.length;
        console.log('Hasil Mean  : '+hasil);
}

function median(numbers){
    var median = 0;
    var panjang = numbers.length;
    numbers.sort();

    if(panjang % 2 === 0){
        median = (numbers[panjang / 2 - 1] + numbers[panjang / 2]) / 2 ;
    } else{
        median = numbers[(panjang - 1) / 2];
    }
    console.log('Hasil Median: '+median);
}

function modus(arr){
    var mod= [];
    var ind = [];
    
    for(let i = 0; i < arr.length; i++){
        var searchindx = mod.indexOf(arr[i]);
        if(searchindx === -1){
            mod.push(arr[i]);
            ind.push(1);
        } else{
            ind[searchindx] +=1
        }
    }
    var bigind = Math.max(...ind);
    var playmod = [];
    for(let u = 0; u < ind.length; u++){
        if(ind[u] == bigind){
            playmod.push(mod[u]);
        }
    }
    var total = playmod.toString();
    console.log('Hasil Modus : '+total)
    
}





