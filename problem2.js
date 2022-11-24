const fs = require("fs");

function problem2(){
    fs.readFile('test/lipsum .txt','utf-8',(err,data) =>{
        if (err){
            console.log(err);
        }else{
            const result = data.toUpperCase()
            const path = "../folder/"
            const uppercase = "uppercas.txt"
            fs.mkdir("../folder", function(){
                fs.appendFile(`${path}${uppercase}`,result,(err)=>{
                    if (err){
                        console.log(err);
                    }else{
                        console.log("directory created");
                        fs.appendFile("./filenames.txt",`${uppercase}`,(err)=>{
                            if (err){
                                console.log(err);
                            }
                            console.log("uppercase file created");
                        })
                        const lower = result.toLowerCase();
                        const path = "../folder/"
                        const splitted = lower.slice(0, lower.length - 1).split(".").join(`*`)
                        const lowername = "lowercase.txt"
                        fs.appendFile(`${path}${lowername}`, splitted, (err) =>{
                            if (err) {
                                console.log(err);
                            }else{
                                console.log("lowercase file created");
                                fs.appendFile("./filenames.txt", `*${lowername}`, (err) =>{
                                    if (err){
                                        console.log(err);
                                    }else{
                                        fs.readFile(`${path}${uppercase}`, "utf-8", (err, data1) =>{
                                            if (err) {
                                                console.log(err);
                                            }else{
                                                const upper = data1;
                                                    fs.readFile(`${path}${lowername}`, "utf-8", (err, data2) => {
                                                        if (err) {
                                                            console.log(err);
                                                        }else{
                                                            const lower = data2;
                                                            const sortPath = "sorted.txt"
                                                            const concatenated = data1 + data2
                                                            const final = (concatenated.split(" ").join("").split("*").join("").split("").sort().join(""));
                                                            fs.appendFile(`${path}${sortPath}`, final, (err) => {
                                                                if (err) {
                                                                    console.log(err);
                                                                }else{
                                                                    fs.appendFile("./filenames.txt", `*${sortPath}`, (err) => {
                                                                        if (err) {
                                                                            console.log(err);
                                                                        }else{
                                                                            fs.readFile("./filenames.txt", "utf-8", (err, data) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                }else{
                                                                                    const fileNames = data.split("*");

                                                                                    fileNames.map(file =>{
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

module.exports = {problem2}

