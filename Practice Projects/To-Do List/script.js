document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".addBtn").addEventListener('click', addTask)
    var ListItems = document.querySelectorAll("li")// selecting all li in an array form
   //loop for adding delete task div
   var i
    for(i = 0; i < ListItems.length; i++){
        var divDel = document.createElement("div")
        divDel.className = "delete"
        var cross = document.createTextNode("\u00D7")
        divDel.appendChild(cross)
        ListItems[i].appendChild(divDel)
    }
    //loop for adding tick task div
    for(i = 0; i < ListItems.length; i++){
        var divCom = document.createElement("div")
        divCom.className = "complete"
        var tick = document.createTextNode("✓")
        divCom.appendChild(tick)
        ListItems[i].appendChild(divCom)
    }
    //click on delete div to close task
    var Del = document.querySelectorAll(".delete")
    for(i = 0; i < Del.length; i++){
        Del[i].onclick = function(){
            var ele = this.parentElement
            ele.style.display = "none"
        }
    }
    //click on tick to complete task
    var Com = document.querySelectorAll(".complete")
    for(i = 0; i<Com.length; i++){
        Com[i].onclick = function(){
            var ele = this.parentElement
            ele.style.textDecoration = "line-through"
        }
    }
    function addTask(){
        var task = document.createElement("li")// ul li
        var taskName = document.querySelector(".TaskName").value//input add value
        var taskList = document.querySelector(".taskList")//ul list
            if(taskName === ''){
                alert('Please give proper Task Name')
            }
            else{
                var tn = document.createTextNode(taskName)
                task.appendChild(tn)
                taskList.appendChild(task)
                document.querySelector(".TaskName").value = '';
                // alert(document.querySelector(".TaskName").value)
                
                var divDel = document.createElement("div")
                var cross = document.createTextNode("\u00D7")
                divDel.className = "delete"
                divDel.appendChild(cross)
                task.appendChild(divDel)
    
                var divCom = document.createElement("div")
                var tick = document.createTextNode("✓")
                divCom.className = "complete"
                divCom.appendChild(tick)
                task.appendChild(divCom)
    
                var Del = document.querySelectorAll(".delete")
                for (i = 0; i < Del.length; i++) {
                    Del[i].onclick = function() {
                      var ele = this.parentElement;
                      ele.style.display = "none";
                    }
                }
    
                var Com = document.querySelectorAll(".complete")
                for (i = 0; i < Com.length; i++) {
                    Com[i].onclick = function() {
                      var ele = this.parentElement;
                      ele.style.textDecoration = "line-through";
                    }
                }
            }
    }
})
