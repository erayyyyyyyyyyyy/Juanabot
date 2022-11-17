import cooldown_control from "../utils/cooldown_control.js"
import auto_complete from "../utils/event-utils/auto_complete.js"
import modal_submit from "../utils/event-utils/modal_submit.js"
import { t } from "i18next"
import { MessageAttachment, MessageEmbed } from "discord.js"
export default client => {

    const { embed } = client
    client.on("interactionCreate", async interaction => {

        if (interaction.isAutocomplete()) auto_complete(interaction)
        else if (interaction.isModalSubmit()) modal_submit(interaction)

        else if (interaction.customId === "test") {
            let choice = interaction.values;
            if (choice == "Shows Website") {
                const Aembed = new MessageEmbed()
                .setTitle("<a:903679353517379714:1038479486292856903> Our Website Coming Soon <a:903679353517379714:1038479486292856903>")
                .setColor("#000000")
                .setTimestamp()
                .setDescription("`` Soon ``");
                return interaction.reply({ embeds: [Aembed]})
}
            if (choice == "It Tells What A Meme Is") {
                const Vembed = new MessageEmbed()
                .setTitle("<:image:1041082690599932044> | What is Meme")
                .setColor("#2ea32a")
                .setTimestamp()
                .setDescription("``Internet memes can be any phenomenon available to spread on the Internet. Any link, website, image, text or phrase can become a meme. In fact, we can call many things we see on social media memes.``");
                return interaction.reply({ embeds: [Vembed]})

            }if (choice == "Shows Bot's Statistics") {
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
            }
            if (choice == "Shows Bot's  Moderatıon") {
                const Membed = new MessageEmbed()
                .setTitle("Juana Moderatıon")
                .setColor("#e6f0ee")
                .setTimestamp()
                .addFields(
                    {name: "<:ModerationReal:1038477074916200468> Moderatıon Command", value: "\`\`\`• Ban [ Permanently removes the person you want from the server ]\n• Unban [ Unbans the person you want ]\n• kick [ Kicks the Person You Want from the Server ]\`\`\`", inlnie: false}
                )
                return interaction.reply({ embeds: [Membed]})
            }
            if (choice == "Shows Bot's  Server Moderatıon") {
                const Sembed = new MessageEmbed()
                .setTitle("Juana Server Moderatıon")
                .setColor("#e6f0ee")
                .setTimestamp()
                .addFields(
                    {name: "<:ServerModerationReal:1038476874222940260> Server Moderatıon", value: "\`\`\`• Clear [ Deletes as many messages as you want ]\n• Avatar [ Shows Users Profile Photo ]\`\`\`", inline: false}
                )
                return interaction.reply({ embeds: [Sembed]})
            }
            if (choice == "Shows Bot's Entertainment Commands") {
                const Kembed = new MessageEmbed()
                .setTitle("Juana Entertainment Commands")
                .setColor("#e6f0ee")
                .setTimestamp()
                .addFields(
                    {name: "<:RealBook:1038478735827025930> Entertainment Commands", value: "\`\`\`• suggestion [ We are waiting for your suggestions here ]\n• Play [ Let s See Your Favorite Music ]\`\`\`", inline: false}
                )
                return interaction.reply({ embeds: [Kembed]})
            }
        }

        else if (!interaction.isApplicationCommand()) return

        const command = client.commands.get(interaction.commandName)
        if (!command) return

        // Cooldown Control
        const cooldown = cooldown_control(command, interaction.user.id)
        if (cooldown) return interaction.reply({
            embeds: [
                embed(t("cooldown_error", { ns: "common", lng: interaction.locale, cooldown }), "RED")
            ]
        }).then(() => { setTimeout(() => { interaction.deleteReply() }, 5000)})

        // Execute Command
        try {
            command.data.execute(interaction)
        } catch (e) {
            interaction.reply({ embeds: [embed(t("unexpected_error", { ns: "common", lng: interaction.locale }), "RED")] })
            console.log(e)
        }
       
        
    })


}