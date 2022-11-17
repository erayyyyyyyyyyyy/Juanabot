import suggestion from "../modals/suggestion.js"

export default interaction => {

    if (interaction.customId == "suggestion") suggestion(interaction)

}