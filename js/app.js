var numSelected = null;
var tileSelected = null;

var errors = 0;


var board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
]

var solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
]

window.onload = function(){
  setGame();
  generateGrid();
}

function setGame(){
  for (let i = 1; i<=9; i++){

    //<div id = "i" class="number">i</div>
    let number = document.createElement("div");

    number.id = i
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("keys").appendChild(number);
  }

  for (let r = 0; r<9; r++){
    for(let c = 0; c<9; c++){
      let cell = document.createElement("div");

      cell.id = r.toString() + "-" + c.toString();

      if(board[r][c] != "-"){
        cell.innerText = board[r][c];
        cell.classList.add("cell-start");
      }
  
      if(r == 2 || r == 5){
        cell.classList.add("horizontal-line");
      }

      if(c == 2 || c == 5){
        cell.classList.add("vertical-line");
      }

      cell.addEventListener("click", selectCell)
      cell.classList.add("cells")
      document.getElementById("board").append(cell)
    }
  }
}

function selectNumber(){
  if(numSelected != null){
    numSelected.classList.remove("number-selected")
  }
  numSelected = this;
  numSelected.classList.add("number-selected")
}


function selectCell(){
  let coord = this.id.split("-");

  if(numSelected && this.innerText == ""){
    if(numSelected.id == solution[parseInt(coord[0])][parseInt(coord[1])]){
      this.innerText = numSelected.id;
      this.classList.add("cell-add");
    }
    else{
      errors++;
      let error_index = document.getElementById("errors")
      error_index.innerText  = errors.toString() + "/3";
    }
  }
}

function generateGrid(){
  let grid = [[],[],[],[],[],[],[],[],[]]
  let col = [[],[],[],[],[],[],[],[],[]]
  console.log("--------BREAK-------");
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      do{
        random = Math.floor(Math.random() * 9) +1
      }while(grid[i].indexOf(random) != -1 || col[j].indexOf(random) != -1)
      grid[i][j] = random;
      col[j][i] = random;
      // console.log(random, grid[i])
    }
    console.log(grid[i],"      " , col[0]);
  }
}

// let error_value = 0;

// function appendToDisplay(input){
//   if(error_value){
//     clearDisplay()
//     error_value = 0;
//   }
//   display.value += input;
// }

// function calculate(){
//   try{
//     display.value = eval(display.value);
//   }
//   catch (error){
//     display.value = "ERROR";
//     error_value = 1;
//   }
// }

// function clearDisplay(){
//   display.value="";
// }
