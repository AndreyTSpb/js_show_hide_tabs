# js_show_hide_tabs
JS Function. Show and Hide tabs (div) , when push on menu (other div).


This function hide all tabs with class name given variable "tabs".

"menu" - this variable is wrapper for buttons menu of tabs, and it takes a wrapper class name 

"menuItems" - this variable takes all menu items with a class equal to "menu-item"

```js 
  func(menu, menuItems, tabs){
    ...code
  }
```

```html
  <div class="menu">
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>
  </div>
  <div>
    <div class="tabs">Tabs1</div>
    <div class="tabs">Tabs2</div>
    <div class="tabs">Tabs3</div>
  </div>
 ```
 
 ```css
  .hide{
    display: none;
  }
  .show {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
```

Hide all tabs except the first
```js
  AddHide(1);
```

Clicking on the menu will open the desired tab
```js
  info.addEventListener('click', function(event){
        let target = event.target;
        //проверка действительно ли это меню табов
        if(target && target.classList.contains('info-header-tab')){
            //перебираем все табы и сравниваем с нажатым
            for(let i = 0; i < tab.length; i++){
                //если совпало то скрыть все, но открыть нажатый
                if(target == tab[i]){
                    AddHide(0);
                    AddShow(i);
                }
            }
        }
    });
```
