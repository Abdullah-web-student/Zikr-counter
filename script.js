let counter = 0;
document.querySelector('.add').addEventListener('click', () => {
    counter++;
    document.querySelector('#add_n').textContent = counter;
});

document.querySelector('.minus').addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        document.querySelector('#add_n').textContent = counter;
    }
});

function abc() {
    alert("Are You Sure")
    counter = 0;
    document.querySelector('#add_n').textContent = counter;
}




