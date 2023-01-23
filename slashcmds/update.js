const { SlashCommandBuilder } = require("@discordjs/builders");
const { exec, execSync } = require("child_process");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update the bot."),

    async execute(interaction) {
        if (interaction.user.id !== "928624781731983380") return;
        await interaction.deferReply();
        await exec("git pull", async (error, stdout) => {
            await interaction.followUp({
                embeds: [
                    {
                        title: "Updating",
                        description: `Status: \`\`\`${stdout}\`\`\` \nRestarting...`,
                    },
                ],
                ephemeral: false,
            });
        });

        exec("pm2 restart 2", (error, stdout) => {});
    },
};
