const fs = require("fs");
const path = require("path");

let filebeolvas = (fajl) => {
    let error = { message: "Valami hiba történt!" };
    return promise = new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, fajl), "utf-8", (err, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(error.message);
            }
        });
    });
};

filebeolvas('proba.txt')
    .then((result) => {
        console.log(result);
        return filebeolvas('proba2.txt');
    })
    .then((result) => {
        console.log(result);
        return filebeolvas('proba3.txt');
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => console.log(err));
