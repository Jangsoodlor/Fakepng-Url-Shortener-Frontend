const createLink = (link, name) => {
    fetch(link);
    changeText(name);
};

function submitForm() {
    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;
    const time = document.getElementById('time').value;
    const password = document.getElementById('password').value;
    console.log(name, url, time, password);

    if (!time) {
        const link = `https://short.fakepng.com/create?name=${name}&link=${url}&password=${password}`
        createLink(link, name);
    }
    
    else {
        const link = `https://short.fakepng.com/create?name=${name}&link=${url}&time=${time}&password=${password}`
        createLink(link, name);
    }
}

const changeText = (name) => {
    document.getElementById('thomas').innerHTML = `<a href=https://short.fakepng.com/${name}>Click here to open your link </a>`;
}