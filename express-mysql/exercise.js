document.addEventListener("DOMContentLoaded", addExercise);

function addExercise(){
    document.getElementById('in-add').addEventListener('click', function (event){
        let req = new XMLHttpRequest();
        let name = document.getElementById('in-name').value;
        let reps = document.getElementById('in-reps').value;
        let weight = document.getElementById('in-weight').value;
        let date = document.getElementById('date').value;
        let unit = document.getElementById('in-unit').value;
        if(name){
            req.open('')
        }
    })
}