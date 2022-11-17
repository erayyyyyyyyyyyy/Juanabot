import { Message, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } from "discord.js"
import { t } from "i18next"

export const data = {
    name: t("help.name"),
    description: t("help.description"),
    execute(interaction) {

        //Embed Modüller

        const { emoji, ws } = interaction.client
        const { locale } = interaction
        const discord_ping = ws.ping
        const bot_ping = Math.abs(Date.now() - interaction.createdTimestamp)
        const target = interaction.guild ? interaction.options.getMember("user") || interaction.member : interaction.options.getUser("user") || interaction.user
        const responseEmbed = new MessageEmbed()

        //Embed Yeri

        .setAuthor({ name: "Bot Commands" })
        .setColor("#e6f0ee")
        .setDescription(" ``My Prefix /`` ``Welcome to Juana Bot Let's See What We Can Do For You``")
        .setTimestamp()
        .setFooter({text: "Juana Bot", iconURL: interaction.client.user.displayAvatarURL() })
        .addFields(
            { name: '> <:ServerStatsReal:1038477340684075049> ***  My stats***', value: `> \`Bot Ping\` ***${bot_ping} ms***\n> \`People Using Me\` ***${interaction.client.guilds.cache.reduce((a,b)=> a + b.memberCount, 0)}***`, inline: false },
            { name: '> <:ModerationReal:1038477074916200468> *** Moderatıon***', value: '\`\`\`• Ban [ Permanently removes the person you want from the server ]\n• Unban [ Unbans the person you want ]\n• kick [ Kicks the Person You Want from the Server ]\`\`\`', inline: false },
            { name: '> <:ServerModerationReal:1038476874222940260> ***  Server Moderatıon***', value: '\`\`\`• Clear [ Deletes as many messages as you want ]\n• Avatar [ Shows Users Profile Photo ]\`\`\`', inline: false },
            { name: '> <:RealBook:1038478735827025930> *** Entertainment Commands***', value: '\`\`\`• suggestion [ We are waiting for your suggestions here ]\n• Play [ Let s See Your Favorite Music ]\`\`\`', inline: false },
        ) 
        .setImage('https://media.discordapp.net/attachments/1041031706704089191/1041032264827555971/Banner_2.jpg?width=826&height=174')

        //Baston yeri

        //Sunucu Link

        const row = new MessageActionRow()
            .setComponents(
                new MessageButton()
                    .setLabel("Support Server")
                    .setEmoji("<a:YklemeGif:1038739416040091648>")
                    .setStyle("LINK")
                    .setURL("https://discord.gg/YwM49UddEF"),  
                    new MessageButton()
                    .setLabel("İnvite")
                    .setEmoji("<a:YklemeGif:1038739416040091648>")
                    .setStyle("LINK")
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=1028274473008386121&permissions=8&scope=bot%20applications.commands"),
                    new MessageButton()
                    .setLabel("TopGG")
                    .setEmoji("<a:YklemeGif:1038739416040091648>")
                    .setStyle("LINK")
                    .setURL("https://top.gg/tr/bot/1028274473008386121"),
                                
            )

            //seçenek ekleme

            const menü = new MessageActionRow()
            .setComponents(
                new MessageSelectMenu()
                .setCustomId("test")
                .setPlaceholder("Click me!")
                .setOptions([
                    { label: "Website", value: "Shows Website", description: "Shows Website" },
                    { label: "Meme", value: "It Tells What A Meme Is", description: "It Tells What A Meme Is" },
                    { label: "Stats", value: "Shows Bot's Statistics", description: "Shows Bot's Statistics" },
                    { label: "Moderatıon", value: "Shows Bot's  Moderatıon", description: "Shows Bot's  Moderatıon" },
                    { label: "Server Moderatıon", value: "Shows Bot's  Server Moderatıon", description: "Shows Bot's  Server Moderatıon" },
                    { label: "Entertainment Commands", value: "Shows Bot's Entertainment Commands", description: "Shows Bot's Entertainment Commands" },
                ]))


        interaction.reply({ embeds: [responseEmbed], components: [row,menü] })
    }
}

//Local Bölümü

export const slash_data = {
    name: data.name,
    description: data.description,
    name_localizations: {
        tr: t("help.name", { lng: "tr" })
    },
    description_localizations: {
        tr: t("help.description", { lng: "tr" })
    },
}