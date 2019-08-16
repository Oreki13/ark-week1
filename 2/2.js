function digit(str){
    return str.toString().split('')
}


function menambah(num){
    let jumlah = 0
    for(let i = 0;i < num.length;i++){
        jumlah += num[i]
    }

    let arr = digit(jumlah)
    

    do{
        let hasil = 0
        for(let j = 0;j < arr.length; j++){
            hasil += parseInt(arr[j])
            
        }
        arr = digit(hasil)

        return hasil
    }while(arr.length > 1)
   

}
console.log(menambah([2,3,4,9,1,1]))