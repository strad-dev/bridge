const index = require('./../index.js');
const client = index.client;
const staffChannel = index.staffChannel;

module.exports = {
    name: 'guild_unmute',
    async execute(guild_unmute_rank_staff, guild_unmute_staff, guild_unmute_rank_username, guild_unmute_username){
        if(!guild_unmute_rank_staff){var guild_unmute_rank_staff = ''}
        if(!guild_unmute_rank_username){var guild_unmute_rank_username = ''}
        client.channels.cache.get(staffChannel).send(`-----------------------------------------------------\n**${guild_unmute_rank_staff} ${guild_unmute_staff}** has unmuted **${guild_unmute_rank_username} ${guild_unmute_username}**\n-----------------------------------------------------`)
        let serverID = "522586672148381726";
        let displayNickname = guild_unmute_username;
        let serverMembers = client.guilds.cache.get(serverID).members
        let matchedMember = serverMembers.cache.find(m => m.displayName === displayNickname);
        if (!matchedMember) {return}
        if (serverMembers.get(matchedMember).roles.cache.some(role => role.id === '849100433317298207')==true) {
          serverMembers.get(matchedMember).roles.remove('849100433317298207');
        } 
    }
}