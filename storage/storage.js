const addToLocalStorage = () => {
    const idInput = document.getElementById('id');
    const valueInput = document.getElementById('value');

    const id = idInput.value;
    const value = valueInput.value;

    if(id && value){
        localStorage.setItem(id, value);

    }
    idInput.value ='';
    valueInput.value ='';
}