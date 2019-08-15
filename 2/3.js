function transpose(matrix) {
    return Object.keys(matrix[0])
    .map(colNumber => matrix.map(rowNumber => rowNumber[colNumber]));
}
// console.log(transpose([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]));
var w = [[2,3,2],[2,3,4],[2,5,2]]
        
transpose(w)
function transpose(num){

  var item = num.length || 0;
  var isi = num[0] instanceof Array ? num[0].length : 0;

 
  if(isi === 0 || item === 0) { return []; }

  var item2, isi2, hasil = [];

  // Loop through every item in the outer array (height)
  for(item2=0; item2<isi; item2++) {

    // Insert a new row (array)
    hasil[item2] = [];

    // Loop through every item per item in outer array (width)
    for(isi2=0; isi2<item; isi2++) {

      // Save transposed data.
      hasil[item2][isi2] = num[isi2][item2];
    }
  }
  console.log(hasil);
  

}


// console.log(u);

