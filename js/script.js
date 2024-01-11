function readMore(){
    let more = document.getElementById("more");
    let btnReadMore = document.getElementById("btnReadMore");

    if(more.style.display === "inline"){
        btnReadMore.innerHTML = "Дізнатись більше";
        more.style.display="none";
    } else {
        btnReadMore.innerHTML = "Приховати";
        more.style.display="inline";
    }
}

