const fs = require('fs');
let express = require('express');
let filemerge = express.Router()



// Gobal vaiables ( Practical Inputs)
//Directory Name of the  JSON files
directory = 'app/data'
dir = '../data'
//File Base Name of the JSON files
fileBaseName = "data"

//Outout Name of the JSON Files
fileOutputName = "merge"

//Maximum file size the merged files can Reach
maxFileSize = 500
let newObj = {}

let datamerge = () => {
    let j = 1
    fs.readdir(directory, (error, files) => {
        if (files.length > 0) {
            for (i = 1, quit = 0; i < files.length + 1 && quit == 0; i++) {
                let fileData
                fileData = require(`${dir}/${fileBaseName}${i}.json`)
                newObj = mapping(newObj, fileData)
                let fileDataKeys = Object.keys(newObj)
                fileDataKeys.forEach(key => {
                    if (fileData[key]) {
                        fileData[key].forEach(element => {
                            newObj[key].push(element)
                        })
                    }
                })
                let outPutfile = "merge" + j
                fs.writeFile(`app/merge/${outPutfile}.json`, JSON.stringify(newObj), (err) => {
                    if (!err) {
                        fs.stat(`app/merge/${outPutfile}.json`, (err, stats) => {
                           if(stats.size < maxFileSize){
                               console.log(stats.size)
                               console.log(`The input files are large to merge than the max file size`)
                               quit = 1
                           }else{
                               console.log(`The input files are successfully merged`)
                           }
                        })
                    }
                })
            }
        }
    });
}


let mapping = (main, data) => {
    Object.keys(data).forEach((key) => {
        if (!main[key]) {
            main[key] = [];
        }
    });
    return main;
}

filemerge = datamerge()

module.exports = filemerge