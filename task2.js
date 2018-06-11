var str = String(process.argv[2]); /*Строка на входе*/
var k = Number(process.argv[3]); /*Ключ, величина сдвига на входе*/
var n = str.length; /*Длина строки*/
var p = 26; /*Мощность алфавита*/
var low_border_capital_letters = 65; /*Нижняя граница ASCII кода заглавных английских букв*/
var high_border_capital_letters = 90; /*Верхняя граница ASCII кода заглавных английских букв*/
var low_border_lowercase_letters = 97; /*Нижняя граница ASCII кода строчных английских букв*/
var high_border_lowercase_letters = 122; /*Верхняя граница ASCII кода строчных английских букв*/
var letter, symbol, offset; /*Буква из введённой строки, ASCII код введённой буквы, ASCII код смещённой буквы*/
for (var i = 0; i < n; i++) {
    letter = str[i];
    symbol = letter.charCodeAt(0); /*Преобразуем букву в ASCII код*/
    offset = symbol + k; /*Находим ASCII код смещённой буквы*/
    if (symbol >= low_border_lowercase_letters && symbol <= high_border_lowercase_letters) {
        if (offset > high_border_lowercase_letters) {
            offset = offset - p;
        }
        process.stdout.write(String.fromCharCode(offset));
    } else if (symbol >= low_border_capital_letters && symbol <= high_border_capital_letters) {
        if (offset > high_border_capital_letters) {
            offset = offset - p;
        }
        process.stdout.write(String.fromCharCode(offset));
    }
    else {
        process.stdout.write(letter);
    }
}