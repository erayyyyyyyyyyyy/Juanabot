import { Message, MessageEmbed } from "discord.js"
import { t } from "i18next"

export const data = {
    name: t("clear.name"),
    description: t("clear.description"),
    execute(interaction) {

        const engelEmbed = new MessageEmbed()
        .setColor("#a30707")
        .setDescription(`${interaction.member} <:JuanaBotXiareti:1038744163434373173> | You must have \`ADMINISTRATOR\` privilege to use the command`)

        if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({ embeds: [engelEmbed]}).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})

        const { channel } = interaction
        const { embed } = interaction.client

        const deleteNumber = interaction.options.getInteger("number")
        channel.bulkDelete(deleteNumber, true)
        const Vembed = new MessageEmbed()
        .setTitle("<a:YklemeGif:1038739416040091648> Deleted <a:YklemeGif:1038739416040091648>")
        .setColor("#e6f0ee")
        .setTimestamp()
        .setDescription("``In 3 seconds the message will self-destruct...``");
        return interaction.reply({ embeds: [Vembed]}).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})
    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    default_member_permissions: 8192,
    dm_permission: false,
    name_localizations: {
        tr: t("clear.name", { lng: "tr" })
    },
    description_localizations: {
        tr: t("clear.description", { lng: "tr" })
    },
    options: [
        {
            name: t("clear.number_option.name"),
            description: t("clear.number_option.description"),
            name_localizations: {
                tr: t("clear.number_option.name", { lng: "tr" })
            },
            description_localizations: {
                tr: t("clear.number_option.description", { lng: "tr" })
            },
            type: 4,
            required: true,
            min_value: 1,
            max_value: 100
        }
    ]
}