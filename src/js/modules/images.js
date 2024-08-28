const image = () => {
    const works = document.querySelector('.works');

    const imgPopup = document.createElement('div');
    const imgCr = document.createElement('img');

    imgPopup.classList.add('popup');
    imgPopup.style.display = 'none';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';

    imgPopup.appendChild(imgCr);
    works.appendChild(imgPopup);

    works.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        
        if(target.classList.contains('preview')) {
            const path = target.parentNode.getAttribute('href');

            imgPopup.style.display = 'flex';
            imgCr.setAttribute('src', path);
        }
    })
}

export default image;