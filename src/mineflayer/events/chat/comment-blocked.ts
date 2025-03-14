import winston from 'winston';
import emojis from '@util/emojis';

export default {
    name: 'chat:commentBlocked',
    runOnce: false,
    run: async (bridge, comment: string, reason: string) => {
        winston.warn(`Comment blocked by Hypixel: ${comment} (${reason})`);
        await bridge.discord.send(
            'oc',
            `${emojis.alert} "${comment}" was blocked by Hypixel because **${reason}**. Developers will not take responsibility for banned accounts.`
        );
    },
} as BotEvent;
