/*
    3. Buatlah tampilan berikut sesuai variable x :
    - Jika variable x=1 maka tampil :
    *
    - Jika variable x=2 maka tampil :
    *
    * *
    - Jika variable x=3 maka tampil :
    *
    * *
    * * *
    - … dan seterusnya
*/

const showPattern = (x = 1) => {
    var print = []
    
    for(var i = 0; i < x; i++){
        const lastPrint = print[print.length - 1];
        print.push('*'.concat(lastPrint !== undefined ? lastPrint : ''));
    }
    return print.join('\n');
};

console.log(showPattern(5));