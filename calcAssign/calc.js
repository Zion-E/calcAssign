// three functions to work with
// still trying to work it out

function display(val){

    document.getElementById('result').value += val
  
    return val
  
  }
  function solve(){
  
    let x = document.getElementById('result').value
  
    let y = eval(x);
  
    document.getElementById('result').value = y
  
    return y
  
  }

  function clearScreen(){
  
    document.getElementById('result').value = ''
  
  }

  // all three functions are actively functioning