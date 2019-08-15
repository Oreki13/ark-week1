var keterangan = 'Tersedia';

const buku = [
    {
        judul:'hey',
        ket:'Tersedia'
    },
    {
        judul:"lol",
        ket:'dipinjam',
    },
    {
        judul:"kok",
        ket:"DiPinjam",
    },
    {
        judul:"Joj",
        ket:"Tersedia"
    }
];



function cari(book){
    let hasil = buku.find(res => res.judul === book);
    return hasil;
}
console.log(cari('Joj').ket);


function result(ket){
    let cek = buku.filter(ang => ang.ket === keterangan );
    return cek;
    }    

// console.log(result(keterangan));
