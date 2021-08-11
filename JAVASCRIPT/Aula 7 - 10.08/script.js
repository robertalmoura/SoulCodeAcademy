

function resultado() {
    var s = ["A", "b", "B", "C", "c", "1", "2", "3"];

    document.write("Lista inicial é: ", s, "<br>")
    
    s.push("4")
    s.unshift("a")

    document.write("Lista depois da primeira alteração é: ", s, "<br>")
;

    for(i in s){
        if(i>4)
            s[i] = s[parseInt(i) + 1]
    }
    s.pop()

    document.write("Lista depois da segunda alteração é: ", s, "<br>")

    s.shift()

    document.write("Lista depois da terceira alteração é: ", s, "<br>")

    s.pop()

    document.write("Lista depois da quarta alteração é: ", s, "<br>")
}


