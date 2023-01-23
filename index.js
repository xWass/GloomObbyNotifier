const chalk = require("chalk");
const { Client, Intents } = require("discord.js");
const intents = new Intents();
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
        "0 0 * * *",
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
        "0 1 * * *",
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
        "0 2 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
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
        "0 3 * * *",
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
        "0 4 * * *",
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
        "0 5 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
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
        "0 6 * * *",
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
        "0 7 * * *",
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
        "0 8 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
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
        "0 9 * * *",
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
        "0 10 * * *",
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
        "0 11 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
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
        "0 12 * * *",
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
        "0 13 * * *",
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
        "0 14 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
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
        "0 15 * * *",
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
        "0 16 * * *",
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
        "0 17 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
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
        "0 18 * * *",
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
        "0 19 * * *",
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
        "0 20 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
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
        "0 21 * * *",
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
        "0 22 * * *",
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
        "0 23 * * *",
        () => {
            client.channels.cache.get("1065407247729037414").send({
                content: "<@&1065407163008286740>",
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

    console.log(chalk.greenBright("Ready!"));
});

client.login(process.env.TOKEN);
