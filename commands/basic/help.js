const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('../../config.json');

const commandFolders = ['anime', 'basic', 'fun', 'moderation', 'utility', 'distube music', 'setups'];
const enabledCategories = config.excessCommands;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays a list of commands'),

    async execute(interaction) {
        if (interaction.isCommand && interaction.isCommand()) {
            const supportServerLink = "https://discord.gg/xQF9f9yUEM";
            const githubLink = "https://github.com/GlaceYT";
            const serverId = interaction.guildId;
            const serverPrefix = config.prefixes.server_specific[serverId] || config.prefixes.default;

            const createSlashCommandPages = () => {
                const pages = [
                    {
                        title: "Bot Information",
                        description: `This bot offers a comprehensive suite of commands designed to enhance your Discord server experience. It seamlessly integrates both prefix and slash commands\n\n` +
                            `**Developed By:** Vtube yt\n` +
                            `**Version:** 1.0.0\n` +
                            `**Node Version:** v20.12.2\n` +
                            `**Discord.js Version:** 14.15.3\n\n` +
                            `**Features:**\n` +
                            "- Moderation tools for managing your server\n" +
                            "- Fun commands to entertain your members\n" +
                            "- Multiple music systems for listening to music\n" +
                            "- Utility commands for various practical tasks\n" +
                            `**Usage:**\n` +
                            "Use slash commands or prefix commands to invoke bot commands.\n\n",
                        commands: [
                            "\nJoin our Discord server - [Discord](https://discord.gg/Bsz6CkfS9f)\n\n" +
                            "**Follow us on:**\n" +
                            "- My GitHub Page: [GitHub](https://github.com/Vtubejeje)\n" +
                            "- Check out My channel: [YouTube](https://www.youtube.com/@Vtubeprime)"
                        ],
                        image: "https://cdn.discordapp.com/attachments/1264507601614540882/1269557514916204595/make_a_thumbnai_44caec82-5bd5-4e8f-8ee8-faa6a05d9c9c.png?ex=66b07f12&is=66af2d92&hm=5af77b3ce85e475c3501e499131e4fca913fd09e36ded2474e9a54719ddd0c58&",
                        color: "#3498db",
                        thumbnail: "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&",
                        author: {
                            name: "MULTI-PURPOSE BOT",
                            iconURL: "https://cdn.discordapp.com/attachments/1230824451990622299/1253655046835408917/2366-discord-developers.gif?ex=6676a4be&is=6675533e&hm=0b39917ea5a274d222a001017886e3b43725191f671b34efe5349f82be57968c&",
                            url: "https://discord.gg/xQF9f9yUEM"
                        }
                    }
                ];

                const commandData = {};

                for (const folder of commandFolders) {
                    const commandFiles = fs.readdirSync(path.join(__dirname, `../../commands/${folder}`)).filter(file => file.endsWith('.js'));
                    commandData[folder] = commandFiles.map(file => {
                        const command = require(`../../commands/${folder}/${file}`);
                        return command.data.name;
                    });
                }

                for (const [category, commands] of Object.entries(commandData)) {
                    const page = {
                        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Commands`,
                        description: `**Total Commands : **${commands.length}\n` +
                            `**Usage : **Both Slashcommands and Prefix\n\n` +
                            `${category.charAt(0).toUpperCase() + category.slice(1)} related commands`,
                        commands: commands.map(command => `\`\`${command}\`\``),
                        image: "",
                        color: "#3498db",
                        thumbnail: "",
                        author: {
                            name: `${category.charAt(0).toUpperCase() + category.slice(1)} Commands`,
                            iconURL: "",
                            url: "https://discord.gg/xQF9f9yUEM"
                        }
                    };

                    switch (category) {

                        case 'basic':
                            page.image = "https://cdn.discordapp.com/attachments/1264507601614540882/1269557514916204595/make_a_thumbnai_44caec82-5bd5-4e8f-8ee8-faa6a05d9c9c.png?ex=66b07f12&is=66af2d92&hm=5af77b3ce85e475c3501e499131e4fca913fd09e36ded2474e9a54719ddd0c58&";
                            page.color = "#99ccff";
                            page.thumbnail = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            page.author.iconURL = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            break;
                        case 'fun':
                            page.image = "https://cdn.discordapp.com/attachments/1264507601614540882/1269557514916204595/make_a_thumbnai_44caec82-5bd5-4e8f-8ee8-faa6a05d9c9c.png?ex=66b07f12&is=66af2d92&hm=5af77b3ce85e475c3501e499131e4fca913fd09e36ded2474e9a54719ddd0c58&";
                            page.color = "#ffcc00";
                            page.thumbnail = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            page.author.iconURL = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            break;
                        case 'moderation':
                            page.image = "https://cdn.discordapp.com/attachments/1264507601614540882/1269557514916204595/make_a_thumbnai_44caec82-5bd5-4e8f-8ee8-faa6a05d9c9c.png?ex=66b07f12&is=66af2d92&hm=5af77b3ce85e475c3501e499131e4fca913fd09e36ded2474e9a54719ddd0c58&";
                            page.color = "#ff0000";
                            page.thumbnail = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            page.author.iconURL = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            break;
                        case 'utility':
                            page.image = "https://cdn.discordapp.com/attachments/1264507601614540882/1269557514916204595/make_a_thumbnai_44caec82-5bd5-4e8f-8ee8-faa6a05d9c9c.png?ex=66b07f12&is=66af2d92&hm=5af77b3ce85e475c3501e499131e4fca913fd09e36ded2474e9a54719ddd0c58&";
                            page.color = "#00cc99";
                            page.thumbnail = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            page.author.iconURL = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            break;
                        case 'distube music':
                            page.image = "https://cdn.discordapp.com/attachments/1264507601614540882/1269557514916204595/make_a_thumbnai_44caec82-5bd5-4e8f-8ee8-faa6a05d9c9c.png?ex=66b07f12&is=66af2d92&hm=5af77b3ce85e475c3501e499131e4fca913fd09e36ded2474e9a54719ddd0c58&";
                            page.color = "#020202";
                            page.thumbnail = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            page.author.iconURL = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            break;
                        case 'setups':
                            page.image = "https://cdn.discordapp.com/attachments/1264507601614540882/1269557514916204595/make_a_thumbnai_44caec82-5bd5-4e8f-8ee8-faa6a05d9c9c.png?ex=66b07f12&is=66af2d92&hm=5af77b3ce85e475c3501e499131e4fca913fd09e36ded2474e9a54719ddd0c58&";
                            page.color = "#ff0000";
                            page.thumbnail = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            page.author.iconURL = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            break;
                        default:
                            page.color = "#3498db"; // Set a default color if none matches
                            break;
                    }

                    pages.push(page);
                }

                return pages;
            };

            const createPrefixCommandPages = () => {
                const pages = [];

                const prefixCommands = {};

                for (const [category, isEnabled] of Object.entries(enabledCategories)) {
                    if (isEnabled) {
                        const commandFiles = fs.readdirSync(path.join(__dirname, `../../excesscommands/${category}`)).filter(file => file.endsWith('.js'));
                        prefixCommands[category] = commandFiles.map(file => {
                            const command = require(`../../excesscommands/${category}/${file}`);
                            return {
                                name: command.name,
                                description: command.description
                            };
                        });
                    }
                }

                for (const [category, commands] of Object.entries(prefixCommands)) {
                    const page = {
                        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Commands`,
                        description: `**Total Commands : **${commands.length}\n` +
                            `**Usage : **Only Prefix commands with \`${serverPrefix}\`\n\n` +
                            `${category.charAt(0).toUpperCase() + category.slice(1)} related commands`,
                        commands: commands.map(command => `\`\`${command.name}\`\``),
                        image: "",
                        color: "",
                        thumbnail: "",
                        author: {
                            name: `${category.charAt(0).toUpperCase() + category.slice(1)} Commands`,
                            iconURL: "",
                            url: "https://discord.gg/xQF9f9yUEM"
                        }
                    };

                    switch (category) {
                        case 'utility':
                            page.image = "https://cdn.discordapp.com/attachments/1264507601614540882/1269557514916204595/make_a_thumbnai_44caec82-5bd5-4e8f-8ee8-faa6a05d9c9c.png?ex=66b07f12&is=66af2d92&hm=5af77b3ce85e475c3501e499131e4fca913fd09e36ded2474e9a54719ddd0c58&";
                            page.color = "#00cc99";
                            page.thumbnail = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            page.author.iconURL = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            break;
                        case 'other':
                            page.image = "https://cdn.discordapp.com/attachments/1264507601614540882/1269557514916204595/make_a_thumbnai_44caec82-5bd5-4e8f-8ee8-faa6a05d9c9c.png?ex=66b07f12&is=66af2d92&hm=5af77b3ce85e475c3501e499131e4fca913fd09e36ded2474e9a54719ddd0c58&";
                            page.color = "#ff6600";
                            page.thumbnail = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            page.author.iconURL = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            break;
                        case 'lavalink':
                            page.image = "https://cdn.discordapp.com/attachments/1264507601614540882/1269557514916204595/make_a_thumbnai_44caec82-5bd5-4e8f-8ee8-faa6a05d9c9c.png?ex=66b07f12&is=66af2d92&hm=5af77b3ce85e475c3501e499131e4fca913fd09e36ded2474e9a54719ddd0c58&";
                            page.color = "#ffcc00";
                            page.thumbnail = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            page.author.iconURL = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            break;
                        case 'troll':
                            page.image = "https://cdn.discordapp.com/attachments/1264507601614540882/1269557514916204595/make_a_thumbnai_44caec82-5bd5-4e8f-8ee8-faa6a05d9c9c.png?ex=66b07f12&is=66af2d92&hm=5af77b3ce85e475c3501e499131e4fca913fd09e36ded2474e9a54719ddd0c58&";
                            page.color = "#cc0000";
                            page.thumbnail = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            page.author.iconURL = "https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&";
                            break;
                        default:
                            page.color = "#3498db"; // Set a default color if none matches
                            break;
                    }

                    pages.push(page);
                }

                return pages;
            };

            const slashCommandPages = createSlashCommandPages();
            const prefixCommandPages = createPrefixCommandPages();
            let currentPage = 0;
            let isPrefixHelp = false;

            const createEmbed = () => {
                const pages = isPrefixHelp ? prefixCommandPages : slashCommandPages;
                const page = pages[currentPage];
                const fieldName = page.title === "Bot Information" ? "Additional Information" : "Commands";

                // Ensure a valid color is always set
                const color = page.color || '#3498db';

                return new EmbedBuilder()
                    .setTitle(page.title)
                    .setDescription(page.description)
                    .setColor(color)
                    .setImage(page.image)
                    .setThumbnail(page.thumbnail)
                    .setAuthor({ name: page.author.name, iconURL: page.author.iconURL, url: page.author.url })
                    .addFields({ name: fieldName, value: page.commands.join(', ') });
            };

            const createActionRow = () => {
                const pages = isPrefixHelp ? prefixCommandPages : slashCommandPages;
                return new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('previous1')
                            .setLabel('Previous')
                            .setStyle(ButtonStyle.Primary)
                            .setDisabled(currentPage === 0),
                        new ButtonBuilder()
                            .setCustomId('next2')
                            .setLabel('Next')
                            .setStyle(ButtonStyle.Primary)
                            .setDisabled(currentPage === pages.length - 1),
                        new ButtonBuilder()
                            .setCustomId('prefix')
                            .setLabel(isPrefixHelp ? 'Normal Command List' : 'Excess Command List')
                            .setStyle(ButtonStyle.Secondary)
                    );
            };

            const createDropdown = () => {
                const pages = isPrefixHelp ? prefixCommandPages : slashCommandPages;
                return new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId('page-select')
                            .setPlaceholder('Select a page')
                            .addOptions(pages.map((page, index) => ({
                                label: page.title,
                                value: index.toString()
                            })))
                    );
            };

            await interaction.reply({ embeds: [createEmbed()], components: [createDropdown(), createActionRow()] });

            const collector = interaction.channel.createMessageComponentCollector({ time: 60000 });

            collector.on('collect', async (button) => {
                if (button.user.id !== interaction.user.id) return;

                if (button.isButton()) {
                    if (button.customId === 'previous1') {
                        currentPage = (currentPage - 1 + (isPrefixHelp ? prefixCommandPages : slashCommandPages).length) % (isPrefixHelp ? prefixCommandPages : slashCommandPages).length;
                    } else if (button.customId === 'next2') {
                        currentPage = (currentPage + 1) % (isPrefixHelp ? prefixCommandPages : slashCommandPages).length;
                    } else if (button.customId === 'prefix') {
                        isPrefixHelp = !isPrefixHelp;
                        currentPage = 0;
                    }
                } else if (button.isSelectMenu()) {
                    currentPage = parseInt(button.values[0]);
                }

                try {
                    await button.update({ embeds: [createEmbed()], components: [createDropdown(), createActionRow()] });
                } catch (error) {
                    console.error('Error updating the interaction:', error);
                }
            });

            collector.on('end', async () => {
                try {
                    await interaction.editReply({ components: [] });
                } catch (error) {
                    console.error('Error editing the interaction reply:', error);
                }
            });
        } else {
            const embed = new EmbedBuilder()
                .setColor('#3498db')
                .setTitle(`Click Below to run help command`)
                .addFields(
                  
                    { name: "Get Help: ", value: `</help:1264177192066089013>`, inline: false}
                 )
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        }
    }
};
