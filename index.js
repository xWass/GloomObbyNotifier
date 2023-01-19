const chalk = require("chalk");
const { Client, Collection, Intents } = require("discord.js");
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
    allowedMentions: { parse: ["users"] },
});

client.on("ready", async () => {
    client.user.setActivity("Gloom Cry :(", { type: "LISTENING" });
    cron.schedule(
        "0 0 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("12am UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 1 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("1am UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 3 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("3am UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 4 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("4am UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 6 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("6am UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 7 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("7am UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 9 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("9am UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 10 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("10am UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 12 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("12pm UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 13 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("1pm UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 15 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("3pm UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 16 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("4pm UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 18 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("6pm UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 19 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("7pm UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 21 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("9pm UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );

    cron.schedule(
        "0 22 * * *",
        () => {
            client.channels.cache
                .get("1065407247729037414")
                .send("10pm UTC message");
        },
        {
            scheduled: true,
            timezone: "UTC",
        }
    );
    console.log(chalk.greenBright("Ready!"))
});

client.login(process.env.TOKEN);
