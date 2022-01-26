module.exports = {
    callback: (message, ...args) => {
        console.log(args)
        if (message.content === '.mrs') {
            message.reply('pong')
        }
    }
}