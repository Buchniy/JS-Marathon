console.log('homework-3');

const $btn = document.getElementById('btn-kick');

function  Pokemon(name) {
    console.log(this, 'this');
    this.name = name;
    this.defaultHP = 100;
    this.damageHP = 100;

}
const character = new Pokemon('Pikachu');
character.elHP = document.getElementById('health-character');
character.elProgressbar = document.getElementById('progressbar-character');
// character.damageHP = 60;

const enemy = new Pokemon('Charmander');
enemy.elHP = document.getElementById('health-enemy');
enemy.elProgressbar = document.getElementById('progressbar-enemy');
// enemy.damageHP = 90;

$btn.addEventListener('click', function () {
    console.log('kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});
function init() {
    console.log('Start game');
    renderHP(character);
    renderHP(enemy);
}
function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}
function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}
function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}
function changeHP(count, person) {
    if(person.damageHP < count){
        person.damageHP = 0;
        alert(person.name + "проиграл бой")
        $btn.disabled = true;
    }else{
        person.damageHP -= count;
    }
    renderHP(person);
}
function random(num) {
    return Math.ceil(Math.random()*num);
}
init();