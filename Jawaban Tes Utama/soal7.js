/*
    Buatlah function hashing dari string berikut menggunakan sha256:
    tanggalhariini+namadepananda+pria+ifabula. Contoh : 01112018kenpriaifabula. Hasil
    hashing akan di cetak pada console log
*/
const crypto = require('crypto').webcrypto || window?.crypto;

const createHashing = async (nama_depan, jenis_kelamin) => {
    try {
        const tanggalhariini = new Date().toLocaleDateString('id', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).split('/').join('');
    
        const text = tanggalhariini + nama_depan + jenis_kelamin + 'ifabula'
    
        const textAsBuffer = new TextEncoder().encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        const digest = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return {original: text, hashingResult: digest};
    } catch (e) {}
}

createHashing('Timo', 'pria').then(res => console.log(JSON.stringify(res)))