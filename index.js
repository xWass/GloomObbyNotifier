const chalk = require("chalk");
const { Client, Collection, Intents } = require("discord.js");
const intents=new Intents();
const fs = require("fs");
const cron = require("node-cron");

require("dotenv").config();

intents.add(
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.DIRECT_MESSAGES
);

const client = new Client({
    intents,
    partials: ["MESSAGE", "REACTION"],
    allowedMentions: { parse: ["users", "roles"] },
});

client.on("ready", async () => {
    client.user.setActivity("Gloom Cry :(", {type: "LISTENING"});
    
    cron.schedule(
        "55 23 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407195069554728>",
                embeds: [
                    {
                        title: "Obelisk has begun!",
                        description: `Next: Gloom <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,
                        color: "daa62a",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 0 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
                embeds: [
                    {
                        title: "Gloom has spawned!",
                        description: `Next: Nothing <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,
                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 1 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                embeds: [
                    {
                        title: "No events!",
                        description: `Next: Obelisk <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,
                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 2 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407195069554728>",
                embeds: [
                    {
                        title: "Obelisk has begun!",
                        description: `Next: Gloom <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "daa62a",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 3 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
                embeds: [
                    {
                        title: "Gloom has spawned!",
                        description: `Next: Nothing <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 4 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                embeds: [
                    {
                        title: "No events!",
                        description: `Next: Obelisk <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,
                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 5 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407195069554728>",
                embeds: [
                    {
                        title: "Obelisk has begun!",
                        description: `Next: Gloom <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "daa62a",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 6 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
                embeds: [
                    {
                        title: "Gloom has spawned!",
                        description: `Next: Nothing <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 7 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                embeds: [
                    {
                        title: "No events!",
                        description: `Next: Obelisk <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,
                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 8 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407195069554728>",
                embeds: [
                    {
                        title: "Obelisk has begun!",
                        description: `Next: Gloom <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "daa62a",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 9 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
                embeds: [
                    {
                        title: "Gloom has spawned!",
                        description: `Next: Nothing <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 10 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                embeds: [
                    {
                        title: "No events!",
                        description: `Next: Obelisk <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,
                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 11 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407195069554728>",
                embeds: [
                    {
                        title: "Obelisk has begun!",
                        description: `Next: Gloom <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "daa62a",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 12 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
                embeds: [
                    {
                        title: "Gloom has spawned!",
                        description: `Next: Nothing <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 13 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                embeds: [
                    {
                        title: "No events!",
                        description: `Next: Obelisk <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,
                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 14 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407195069554728>",
                embeds: [
                    {
                        title: "Obelisk has begun!",
                        description: `Next: Gloom <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "daa62a",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 15 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
                embeds: [
                    {
                        title: "Gloom has spawned!",
                        description: `Next: Nothing <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 16 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                embeds: [
                    {
                        title: "No events!",
                        description: `Next: Obelisk <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,
                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 17 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407195069554728>",
                embeds: [
                    {
                        title: "Obelisk has begun!",
                        description: `Next: Gloom <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "daa62a",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 18 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
                embeds: [
                    {
                        title: "Gloom has spawned!",
                        description: `Next: Nothing <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 19 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                embeds: [
                    {
                        title: "No events!",
                        description: `Next: Obelisk <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,
                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 20 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407195069554728>",
                embeds: [
                    {
                        title: "Obelisk has begun!",
                        description: `Next: Gloom <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "daa62a",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 21 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
                embeds: [
                    {
                        title: "Gloom has spawned!",
                        description: `Next: Nothing <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,

                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "55 22 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                embeds: [
                    {
                        title: "No events!",
                        description: `Next: Obelisk <t:${
                            Math.floor(Date.now() / 1000) + 3600
                        }:R>`,
                        color: "793dff",
                        footer: {
                            text: `${new Date().toUTCString()}`,
                        },
                    },
                ],
            });
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );
});
client.SlashCommands = new Collection();
const commandFiles = fs
    .readdirSync("./slashcmds")
    .filter((file) => file.endsWith(".js"));

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const commands = [];
for (const file of commandFiles) {
    const command = require(`./slashcmds/${file}`);
    commands.push(command.data.toJSON());
}
const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);
(async () => {
    try {
        console.log(
            chalk.yellowBright("Started refreshing application [/] commands.")
        );

        await rest.put(Routes.applicationCommands("1035676693123313725"), {
            body: commands,
        });
        console.log(
            chalk.greenBright("Successfully reloaded application [/] commands.")
        );
    } catch (error) {
        console.error(error);
    }
})();
client.once("ready", async () => {
    for (const file of commandFiles) {
        console.log(`${chalk.yellowBright("[SLASH COMMAND LOADED]")} ${file}`);
    }
    console.log(chalk.greenBright("Ready!"));
});
for (const file of commandFiles) {
    const command = require(`./slashcmds/${file}`);
    client.SlashCommands.set(command.data.name, command);
}

client.on("interactionCreate", async (interaction) => {
    const command = client.SlashCommands.get(interaction.commandName);
    if (!command) return;
    console.log(
        `${chalk.yellowBright(
            "[EVENT FIRED]"
        )} interactionCreate with command ${interaction.commandName}`
    );

    try {
        await command.execute(interaction, client);
    } catch (error) {
        console.error(error);
        interaction.reply({
            embeds: [
                {
                    description: `An error has occurred! Message <@928624781731983380> with this information along with what command you ran: \n\`\`\`Command: ${interaction.commandName}\nError: ${error}\`\`\``,
                },
            ],
            ephemeral: true,
        });
    }
});

client.login(process.env.TOKEN);
