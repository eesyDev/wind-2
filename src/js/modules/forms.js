const forms = (data) => {
    const inpt = document.querySelectorAll('.popup_calc_content input.form-control');

    inpt.forEach((item) => {
        item.onkeydown = (event) => {
            if (isNaN(event.key) && event.key !== 'Backspace') {
                event.preventDefault();
            }
        }
    });

    const width = document.querySelectorAll('#width'),
          height = document.querySelectorAll('#height'),
          viewType = document.querySelectorAll('#view_type'),
          balconImg = document.querySelectorAll('.balcon_icons_img'),
          checkbox = document.querySelectorAll('.checkbox');


    function bindActions(event, element, key) {
        element.forEach((elem, i) => {
            elem.addEventListener(event, () => {
                switch (elem.nodeName) {
                    case 'SELECT' :
                        data[key] = elem.value
                        break;
                    case 'SPAN' :
                        data[key] = 'Тип_' + i
                        break;
                    case 'INPUT' :
                        if (elem.getAttribute('type') === 'checkbox') {
                            i === 0 ? data[key] = 'Холодное' : data[key] = 'Теплое';

                            element.forEach((chk, x) => {
                                chk.checked = false;
                                if (i == x) {
                                    chk.checked = true
                                }
                            })
                        } else {
                            data[key] = elem.value
                        }
                        break;
                }
                console.log(data)
            })
        })
    }
    bindActions('change', viewType, 'view-type');
    bindActions('input', width, 'width');
    bindActions('input', height, 'height');
    bindActions('click', balconImg, 'type');
    bindActions('change', checkbox, 'checkbox');

    // console.log(data)
}

export default forms;