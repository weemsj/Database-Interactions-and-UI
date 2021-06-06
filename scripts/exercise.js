let context =[]
document.getElementById('addWorkoutForm').addEventListener('submit', function (event){
    event.preventDefault()

    const formData = event.target
    const body = JSON.stringify({
        name: formData.elements.name.value,
        reps: formData.elements.reps.value,
        weight: formData.elements.reps.value,
        date: formData.elements.date.value,
        unit: formData.element.unit.value,
    })

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