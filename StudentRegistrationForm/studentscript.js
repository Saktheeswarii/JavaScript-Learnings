function update()
    {
        var name=document.getElementById("name")
        var age=document.getElementById("age")
        var gender=getSelectedGender()
        var course=getSelectedCourse() 
        var email=document.getElementById("email")
        var table=document.getElementById("res")
        var list=document.createElement("tr")
        list.innerHTML='<td>'+name.value+'</td>'+'<td>'+age.value+'</td>'+'<td>'+course+'</td>'+'<td>'+gender+'</td>'+'<td>'+email.value+'</td>'+'<td><button onclick="deletelist(this)">Delete</button></td>';
        table.appendChild(list)
    }
    function deletelist(row) {
            var i = row.parentNode.parentNode.rowIndex;
            document.getElementById("res").deleteRow(i);
        }
    function getSelectedGender() 
    {
        if (document.getElementById('male').checked) 
        {
        return document.getElementById('male').value; 
        } 
        else if (document.getElementById('female').checked)
        {
        return document.getElementById('female').value;
        } 
        else {
        return null; 
        }
    }
    function getSelectedCourse() 
    {
        var selectElement = document.getElementById("course");
        var selectedOption = selectElement.options[selectElement.selectedIndex];
        var selectedValue = selectedOption.value;
        console.log(selectedValue)
        return selectedValue;
    }