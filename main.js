var slider_content=document.getElementById("box");
var image=['a','b'];
var i=image.length;

//function for nextslide
function nextslide(){
  if(i>image.length) {
    i=i+1;
  }else{
    i=1;
  }
  slider_content.innerHTML = "<img src="+image[i-1]+ ".jpg>";
  
} 