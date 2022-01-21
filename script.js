const btn = document.querySelector('button');
btn.addEventListener('mousedown', function reload() {
    window.location.reload(true);
})
btn.addEventListener('mouseup', function input() {
    const v = prompt('Enter a number:', );
    if (v>200) {
        alert('Number is too big')
    }
    else {
        genDivs(v);
        select(v)
    }
});

const container = document.createElement('div');
document.body.appendChild(container);
container.className = 'container'

function genDivs(v) {
    let e = container;
    for (i=0;i<v;i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for(x=1;x<=v;x++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
           /* cell.innerText = (i*v)+x;*/
            row.appendChild(cell);
        }
    e.appendChild(row);
    }
}

const randomColor = () => Math.floor(Math.random()*16777215).toString(16);   /*for random color for each child*/
/*const randomColor = Math.floor(Math.random()*16777215).toString(16);*/     /*for random color for each reset*/


function select(v) {
    const cells = document.querySelectorAll('div.container>div.row>div.cell');
    let x = cells.length;
    for(i=0;i<x;i++) {
        cells[i].addEventListener('mouseover', function color() {
            this.style.backgroundColor = '#'+ randomColor(); /*using this.style instead of cells.style works!!!!*/
        })
    }
}


