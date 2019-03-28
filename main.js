let board = document.getElementById('board');
let chance = ['X','O'][Math.floor(Math.random()*2)];
let clearBoard = document.createElement('submit')
let isWon = false;
clearBoard.innerHTML = 'Clear'
clearBoard.className = 'btn btn-danger'
clearBoard.style = 'width:300px;margin-top:10px;';
for(let i = 1;i <= 9;i++){
    let button = document.createElement('button');
    button.className = 'btn btn-info';
    button.style = 'width:100px;height:100px;font-size:60px;'
    board.appendChild(button);
    if ((i % 3) === 0) board.appendChild(document.createElement('br'));
};
board.appendChild(clearBoard);
let buttonElements = document.getElementsByTagName('button');
clearBoard.onclick = ()=>{
    location.reload();
}
let possibleTrios = [
    [1,2,3],[4,5,6],[7,8,9],[3,6,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],
]
for (let i = 0; i < buttonElements.length; i++) {
    const element = buttonElements[i];
    element.onclick = ()=>{
        if(isWon) return;
        let trio;
        element.innerHTML = chance;
        chance = chance == 'X' ? 'O' : 'X';
        possibleTrios.forEach(Trio=>{
            let b = index=>buttonElements[Trio[index]-1].innerHTML;
            let pb = index=>buttonElements[Trio[index]-1];
            if(b(0) == b(1) && b(1) == b(2) && b(0) != '' && b(1) != '' && b(2) != ''){
                    trio = [pb(0),pb(1),pb(2)]
                    trio.forEach(box=>box.style.background = 'lime')
                    isWon = true;
            }
        })
        element.clicked = true
        element.onclick = ()=>{};
    }
}
