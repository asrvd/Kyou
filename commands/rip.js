const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require("discord.js");
const WeebyAPI = require("weeby-js");
const weeby = new WeebyAPI(process.env.weeby_token.toString());


module.exports = {
	data: new SlashCommandBuilder()
		.setName('rip')
		.setDescription('RIP anyone OwO')
        .addUserOption(option => option.setName('user').setDescription('The user to RIP'))
        .addStringOption(option => option.setName('message').setDescription('Optional Message')),
	async execute(interaction) {
		let user = interaction.options.getUser('user');
        let message = interaction.options.getString('message');
        if (!user) {
            user = interaction.user;
        }
        if (!message) {
            message = "R.I.P";
        }
        let im = await weeby.generators.rip({ avatar: user.displayAvatarURL({format: 'png', size: 512}), username: user.username, message: message });
		return interaction.reply({files: [new MessageAttachment(im, `rip.png`)]});
	},
};