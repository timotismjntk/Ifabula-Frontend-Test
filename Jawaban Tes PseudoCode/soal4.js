/*
    4. Buatlah tampilan terbilang dari variable x yang berupa 4 digit angka ( lebih besar dari 2000 ) :
    Contoh : 2234 = Dua Ribu Dua Ratus Tiga Puluh Empat
    8500 = Delapan Ribu Lima Ratus
    7001 = Tujuh Ribu Satu
*/

const showTerbilang = (x) => {
    x = Number(x);
    if (typeof x !== 'number') {
        return 'input bukan angka';
    } else {
        if (x < 2000) {
            return x;
        } else if (x <= 9999) {
            // 4 digit angka
            const listAngka = String(x).split('');
            if (listAngka.length === 4) {
                return listAngka?.map((item, index) => {
                    let angkaTerbilang = '';
                    const angka = Number(item);
                    switch(angka) {
                        case(1):{
                            angkaTerbilang = 'Satu'
                            break;
                        }
                        case(2):{
                            angkaTerbilang = 'Dua'
                            break;
                        }
                        case(3):{
                            angkaTerbilang = 'Tiga'
                            break;
                        }
                        case(4):{
                            angkaTerbilang = 'Empat'
                            break;
                        }
                        case(5):{
                            angkaTerbilang = 'Lima'
                            break;
                        }
                        case(6):{
                            angkaTerbilang = 'Enam'
                            break;
                        }
                        case(7):{
                            angkaTerbilang = 'Tujuh'
                            break;
                        }
                        case(8):{
                            angkaTerbilang = 'Delapan'
                            break;
                        }
                        case(9):{
                            angkaTerbilang = 'Sembilan'
                            break;
                        }
                        default: {
                            angkaTerbilang = ''
                            break;
                        }
                    }
                    if (index === 0) {
                        if (angka === 1) {
                            return 'Se'.concat('ribu')
                        } else {
                            return angkaTerbilang ? angkaTerbilang.concat(' Ribu') : ''
                        }
                    } else if (index === 1) {
                        if (angka === 1) {
                            return 'Se'.concat('ratus')
                        } else {
                            return angkaTerbilang ? angkaTerbilang.concat(' Ratus') : ''
                        }
                    } else if (index === 2) {
                        if (angka === 1) {
                            return 'Se'.concat('puluh')
                        } else {
                            return angkaTerbilang ? angkaTerbilang.concat(' Puluh') : ''
                        }
                    } else {
                        return angkaTerbilang;
                    }
                }).join(' ');
            } else {
                return x;
            }
        } else {
            return x;
        }
    }
}

console.log(showTerbilang(2234));