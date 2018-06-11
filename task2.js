var str = String(process.argv[2]); //Строка на входе
var k = Number(process.argv[3]); //Ключ
var n = str.length; //Длина строки
var p = 26; //Мощность алфавита
var letter, symbol, offset; //Буква из введённой строки, 
for (var i = 0; i < n; i++) {
    letter = str[i];
    symbol = letter.charCodeAt(0); //Преобразуем символ в ASCII код 
    offset = symbol + k;
    if (symbol >= 97 && symbol <= 122) {
        if (offset > 122) {
            offset = offset - p;
        }
        process.stdout.write(String.fromCharCode(offset));
    } else if (symbol >= 65 && symbol <= 90) {
        if (offset > 90) {
            offset = offset - p;
        }
        process.stdout.write(String.fromCharCode(offset));
    }
    else {
        process.stdout.write(letter);
    }
}