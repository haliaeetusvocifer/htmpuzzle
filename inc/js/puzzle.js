/**
* Function that is executed when the element is dragged. 
**/
function start(e) {
  e.dataTransfer.effecAllowed = 'move'; //Define the effect as move (It is the default)
  e.dataTransfer.setData("Text", e.target.id); // Catch the item that is going to move
  e.target.style.opacity = '0.4'; 
}

/**
* Function that is executed is finished to drag the element. 
**/
function end(e){
  e.target.style.opacity = ''; // Restore the opacity of the element     
  e.dataTransfer.clearData("Data");     
}

/**
* Function that is executed when a draggable element enters the element from which it is called.
**/
function enter(e) {
  return true;
}

/**
* Function that is executed when a draggable element is on the element from which it is called. 
* Returns false if the object can be dropped on that element and true otherwise.
**/
function over(e) {
  if ((e.target.className == "DiamondFinalPuzzle") || (e.target.id == "DiamondPuzzleInnerleft"))
    return false;
  else
  return true;
}
    
/**
*Function that is executed when a draggable element is released on the element from which it is called. 
**/
function drop(e){
  e.preventDefault(); // Prevents the default action of the dropped element from being executed.
  var elementoArrastrado = e.dataTransfer.getData("Text");
  e.target.appendChild(document.getElementById(elementoArrastrado)); // Place the element released on the element from which this function is called
  comprobarPuzzle();
}

function comprobarPuzzle(){
  if((document.getElementById('puzzle1').parentNode.id=='one') &&
    (document.getElementById('puzzle2').parentNode.id=='two') &&
    (document.getElementById('puzzle3').parentNode.id=='three') &&
    (document.getElementById('puzzle4').parentNode.id=='four')&&
    (document.getElementById('puzzle5').parentNode.id=='five')&&
    (document.getElementById('puzzle6').parentNode.id=='six'))
  {
    alert('Congratulations, you made the puzzle.');
  }
  /*else{
    alert('oops!!!, You failed. try again.');
  }*/
}

/**
* Displays a warning message if the browser does not support Drag & Drop. (In Windows neither IE nor Safari support it)
**/
function checkBrowser() {
  if( 
    (navigator.userAgent.toLowerCase().indexOf('msie ') > -1) || 
    ((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.userAgent.toLowerCase().indexOf('chrome') == -1)))
  {
    alert("Your browser does not correctly support HTML5 Drag & Drop functions. Try google chrome browser.");
  }

}