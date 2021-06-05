
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
    fetch('/', {method: 'POST', body, headers})
        .then(function (response){
            if(response.status < 200 || response.status >= 300)
                throw new Error(`Request failed with status ${response.status}`)
            return response.json()
        })
        .then(function (json){
            container.innerHTML = '<b> Thank you for signing up </b>'
        })
        .catch(function (err) {
            container.innerHTML = `<b> We're sorry, we had a problem </b>`
        })
})
