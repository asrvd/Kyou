const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('user').setDescription('The user avatar to show')),
	async execute(interaction) {
		let user = interaction.options.getUser('user');
        if (user === null) {
            user = interaction.user;
        }
        const emb = new MessageEmbed()
            .setColor('#0099ff')
	        .setTitle('Avatar!')
	        .setImage(user.displayAvatarURL({format: 'png', size: 256}));
		return interaction.reply({ embeds : [emb] });
	},
};