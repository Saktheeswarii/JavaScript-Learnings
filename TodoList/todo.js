function add()
{
    var ul=document.getElementById("ulist")
    var input=document.getElementById("input")
    var list=document.createElement("li")
    list.innerHTML=input.value+"<button onclick='deletee(event)'>Delete</button>"
    input.value=""
    ul.append(list)
}
function deletee(event)
{
    event.target.parentElement.remove()
}

