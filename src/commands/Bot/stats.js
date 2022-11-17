import { Message, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } from "discord.js"
import { t } from "i18next"

export const data = {
    name: t("stats.name"),
    description: t("stats.description"),
    execute(interaction) {

        const { emoji, ws } = interaction.client
                const bot_ping = Math.abs(Date.now() - interaction.createdTimestamp)
                const discord_ping = ws.ping
                const Bembed = new MessageEmbed()
                .setTitle("<:ServerStatsReal:1038477340684075049> My Stats <:ServerStatsReal:1038477340684075049>")
                .setColor("#021059")
                .setTimestamp()
                .addFields(
                    { name: "``Node.js Version``", value: `***${process.version}***`, inline: false },
                    { name: "``Ping``", value: `***${discord_ping} Ms***`, inline: false },
                    { name: "``Bot Ping``", value: `***${bot_ping} Ms***`, inline: false },
                    { name: "``People Using Me``", value: `***${interaction.client.guilds.cache.reduce((a,b)=> a + b.memberCount, 0)}***`, inline: false },
                    { name: "``Ram Usage``", value: `***${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Mb***`, inline: false },
                )
                return interaction.reply({ embeds: [Bembed]})


}}

//Local Bölümü

export const slash_data = {
    name: data.name,
    description: data.description,
    name_localizations: {
        tr: t("stats.name", { lng: "tr" })
    },
    description_localizations: {
        tr: t("stats.description", { lng: "tr" })
    },
}