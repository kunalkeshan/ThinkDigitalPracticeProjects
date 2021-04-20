document.addEventListener('DOMContentLoaded', () => {
    var listItems = document.querySelectorAll('ul.taskList li')//all li 
    var addBtn = document.querySelector('#addBtn')
    var list = document.querySelector('ul.taskList')
    var taskName = document.querySelector('#taskName')
    var searchInp = document.getElementById('search')
    var itemArr = []
    var i
    if(!localStorage.getItem("itemArr")){
        localStorage.setItem("itemArr", JSON.stringify(itemArr))
    }
    else{
        itemArr = JSON.parse(localStorage.getItem("itemArr"))
        itemArr.forEach(listUpdate)
    }
        addBtn.addEventListener('click', addTask)
    searchInp.addEventListener('keyup', searchfn)
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
    })

    //loop add delete button to each list item
   for(i = 0; i < listItems.length; i++){
       let divDel = document.createElement('div')
       divDel.className = "del"
       let cross = document.createTextNode('\u00D7')
       divDel.appendChild(cross)
       listItems[i].appendChild(divDel)
   } 
   //loop to add complete button to each list item
   for(i = 0; i < listItems.length; i++){
       let divCom = document.createElement('div')
       divCom.className = "comp"
       let tick = document.createTextNode('✓')
       divCom.appendChild(tick)
       listItems[i].appendChild(divCom)
   }
    // //Delete item when del button is clicked
    // var Del = document.querySelectorAll('.del')
    // for(i = 0; i < Del.length; i++){
    //     Del[i].onclick = function(){
    //      var ele = this.parentElement
    //      ele.parentElement.removeChild(ele)
    //     }
    // }
    // //Stike text when comp button is clicked
    // var Com = document.querySelectorAll('.comp')
    // for(i = 0; i < Com.length; i++){
    //     Com[i].onclick = function(){
    //         var ele = this.parentElement
    //         ele.style.textDecoration = "line-through"
    //     }
    // }
    function listUpdate(newTask){
        var li = document.createElement('li')
        var task = document.createTextNode(newTask)
        li.appendChild(task)
            list.appendChild(li)
            
            document.querySelector('#taskName').value = ""

            let divDel = document.createElement('div')
            let divCom = document.createElement('div')

            divDel.className = "del"
            divCom.className = "comp"

            let cross = document.createTextNode('\u00D7')
            let tick = document.createTextNode('✓')

            divDel.appendChild(cross)
            divCom.appendChild(tick)

            li.appendChild(divDel)
            li.appendChild(divCom)

             //Delete item when del button is clicked
            var Del = document.querySelectorAll('.del')
            for(i = 0; i < Del.length; i++){
                Del[i].onclick = function(){
                    var ele = this.parentElement
                    let txt = ele.innerText
                    const arr = txt.match(/\w+|\S/g)
                    //console.log(arr)
                    arr.pop()
                    arr.pop()
                    let a = arr[0].toUpperCase()
                    for(let j=0;j<itemArr.length;j++){
                        var  text = itemArr[j]
                        if(text.toUpperCase().indexOf(a) > -1){
                            itemArr.splice(j, 1)
                            localStorage.setItem("itemArr", JSON.stringify(itemArr))
                        }
                    }
                    ele.parentElement.removeChild(ele)
                }
            }
            //Stike text when comp button is clicked
            var Com = document.querySelectorAll('.comp')
            for(i = 0; i < Com.length; i++){
                Com[i].onclick = function(){
                    var ele = this.parentElement
                    ele.style.textDecoration = "line-through"
                }
            }
    }
   //adding new task when add button is clicked
   function addTask(){
        var taskVal = taskName.value
        if(taskVal === ''){
            alert('Please give proper task name')
            return
        }
        listUpdate(taskVal)
        itemArr.push(taskVal)
        localStorage.setItem("itemArr", JSON.stringify(itemArr))
   }
   //function to search through the list items
   function searchfn(){
    var listItems = document.querySelectorAll('ul.taskList li')
       var filter, i, txtValue
       filter = searchInp.value.toUpperCase()
       for(i = 0; i < itemArr.length; i++){
           txtValue = itemArr[i]
           if(txtValue.toUpperCase().indexOf(filter) > -1){
               listItems[i].style.display = "block"
           }
           else{
               listItems[i].style.display = "none"
            }
       }
   }

})