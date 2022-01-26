module.exports = {
    callback: (message, ...args) => {
        console.log(args)
        message.reply('Ma mrs ti')
    }
}