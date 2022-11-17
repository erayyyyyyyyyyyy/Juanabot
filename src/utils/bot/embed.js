import { MessageEmbed } from "discord.js"

export default (description, color = "#e6f0ee", title = "") => {

    if (color == "RED") color = "#e6f0ee"
    else if (color == "GREEN") color = "#e6f0ee"
    else if (color == "INFO") color = "#e6f0ee"

    const response = new MessageEmbed()
        .setDescription(description)
        .setColor(color)
        .setTitle(title)

    return response
}