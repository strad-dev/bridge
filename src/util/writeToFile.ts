import { CommandInteraction, MessageEmbed } from "discord.js";
import logError from "./logError";
import { writeFile } from "fs";

/**
 * @param path The path to the target file. Path must begin from the path root.
 * @param data The data to save.
 * @param interaction The interaction to reply to in case of failure.
 * @param successEmbed The embed to reply with if successful.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (path: string, data: any, interaction: CommandInteraction, successEmbed: MessageEmbed) => {
	writeFile(path, JSON.stringify(data), async (err) => {
		if (!err) {
			if (interaction.replied) {
				return await interaction.followUp({ embeds: [successEmbed] });
			}
			return await interaction.reply({ embeds: [successEmbed] });
		}

		logError(err, "Failed to write to file: ");
		const embed = new MessageEmbed().setColor("RED").setTitle("Error").setDescription("Failed to write to file!");

		if (interaction.replied) {
			return await interaction.followUp({ embeds: [successEmbed] });
		}
		await interaction.reply({ embeds: [embed] });
	});
};
