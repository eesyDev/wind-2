const sendRequest = () => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');

    
    const postData = async (url, data) => {
       let response = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await response.data
    }
}