window.addEventListener('DOMContentLoaded', main);
function main() {

    boto.addEventListener('click', traspas);


}
function traspas() {
    let anyMin = parseInt(document.getElementById('camp1').value);
    let anyMax = parseInt(document.getElementById('camp2').value);

    let anyAct = anyMin;
    let anysTraspas = '';
    let trobat = 0;
    while (anyAct <= anyMax) {
        if ((anyAct % 4 == 0) && !(anyAct % 100 == 0) || (anyAct % 400 == 0)) {
            anysTraspas += anyAct + ",";
            trobat = 1
        }
        anyAct++;

    }
    if (trobat) {
        alert(anysTraspas)
    } else {
        alert("no hi han anys de traspas");
    }

}