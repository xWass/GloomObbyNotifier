const { SlashCommandBuilder } = require("@discordjs/builders");
const { exec, execSync } = require("child_process");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update the bot."),
    
    async execute(interaction) {
        if (interaction.user.id !== "928624781731983380") return;
        await interaction.deferReply();
        await execSync("git pull", (error, stdout) => {
            if (stdout==="Already up to date.") {
                interaction.followUp({
                    embeds: [
                        {
                            title: stdout,
                        },
                    ],
                });
                return;
            }
            interaction.followUp({
                embeds: [
                    {
                        title: "Pulled from Git",
                        description: stdout,
                    },
                ],
                ephemeral: true,
            });
        });
        await interaction.followUp({
            embeds: [
                {
                    title: "Restarting",
                },
            ],
            ephemeral: true,
        });

        await execSync("pm2 restart 2", (error, stdout) => {});
    },
};
