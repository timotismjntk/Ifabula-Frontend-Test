/*
    2. Buatlah deret bilangan Fibonacci sebanyak 20
    0 1 1 2 3 5 8 … dan seterusnya
*/

const generateFibbonaci = (jumlah = 10) => {
    let fibbonaciList = [];
    let [start, interval] = [0, 1];

    while (fibbonaciList.length < jumlah) {
        fibbonaciList.push(start);
        [start, interval] = [interval, start + interval];
        /* misal: pada perulangan 1 atau index 0, pertama push nilai start ke array fibbonaciList,
        // [start, interval] = [interval, start + interval] // ini adalah proses assign nilai start dan interval.
         setelah itu assign nilai start dengan nilai interval(1)
         kemudian assign nilai interval dengan nilai start(0) ditambah interval(1) artinya sama dengan 0 + 1 = 1
         [start, interval] = [1, 0 + 1]
         begitu selanjutnya sampai fibbonaciList.length lebih kecil dari jumlah deret fibbonaci
        */
    }
    
    return fibbonaciList.join(' ');
}

console.log(generateFibbonaci(20));