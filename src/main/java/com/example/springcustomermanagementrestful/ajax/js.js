function showAllCustomer() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/customer",
        success: function (data) {
            console.log(data)
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content +=`
            <tr>
            <td>${data[i].id}</td>
            <td>${data[i].firstName}</td>
            <td>${data[i].lastName}</td>
            <td><button onclick="deleteCustomer(${data[i].id})">Delete</button></td>
            </tr>`
            }
            document.getElementById("list").innerHTML=content;
        },})
}
showAllCustomer();
function createNewCustomer() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let newCustomer= {
        "firstName": firstName,
        "lastName": lastName
    }
    $.ajax({
        headers :{
            'Accept': 'Application/json',
            'Content-Type': 'Application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/customer",
        data: JSON.stringify(newCustomer),
        success: showAllCustomer
    })
}

function deleteCustomer(id) {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/api/customer/${id}`,
        success: showAllCustomer
    });
}

function updateCustomer() {
    let id = document.getElementById("id").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let updateCustomer= {
        "firstName": firstName,
        "lastName": lastName
    }
    $.ajax({
        headers :{
            'Accept': 'Application/json',
            'Content-Type': 'Application/json'
        },
        type: "PUT",
        url: `http://localhost:8080/api/customer/${id}`,
        data: JSON.stringify(updateCustomer),
        success: showAllCustomer
    })

}

