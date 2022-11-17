import register_commands from "../utils/test/register_commands.js"

export default client => {

    client.once("ready", async () => {
        console.log(`\x1b[93m${client.user.tag} \x1b[0mReady Let's Get Started -!- `);
        register_commands(client, "global")
    })
}