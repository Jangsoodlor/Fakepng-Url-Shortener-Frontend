const createLink = (link, name) => {
    fetch(link);
    changeText(name);
};

const deleteLinkAKtion = (deleteLink, deleteName) => {
    fetch(deleteLink);
    confirmText(deleteName);
}

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

function deleteForm(){
    const deleteName = document.getElementById('name').value;
    const deletePassword = document.getElementById('password').value;

    const deleteLink = `https://short.fakepng.com/remove?name=${deleteName}&password=${deletePassword}`
    deleteLinkAKtion(deleteLink, deleteName);
}

function viewForm(){
    const viewPassword = document.getElementById('password').value;
    viewUrl(viewPassword);
}

const changeText = (name) => {
    document.getElementById('thomas').innerHTML = `<a href=https://short.fakepng.com/${name}>Click here to open your link </a>`;
}

const confirmText = (deleteName) => {
    document.getElementById('thomas').innerHTML = `${deleteName} is deleted`;
}

const viewUrl = (viewPassword) => {
    window.open(`https://short.fakepng.com/list?password=${viewPassword}`, "_blank");
}