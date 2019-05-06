import {Composer} from 'telegraf'
import commands from '../commands'

const composer = new Composer()

composer.command(['start', 'help'], ctx => {
  let message = 'I can help you make decisions with the following commands:\n\n'

  commands.forEach(command => {
    const {title, trigger, parameter} = command()
    message += `*${title}* – /${trigger} _${parameter || ''}_\n`
  })

  message += `\nYou can also use me inline. Just type @coinbot in any conversation!`

  ctx.reply(message, {
    parse_mode: 'Markdown'
  })
})

commands.forEach(command => 
{bot.getChatMember(message.chat.id, message.from.id).then(function(data)
 { if ((data.status == "creator") || (data.status == "administrator"))
{ const c = command()
 composer.command(c.trigger, ctx =>
 { const {text} = ctx.message const
 index = text.trim().indexOf(' ')
 const query = index > 0 ? text.substr(index + 1) : '' const {message, enabled, trigger, parameter} = command(query) let parameterMessage if (!enabled) 
{ parameterMessage = `The parameter you supplied is invalid.\n\nExample usage: /${trigger} _${parameter}_` } ctx.reply(parameterMessage || message, { parse_mode: 'Markdown' }) })	}
else{ bot.sendMessage(message.chat.id, "only admin ✔️✔️"); 		}})



export default composer.middleware()
