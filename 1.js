var arrayObject = [
    {
        schoolName : 'SMP 16',
        yearIn	   : 2013,
        yearOut	   : 2016
    },
    {
        schoolName : 'SMK 6',
        yearIn	   : 2016,
        yearOut	   : 2019
    }
]

let pushArray = {
schoolName : 'Institut Teknologi Sepuluh Nopember',
yearIn	   : 2019,
yearOut	   : 2024
}
hapus('SMK 6')


function show(data){
    console.log(data)
}

function add(obj){
    
    arrayObject.push(obj)
    show(arrayObject);
}

function edit(name, key, value){
    for(let i = 0;i < arrayObject.length; i++){
        if(arrayObject[i].schoolName == name){
            arrayObject[i][key] = value;
           

        }
    }
    show(arrayObject)
}

function hapus (name){
    for(let i = 0;i < arrayObject.length; i++){
        if(arrayObject[i].schoolName == name){
            delete arrayObject[i]
        }
    }
    show(arrayObject)
}

