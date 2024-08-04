const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Support server of this Bot'),
    async execute(interaction) {
        const supportServerLink = "https://discord.gg/Bsz6CkfS9f";
        const githubLink = "https://github.com/Vtubejeje";
        const youtubeLink = "https://www.youtube.com/@Vtubeprime";

        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
                name: 'Support Server',
                iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&',
                url: 'https://discord.gg/xQF9f9yUEM'
            })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1264507601614540882/1269558385745985618/standrd.gif?ex=66b07fe2&is=66af2e62&hm=4b989f69fef7605a3d64a11f36c83f822db1aa6853ad3cd0992e29f67c444fda&')
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
