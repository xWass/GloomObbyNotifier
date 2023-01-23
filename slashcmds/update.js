const { SlashCommandBuilder } = require("@discordjs/builders");
const { exec, execSync } = require("child_process");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update the bot."),
    
    async execute(interaction) {
        if (interaction.user.id !== "928624781731983380") return;
        await interaction.deferReply();
        exec("git pull", async (error, stdout) => {
            await interaction.followUp({
                embeds: [
                    {
                        title: "Pulled from Git",
                        description: stdout,
                    },
                ],
                ephemeral: false,
            });
        });
        await interaction.followUp({
            embeds: [
                {
                    title: "Restarting",
                },
            ],
            ephemeral: false,
        });

        exec("pm2 restart 2", (error, stdout) => {});
    },
};
