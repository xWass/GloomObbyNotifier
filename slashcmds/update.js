const { SlashCommandBuilder } = require("@discordjs/builders");
const { exec, execSync } = require("child_process");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update the bot."),
    
    async execute(interaction) {
        if (interaction.user.id !== "928624781731983380") return;
        await interaction.deferReply();
        await exec("git pull", (error, stdout) => {
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

        exec("pm2 restart 2", (error, stdout) => {});
    },
};
