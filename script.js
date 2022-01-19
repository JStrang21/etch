/*const containerDIV = document.createElement('div');
document.body.appendChild(containerDIV);
const grid = document.createElement('div');
containerDIV.appendChild(grid);*/
const container = document.createElement('div');
document.body.appendChild(container);
container.className = 'container'


genDivs(6)
function genDivs(v) {
    let e = container;
    for (i=0;i<v;i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for(x=1;x<=v;x++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerText = (i*v)+x;
            row.appendChild(cell);
        }
    e.appendChild(row);
    }
}
