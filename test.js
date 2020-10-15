function myfunction() {
  var x = document.getElementById('msg');
  x.className = "show";
  setTimeout(function(){
    x.className.replace("show", ""); }, 3000);
}