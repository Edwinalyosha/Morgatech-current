const hide=document.querySelectorAll(".serv-drop");
window.onload=()=>{
    hide.forEach((el)=>el.classList.add("test"));
    
}

Object.keys(hide).forEach(key=>{
    
})

function expandList() {
    document.querySelector('.list-container').classList.add('expanded');
}

function collapseList() {
    document.querySelector('.list-container').classList.remove('expanded');
}
