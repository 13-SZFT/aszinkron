let beolvas = async () => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/postse');
        const data = await result.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

let osszerak = async () => {
    try {
        let data = await beolvas();
        console.log(data);
        let tartalom = document.getElementById('tartalom');
        for (let i = 0; i < 9; i++) {
            let cim = document.createElement('h1');
            let cimSzoveg = data[i].title;
            let cimNode = document.createTextNode(cimSzoveg);
            cim.appendChild(cimNode);

            let tart = document.createElement('div');
            let tartSzoveg = data[i].body;
            let tartNode = document.createTextNode(tartSzoveg);
            tart.appendChild(tartNode);

            let tarto = document.createElement('div');
            tarto.setAttribute('class', 'container');
            tarto.appendChild(cim);
            tarto.appendChild(tart);

            tartalom.appendChild(tarto);
        }
    } catch (error) {
        console.log(error.message);
    }

};

osszerak();