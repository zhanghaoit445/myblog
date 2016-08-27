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
    .usage('<cmd> <dir> [options] ')

program
    .command('add <dir>')
    .description('add configs to a markdown file')
    .option('-t, --tags <items>', 'tags,split(\",\")', list)
    .option('-p, --permalink <url>', '(default /year/month/day/title.html)')
    .option('-H, --headerimg <url>', '(default img/post-bg-js-module.jpg)')
    .option('-P, --published <true or false>', 'publish or not', bool)
    .option('-s, --subtitle <subtitle>', 'subtitle')
    .option('-c, --category <category>', 'you can specify one or more categories that the post belongs to')
    .action(function(dir, options) {
        fs.readFile(dir, "utf-8", function(err, data) {
            if (err) {
                throw err
            }

            const fmtData = options => data => {
                let result = {}
                result.title = path.basename(dir).match(".md") === null ? path.basename(dir):path.basename(dir).replace(".md","")
                result.date = new Date().Format("yyyy-MM-dd")
                result.content = data
                result.author = "Hsz"
                for (let option of Object.keys(options)) {
                    switch (option) {
                        case "tags":
                            result.tags = options.tags
                            break
                        case "permalink":
                            result.permalink = options.permalink
                            break
                        case "published":
                            result.published = options.published
                            break
                        case "category":
                            result.category = options.category
                            break
                        case "subtitle":
                            result.subtitle = options.subtitle
                            break
                        case "headerimg":
                            result.headerimg = options.headerimg
                            break
                        default:
                            continue
                    }
                }
                if (!result.headerimg) {
                    result.headerimg = "img/post-bg-js-module.jpg"
                }
                console.log(result)
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
                      case "content":

                          break

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
                content += data.content
                return content
            }

            const savePost = data => {

                fs.writeFile(fmtTitel(data), fmtContent(data), (err) => {
                    if (err) {
                        throw err
                    }
                    console.log('It\'s saved!')
                })
            }
            console.log(data)
            savePost(fmtData(options)(data))
        })
    })

program
    .command('rm <dir>')
    .description('remove configs from a markdown file')
    .action(function(dir) {
        console.log(dir)
        fs.readFile(dir, "utf-8", function(err, data) {
            if (err) {
                throw err
            }
            const fmtTitel = dir => {
                let post_path = path.join(__dirname, "..", 'drafts')
                return post_path + "/" +path.basename(dir).replace(/(\d+-)+/,"")
            }

            const fmtContent = data => {

                return data.replace(/^---\n(.*\n)*---\n/,"")
            }
            const savePost =dir=> data => {

                fs.writeFile(fmtTitel(dir),fmtContent(data), (err) => {
                    if (err) {
                        throw err
                    }
                    console.log(fmtTitel(dir)+' is saved!')
                })
            }
            savePost(dir)(data)
        })
    })

program.parse(process.argv)
