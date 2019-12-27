'use strict';
function func(menu, menuItems, tabs){
    let tab = document.querySelectorAll(menuItems),
        info = document.querySelector(menu),
        tabContent = document.querySelectorAll(tabs);


    function AddHide(key){
        for(let i = key; i < tabContent.length; i++){
            tabContent[i].classList.add("hide");
            tabContent[i].classList.remove("show");
        }
    }
    AddHide(1);

    function AddShow(key){
        if(tabContent[key].classList.contains('hide')){
            tabContent[key].classList.add("show");
            tabContent[key].classList.remove("hide");
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains(menuItems )){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    AddHide(0);
                    AddShow(i);
                }
            }
        }
    });
}
