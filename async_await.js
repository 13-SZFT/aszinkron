let beolvas = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        const result = await data.json();
        let tartalom = document.getElementById('tartalom');
        for (let i = 0; i < 20; i++) {
            let kep = document.createElement('img');
            kep.setAttribute('src', result[i].url);
            tartalom.appendChild(kep);
        }
    } catch (error) {
        console.log(error.message);
    }
};

beolvas();

// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => response.json())
//     .then(data => {
//         let tartalom = document.getElementById('tartalom');
//         for (let i = 0; i < 20; i++) {
//             let kep = document.createElement('img');
//             kep.setAttribute('src', data[i].url);
//             tartalom.appendChild(kep);
//         }
//     });