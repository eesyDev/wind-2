const timer = (deadline) => {
    function getTimeRemaining(endtime) {
        const time = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor((time / 1000 / 60 / 60 / 24)),
              hours = Math.floor((time / 1000 / 60 / 60) % 24),
              minutes = Math.floor((time / 1000 / 60 ) % 60),
              seconds = Math.floor((time / 1000) % 60);

        return {
            'total' : time,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };
    function setClock(endtime) {
        const days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds');

        function updateClock() {
            const time = getTimeRemaining(endtime);
            days.innerHTML = addZero(time.days);
            hours.innerHTML = addZero(time.hours);
            minutes.innerHTML = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            if(time.total <= 0) {
                days.innerHTML = '00';
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.textContent = '00';
                clearInterval(updateClock)
            }
        }

        updateClock();
        setInterval(updateClock, 1000)
    }

    function addZero(d) {
        if(d <= 9) {
            return '0' + d
        } else {
            return d
        }
    }
    setClock(deadline);
}

export default timer;