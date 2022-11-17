import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js"
import { t } from "i18next"

export const data = {
    name: t("ban.name"),
    description: t("ban.description"),
      async execute(interaction, client) {
        const erorEmbed = new MessageEmbed()
        .setColor("#a30707")
        .setDescription(`${interaction.member} <:JuanaBotXiareti:1038744163434373173> | You do not have valid authorization to use this command`)
        if (!interaction.member.permissions.has("BAN_MEMBERS")) {
          return interaction.reply({ embeds: [erorEmbed] }).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})
        }

        const member = interaction.options.getMentionable("user")
        const reason = interaction.options.getString("")

        if (member.id === interaction.user.id) {

          const embed = new MessageEmbed()
        .setColor("#a30707")
        .setDescription(`<:JuanaBotXiareti:1038744163434373173> |  You Can't Ban Yourself`)

          return interaction.reply({ embeds: [embed]}).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})
        }
        
        if (member.id === interaction.client.user.id) {
          const embed = new MessageEmbed()
          .setColor("#a30707")
          .setDescription(`<:JuanaBotXiareti:1038744163434373173> |  Bot can't ban itself`)

          return interaction.reply({ embeds: [embed]}).then(() => { setTimeout(() =>  { interaction.deleteReply()}, 5000)})
        }

        if (member.roles && interaction.member.roles.highest.position <= member.roles.highest.position) {

          const embed = new MessageEmbed()
          .setColor("#a30707")
          .setDescription(`<:JuanaBotXiareti:1038744163434373173> |  The person you are trying to ban has the same or more authority as you.`)

          return interaction.reply({ embeds: [embed]}).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})
        }

        await member.ban({ reason: `Banned by ${interaction.member.user.name}`})
        const embed = new MessageEmbed()
        .setColor("#e6f0ee")
        .setDescription(`<:Verified:1038745883430363197> | ${member} Banned`)

        return interaction.reply({ embeds: [embed]}).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})
                }
              };
    


//Local Bölümü

export const slash_data = {
    name: data.name,
    description: data.description,
    options: [
        {
            name: "user",
            description: "Bans the user you specify",
            type: 9,
            required: true,
            min_value: 1,
            max_value: 100
        }
    ]
}