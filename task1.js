var summ = 0;
var power;
var n = Number(process.argv[2]);
var e = Number(process.argv[3]);
for (var i = 1; i <= n; i++) {
  power = 1;
  for (var j = 0; j < e; j++) {
    power = power * i;
  }
  summ = summ + power;
}
process.stdout.write(String(summ));