import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js"
import { t } from "i18next"

export const data = {
    name: t("avatar.name"),
    description: t("avatar.description"),
    execute(interaction) {

        const { locale } = interaction

        const target = interaction.guild ? interaction.options.getMember("user") || interaction.member : interaction.options.getUser("user") || interaction.user
        const isGif = target.displayAvatarURL({ dynamic: true }).endsWith(".gif")

        const responseEmbed = new MessageEmbed()
            .setTitle(t("avatar.user_avatar", { user: interaction.guild ? target.displayName : target.username, lng: locale }))
            .setColor("#e6f0ee")
            .setImage(target.displayAvatarURL({ size: 600 }))

        const row = new MessageActionRow()
            .setComponents(
                new MessageButton()
                    .setLabel("JPG")
                    .setEmoji("<a:903679353517379714:1038479486292856903>")
                    .setStyle("LINK")
                    .setURL(target.displayAvatarURL({ format: "jpg" })),
                new MessageButton()
                    .setLabel("PNG")
                    .setEmoji("<a:903679353517379714:1038479486292856903>")
                    .setStyle("LINK")
                    .setURL(target.displayAvatarURL({ format: "png" })),
                new MessageButton()
                    .setLabel("WEBP")
                    .setEmoji("<a:903679353517379714:1038479486292856903>")
                    .setStyle("LINK")
                    .setURL(target.displayAvatarURL({ format: "webp" })),
                new MessageButton()
                    .setLabel("GIF")
                    .setEmoji("<a:903679353517379714:1038479486292856903>")
                    .setStyle("LINK")
                    .setURL(target.displayAvatarURL({ dynamic: true }))
                    .setDisabled(!isGif)
            )

        interaction.reply({ embeds: [responseEmbed], components: [row] })
    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    name_localizations: {
        tr: t("avatar.name", { lng: "tr" })
    },
    description_localizations: {
        tr: t("avatar.description", { lng: "tr" })
    },
    options: [
        {
            name: t("avatar.user_option.name"),
            description: t("avatar.user_option.description"),
            name_localizations: {
                tr: t("avatar.user_option.name", { lng: "tr" })
            },
            description_localizations: {
                tr: t("avatar.user_option.description", { lng: "tr" })
            },
            type: 6
        }
    ],
}