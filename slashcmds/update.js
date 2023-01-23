const { SlashCommandBuilder } = require("@discordjs/builders");
const { exec } = require("child_process");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("exec")
        .setDescription("Execute a command."),
    
    async execute(interaction) {
        if (interaction.user.id !== "928624781731983380") return;
        await interaction.deferReply();
        await execSync("git pull", (error, stdout) => {
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
                    description: stdout,
                },
            ],
            ephemeral: true,
        });

        await execSync("pm2 restart 2", (error, stdout) => {});
    },
};
