"use strict"

const fs = require("fs")
const path = require("path")
const program = require('../node_modules/commander')

Date.prototype.Format = function(fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        }
    }
    return fmt
}

function list(val) {
    return val.split(',');
}

function bool(val) {
    return val === "true" ? true : false
}
program
    .version('0.0.1')
    .usage('[options] <title>')
    .option('-t, --tags <items>', 'tags,split(\",\")', list)
    .option('-p, --permalink <url>', '(default /year/month/day/title.html)')
    .option('-H, --headerimg <url>', '(default img/post-bg-js-module.jpg)')
    .option('-P, --published <true or false>', 'publish or not', bool)
    .option('-s, --subtitle <subtitle>', 'subtitle')
    .option('-c, --category <category>', 'you can specify one or more categories that the post belongs to')
    .parse(process.argv)

const fmtData = program => {
    if (!process.argv.slice(2).length){
        program.outputHelp()
        process.exit(0)
    }
    let result = {}
    result.title = program.args[0]
    result.date = new Date().Format("yyyy-MM-dd")
    result.author = "Hsz"
    for (let option of Object.keys(program)) {
        switch (option) {
            case "tags":
                result.tags = program.tags
                break
            case "permalink":
                result.permalink = program.permalink
                break
            case "published":
                result.published = program.published
                break
            case "category":
                result.category = program.category
                break
            case "subtitle":
                result.subtitle = program.subtitle
                break
            case "headerimg":
                result.headerimg = program.headerimg
                break
            default:
                continue
        }
    }
    if(!result.headerimg){
        result.headerimg="img/post-bg-js-module.jpg"
    }
    return result
}

const fmtTitel = data => {
    let post_path = path.join(__dirname, "..", '_posts')
    return post_path + "/" + data.date + "-" + data.title + ".md"
}

const fmtContent = data => {

    let content = ""
    content += '---\n'
    content += "layout: post\n"
    for (let i of Object.keys(data)) {

        switch (i) {

            case "date":
                content += (i + ": " + data[i] + "\n")
                break
            case "headerimg":
                content += ("header-img: \"" + data[i] + "\"\n")
                break
            case "tags":
                content += (i + ": " + "\n")
                let items = data[i]
                items.map(function(x) {
                    content += ("    - " + x + "\n")
                })
                break
            default:
                content += (i + ": \"" + data[i] + "\"\n")
        }

    }
    content += "---\n"
    return content
}

const savePost = data=>{

    fs.writeFile(fmtTitel(data), fmtContent(data), (err) => {
        if (err) {
            throw err
        }
        console.log('It\'s saved!')
    })
}
savePost(fmtData(program))
