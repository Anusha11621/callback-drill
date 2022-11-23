const fs = require("fs");

function problem2(){
    fs.readFile("./lipsum.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
                const result = String(data.toUpperCase())
                const path = "../answers2/"
                const uppername = "uppercase.txt"
                fs.mkdir("../answers2", function () {
                    fs.appendFile(`${path}${uppername}`, result, (err) => {

                        if (err) {
                            console.log(err);
                        } else {
                            fs.appendFile("./filesnames.txt", `${uppername}`, (err) => {
                                if (err) {
                                    console.log(err);
                                }
                            })


                            const lower = `
                        *${result.toLowerCase()}`;
                            const path = "../answers2/"
                            const splitted = lower.slice(0, lower.length - 1).split(".").join(`
                        *`)
                            const lowername = "lowercase.txt"
                            fs.appendFile(`${path}${lowername}`, splitted, (err) => {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    fs.appendFile("./filesnames.txt", `*${lowername}`, (err) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                        else {
                                            fs.readFile(`${path}${uppername}`, "utf-8", (err, data1) => {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    const uppersort = data1;
                                                    fs.readFile(`${path}${lowername}`, "utf-8", (err, data2) => {
                                                        if (err) {
                                                            console.log(err);
                                                        } else {
                                                            const lowerSort = data2;
                                                            const sortPath = "sorted.txt"
                                                            const concatenated = data1 + data2
                                                            const final = (concatenated.split(" ").join("").split("*").join("").split("").sort().join(""));
                                                            fs.appendFile(`${path}${sortPath}`, final, (err) => {
                                                                if (err) {
                                                                    console.log(err);
                                                                } else {
                                                                    fs.appendFile("./filesnames.txt", `*${sortPath}`, (err) => {
                                                                        if (err) {
                                                                            console.log(err);
                                                                        }
                                                                        else {
                                                                            fs.readFile("./filesnames.txt", "utf-8", (err, data) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                } else {
                                                                                    const fileNames = data.split("*");

                                                                                    fileNames.map(file => {

                                                                                        fs.unlink(`${path}${file}`, (err) => {
                                                                                            console.log(`Deleted ${file}`);
                                                                                            if (err) {
                                                                                                console.log(err);
                                                                                            }
                                                                                        })
                                                                                    })

                                                                                }
                                                                            })
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                })
            

        }
    })

}

module.exports = problem2


