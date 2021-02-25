document.querySelector('#grandparent').addEventListener('click', () => {
    console.log('grand Parent');
},true);

document.querySelector('#parent').addEventListener('click', () => {
    console.log('Parent');
},true);

document.querySelector('#child').addEventListener('click', (e) => {
    console.log('child');
    //e.stopPropagation(); // only if we are using event bubling 
},true);



// for bubling pass last parameter as false(default) and for capturing pass true
/*
<div id="grandparent">
  <div id="parent">
    <div id="child">
      
    </div>
  </div>
</div>

div{
  min-width:100px;
  min-height:100px;
  padding:30px;
  border:1px solid black;
}

*/

// live example https://jsfiddle.net/wf7vp6yL/14/