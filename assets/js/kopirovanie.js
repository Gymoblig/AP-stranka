function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    alert("Akademický mail bol skopírovaný!");
}