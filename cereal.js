var num = process.argv[2]

var first = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted",
"Fruit", "Honey Bunches of", "Rasin", "Shreded", "Toasted"]

var second = [" Bran", " Crunch", " Crisp", " Flakes", " Jacks",
" Krispies", " Loops", " Pebbles", " Pops", " Puffs"]

for(i=0; i<=num; i++) {
console.log(first[Math.floor(first.length*Math.random())] + second[Math.floor(second.length*Math.random())])
}
//console.log(first[Math.floor(10*Math.random())] + second[Math.floor(10*Math.random())])
