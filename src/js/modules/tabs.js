const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);


        function hideContnet() {
            content.forEach((item) => {
                item.style.display = 'none';
            });

            tab.forEach((item) => {
                item.classList.remove(activeClass)
            });
        }

        function showContent(i = 0) {
            tab[i].classList.add(activeClass);
            content[i].style.display = 'block';
        }

        header.addEventListener('click', (event) => {
            if (event.target.classList.contains(tabSelector.replace(/\./, '')) || event.target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, index) => {
                    if (item == event.target || item == event.target.parentNode) {
                        hideContnet();
                        showContent(index);
                    }
                })
            }
        })
}

export default tabs;