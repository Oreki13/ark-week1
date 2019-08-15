var a = [[3,4],
         [1,2]
         ]

var b = [[7,5],
         [6,4]
         ]
        
    
// console.log(b[0].length);
matrix(a,b)
function matrix(math1, math2){
    if(math1.length !== math2.length || math1[0].length !== math2[0].length){
        console.log("ERORR") 
    } else{
        
        var hasil = []


        for(let i = 0; i < math1.length; i++){

            var baris = []
            for(let j = 0; j < math2[0].length; j++){
                
                var tmp = 0

                for(let k = 0; k < math1.length; k++){

                    tmp = tmp + math1[i][k] * math2[k][j] 

                    // tmp = tmp + math1[j][k] * math2[k][i] 
                    
                    // hasil[i][j]= math1[k][j] * math2[k][j]
                }
                baris.push(tmp)
            }
            hasil.push(baris)
        }
        console.log(hasil);
    }
}
    

