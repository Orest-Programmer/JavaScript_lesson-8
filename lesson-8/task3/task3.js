"use stric"

universityBtn.onclick = function(){
    let element = document.getElementById('ul');
    if(element.className == 'ul-disable'){
        element.classList.remove('ul-disable');
        element.classList.add('ul-active');
    }else {
        element.classList.remove('ul-active');
        element.classList.add('ul-disable');
    }
}