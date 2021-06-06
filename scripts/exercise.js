let context =[]








buildTable(context)

function buildTable(data){
    let table = document.getElementById('exerciseBody')
    for(let i = 0; i < data.length; i++){
        let row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].reps}</td>
                        <td>${data[i].weight}</td>
                        <td>${data[i].unit}</td>
                        <td>${data[i].date}</td>
                   </tr>`
        table.innerHTML += row
    }
}