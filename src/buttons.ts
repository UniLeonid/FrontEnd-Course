let lastOpen: string | null = null;

let container: HTMLElement | null = document.getElementById('portfolio-container');

let elements: HTMLCollectionOf<HTMLAnchorElement> = document.getElementsByTagName('a');

for (let element of elements) {
    if (element.href) {
        element.tabIndex = -1;
    }
}

function initButton(id: string, height: number) {
    let button: HTMLElement | null = document.getElementById(id + '-button');
    if (!button) {
        return;
    }

    button.addEventListener('click', () => {
        for (let block of document.getElementsByClassName('information-block')) {
            if (block instanceof HTMLElement) {
                block.style.display = 'none';
            }
        }

        let block: HTMLElement | null = document.getElementById(id + '-block');
        if (block) {
            block.style.display = '';
        }

        if (lastOpen) {
            let lastButton: HTMLElement | null = document.getElementById(lastOpen + '-button');
            if (lastButton) {
                lastButton.classList.remove('selected-button');
            }
        }

        if (lastOpen !== id) {
            lastOpen = id;
            if (container) {
                container.style.height = height + 'px';
            }

            button.classList.add('selected-button');
        } else {
            lastOpen = null;
            if (container) {
                container.style.height = '120px';
            }
        }
    });
}

initButton('bio', 288)
initButton('projects', 185)
initButton('libraries', 250)
initButton('contacts', 200)
