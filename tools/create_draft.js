"use strict"

const fs = require("fs")
const path = require("path")
const program = require('../node_modules/commander')

program
    .version('0.0.1')
    .usage('<title>')
    .parse(process.argv)

const fmtData = program => {
    if (!process.argv.slice(2).length){
        program.outputHelp()
        process.exit(0)
    }
    return program.args[0]
}
const fmtTitel = data => {
    let post_path = path.join(__dirname, "..", 'drafts')
    return post_path +"/" + data + ".md"
}
const fmtContent = data => {
    return "# " + data
}

const savePost = data =>{
    fs.writeFile(fmtTitel(data), fmtContent(data), (err) => {
        if (err) {
            throw err
        }
        console.log(data+'.md is saved!')
    })
}
savePost(fmtData(program))
