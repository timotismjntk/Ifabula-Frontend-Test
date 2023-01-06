/*
1. Tampilkan deret angka berkelipatan 5 mulai dari 50 sampai dengan 100
- Jika angka <=60 maka tampilkan tulisan “KURANG” di sebelah angka tsb.
- Jika >60 dan <=70 maka tampilkan tulisan “CUKUP” di sebelah angka tsb.
- Jika >70 dan <=80 maka tampilkan tulisan “BAIK” di sebelah angka tsb.
- Jika >80 maka tampilkan tulisan “LUAR BIASA” di sebelah angka tsb.

*/

const showKelipatan = (awal, akhir, kelipatan) => {
    if (awal > akhir) {
        return 'angka awal harus lebih kecil dari akhir'
    } else {
        const interval = (akhir - awal) / kelipatan;
        return Array.from({length: interval + 1}, (_item, index) => {
            const angka = String((index * kelipatan) + awal);
            if (Number(angka) <= 60) {
                return angka.concat(' KURANG');
            } else if (angka > 60 && angka <= 70) {
                return angka.concat(' CUKUP');
            } else if (angka > 70 && angka <= 80) {
                return angka.concat(' BAIK');
            } else if (angka > 80) {
                return angka.concat(' LUAR BIASA');
            } else {
                return angka;
            }
        }).join('\n');
    }
}

// show result
console.log(showKelipatan(50, 100, 5));