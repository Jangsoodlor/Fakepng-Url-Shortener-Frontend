// short url

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

const createLink = (link, name) => {
    fetch(link);
    document.getElementById('thomas').innerHTML = `<a href=https://short.fakepng.com/${name}>Click here to open your link </a>`;
    
};

// del URL

function deleteForm() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const deleteLink = `https://short.fakepng.com/remove?name=${name}&password=${password}`
    fetch(deleteLink);
    document.getElementById('thomas').innerHTML = `${name} is deleted`;
}

// view Url

function viewForm(){
    const password = document.getElementById('password').value;
    window.open(`https://short.fakepng.com/list?password=${password}`, "_blank");
}