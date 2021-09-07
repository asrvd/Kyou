const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const WeebyAPI = require("weeby-js");
const weeby = new WeebyAPI(process.env.weeby_token.toString());


module.exports = {
	data: new SlashCommandBuilder()
		.setName('roast')
		.setDescription('Roast anyone not really though')
		.addUserOption(option => option.setName('user').setDescription('The user to roast')),
	async execute(interaction) {
		let user = interaction.options.getUser('user');
        if (!user) {
            user = interaction.user;
        }
        const insult = await weeby.json.response("roast")
		return interaction.reply(`${user}\n${insult}`);
	},
};