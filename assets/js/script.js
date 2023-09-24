const input_data = document.getElementById('input_data');
const show_data = document.getElementById('show_data');

const btn_normal = document.getElementsByClassName('btn-normal');
const btn_active = document.getElementsByClassName('btn-active');
function dark(){
  var dark = document.getElementById('form');
  dark.classList.remove("light");
  dark.classList.add("dark");
}
function light(){
  var dark = document.getElementById('form');
  dark.classList.remove("dark");
  dark.classList.add("light");
}
function submitData(event) {
  event.preventDefault(); 

  if (input_data.value === "") {
    var error = document.getElementById('error');
    error.style.visibility = "visible";
    //alert("Please enter the data");
  } else {
    let li = document.createElement('li');
    li.innerHTML = input_data.value;
    show_data.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    var error = document.getElementById('error');
    error.style.visibility = "hidden";
    input_data.value = ""; 
    //var scroll = document.getElementsByClassName('form');
    //scroll.style.overflow-y = "croll";
    saveData();
  }
}
show_data.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",show_data.innerHTML);
}
function showlist(){
    show_data.innerHTML = localStorage.getItem("data");
}
showlist();