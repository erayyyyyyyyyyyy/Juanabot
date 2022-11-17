import { Emoji, MessageActionRow, MessageEmbed } from "discord.js";

export const data = {
    name: "kick",
    description: "Fires the user you specify from the server",
    async execute(interaction,client) {
        if (!interaction.member.permissions.has("KICK_MEMBERS")) {
            const embed = new MessageEmbed()
            .setColor("#a30707")
            .setDescription(`${interaction.member} <:JuanaBotXiareti:1038744163434373173> | You are not authorized to use this command`)

            return interaction.reply({ embeds: [embed]}).then(() => {setTimeout(() => { interaction.deleteReply() }, 5000)})
        }
        const member = interaction.options.getMentionable("user")
        if (member.id === interaction.user.id) {

            const embed = new MessageEmbed()
          .setColor("#a30707")
          .setDescription(`<:JuanaBotXiareti:1038744163434373173> |  You Can't Ban Yourself`)
  
            return interaction.reply({ embeds: [embed]}).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})
          }
          if (!member.bannable) {
            const embed = new MessageEmbed()
            .setColor("#a30707")
            .setDescription(`<:JuanaBotXiareti:1038744163434373173> | You can't kick this person`)

            return interaction.reply({ embeds: [embed]}).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})
          }
          if (member.roles && interaction.member.roles.highest.position < member.roles.highest.position) {
            const embed = new MessageEmbed()
            .setColor("#a30707")
            .setDescription(`<:JuanaBotXiareti:1038744163434373173> | The person you are trying to ban is more or less authorized than you.`)

            return interaction.reply({ embeds: [embed]}).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})
    }

    const embed = new MessageEmbed()
    .setColor("#e6f0ee")
    .setDescription(`<:Verified:1038745883430363197> | ${member} Kicked from Server`)
    .setThumbnail("https://cdn.discordapp.com/attachments/1027881506326196264/1036202300223520798/image2.jpg")
    await member.kick()
    await interaction.reply({ embeds: [embed] }).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})

    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    options: [
        {
            name: "user",
            description: "Kick the user you specify",
            type: 9,
            required: true,
            min_value: 1,
            max_value: 100
        }
    ]
}