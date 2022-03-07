
increaseVisitors();
updateVisitors();
setInterval(updateVisitors,5000);

function increaseVisitors() {
    fetch("https://elszhifa7c.execute-api.eu-west-1.amazonaws.com/cvstage/increase",{ 
        method:"POST",
        body:JSON.stringify({'id':1}),
        headers : {
            "Content-Type": "application/json",
        }
    })
}

function updateVisitors() {
    fetch("https://elszhifa7c.execute-api.eu-west-1.amazonaws.com/cvstage/get",{
        method:"POST",
        body:JSON.stringify({'id':1}),
        headers : {
            "Content-Type": "application/json",
        }
    }).then(function(response) {
        data = response.json().then(data => {
            console.log(data)
            document.getElementById('visitors').innerHTML = `Toplam Ziyaretçi Sayısı :<div>${data['count']}</div>`;
        })    
    })
}

