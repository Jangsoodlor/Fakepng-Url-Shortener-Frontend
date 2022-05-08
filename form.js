function submitForm() {
    
    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;
    const time = document.getElementById('time').value;
    const password = document.getElementById('password').value;
    console.log(name, url, time, password);

    if (time === '') {
        window.open(`https://short.fakepng.com/create?name=${name}&link=${url}&password=${password}/`, '_blank');
    }

    else if (time !== ''){
        window.open(`https://short.fakepng.com/create?name=${name}&link=${url}&time=${time}&password=${password}/`, '_blank');
    }
    
}

