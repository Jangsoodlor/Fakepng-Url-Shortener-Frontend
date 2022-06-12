function submitForm() {
    
    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;
    const time = document.getElementById('time').value;
    const password = document.getElementById('password').value;
    console.log(name, url, time, password);

    if (!time) {
        const link = `https://short.fakepng.com/create?name=${name}&link=${url}&password=${password}`
        changeText(link);
        // window.open(link, '_blank')
    }
    
    else {
        const link = `https://short.fakepng.com/create?name=${name}&link=${url}&time=${time}&password=${password}`
        changeText(link);
        // window.open(link, '_blank');
    }
}

const changeText = (link = 'https://jangsoodlor.github.io/Fakepng-Url-Shortener-Frontend/') => {
    document.getElementById('thomas').innerHTML = `<a href=${link}>Click me</a>`;
}

