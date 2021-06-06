l/*et context =[]
const formElem = document.getElementById('addWorkoutForm')

formElem.addEventListener('submit', function(event){
    event.preventDefault()
})

let data = new FormData(formElem);
for(let value of data.values()){
    console.log(value)
}


    const headers = {
        'content-type': 'application/json'
    }
    const container = document.getElementById('addWeightContainer')
    fetch('/api/exercise', {method: 'GET', body, headers})
        .then(function (response){
            if(response.status < 200 || response.status >= 300)
                throw new Error(`Request failed with status ${response.status}`)
            context = response.json()
            console.log(context)
        })
})
*/
/*

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
}*/