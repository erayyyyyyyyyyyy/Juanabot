import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js"
import { t } from "i18next"

export const data = {
    name: t("unban.name"),
    description: t("unban.description"), //al
    async execute(interaction, client) {
        const erorEmbed = new MessageEmbed()
        .setColor("#a30707")
        .setDescription(`${interaction.member} <:JuanaBotXiareti:1038744163434373173> | You do not have valid authorization to use this command.`)

        if (!interaction.member.permissions.has("BAN_MEMBERS")) {
          return interaction.reply({ embeds: [erorEmbed] }).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})
        }

        const member = interaction.options.getUser("ıd")
        const reason = interaction.options.getString("")

        const embed = new MessageEmbed()
        .setColor("#e6f0ee")
        .setDescription(`<:Verified:1038745883430363197> | ${member} Ban opened by`)
        .setThumbnail("https://cdn.discordapp.com/attachments/1028336358533628004/1036203248983490560/image4.jpg")
        await interaction.guild.members.unban(member)
        await interaction.reply({ embeds: [embed] }).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})

    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    options: [
        {
            name: "ıd",
            description: "Unbans the User You Want",
            type: 6,
            required: true
        }
    ]
}