const fs = require("fs");
const data = "sample.json";

function problem1() {
   

    fs.readFile(data, "utf-8", (err, file) => {
        if (err) {
            console.log(err);
        } else {
            
                const result = (JSON.parse(file))
                fs.mkdir("../debug", function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("debug directory created");
                        fs.writeFile("../debug/problem1.json", JSON.stringify(result), (err) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log("file created");
                                fs.unlink("../debug/problem1.json", function (err) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log("file deleted");
                                    }
                                })
                            }
                        })
                    }
                })

             
        }
    })



}

module.exports = problem1



