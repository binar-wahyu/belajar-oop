function kenalanDong(nama, umur) {
    console.log(`Halo, nama saya ${nama}`);
    console.log(`Umur saya ${umur}`);
    console.log('Saya orang Indonesia');
}

kenalanDong("Sabrina Binar", 20);
kenalanDong("Wahyu Bucil", 17);
kenalanDong("Elon Musk", 35);

function luasPersegiPanjang(panjang, lebar) {
    const hasil = panjang * lebar;
    return hasil;
}

const hitung1 = luasPersegiPanjang(20, 5);
console.log(hitung1);

const hitung2 = luasPersegiPanjang(120, 90);
console.log(hitung2);

function kelilingPersegiPanjang(panjang, lebar) {
    const hasil = 2 * (panjang + lebar);
    return hasil;
}

const hitung3 = kelilingPersegiPanjang(200, 5);
console.log(hitung3);