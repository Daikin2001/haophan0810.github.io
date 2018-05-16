const CLICK =  document.querySelector('.click');
const DISPLAY = document.querySelector('.result');
let foods  = ['Lẩu', 'Cơm', 'Phở', 'Bánh cuốn', 'Miến trộn', 'Chè', 'Nhịn ăn', 'Cháo', 'Bánh mỳ', 'Bún đậu', 'Bún chả'];
let length = foods.length;


CLICK.addEventListener('click', () => {
    let index = Math.floor((Math.random() * length));
    DISPLAY.innerHTML= foods[index];


})