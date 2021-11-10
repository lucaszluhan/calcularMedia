"use strict";
function calcularMedia(numbers, name, situacao) {
    var numbs = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var numb = numbers_1[_i];
        numbs += numb;
    }
    var media = numbs / numbers.length;
    console.log(name + ", sua m\u00E9dia \u00E9: " + media);
    if (situacao === true) {
        if (media >= 7) {
            console.log(name + " aprovado!");
        }
        else {
            console.log(name + " reprovado!");
        }
    }
    return media;
}
