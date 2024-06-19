let lastOpen = null;

let container = document.getElementById('portfolio-container');

let elements = document.getElementsByTagName('a');

for (let element of elements) {
    if (element.href) {
        element.tabIndex = -1;
    }
}

function initButton(id, height) {
    let button = document.getElementById(id + '-button');
    button.addEventListener('click', () => {
        for (let block of document.getElementsByClassName('information-block')) {
            block.style.display = 'none';
        }

        let block = document.getElementById(id + '-block');
        block.style.display = null;

        if (lastOpen) {
            let lastButton = document.getElementById(lastOpen + '-button');
            lastButton.classList.remove('selected-button');
        }

        if (lastOpen !== id) {
            lastOpen = id;
            container.style.height = height + 'px';

            button.classList.add('selected-button');
        } else {
            lastOpen = null;
            container.style.height = '120px';
        }
    });
}

initButton('bio', 288)
initButton('projects', 185)
initButton('libraries', 250)
initButton('contacts', 200)
