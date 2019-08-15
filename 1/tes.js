var soal = [3,5,8,5,3,3,5];

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
    console.log(playmod);
    
}
