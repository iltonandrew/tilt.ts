import consola, { Consola } from 'consola';
import {
	Client,
	MessageEmbedOptions,
	Message,
	Intents,
	Collection,
} from 'discord.js';
import glob from 'glob';
import { promisify } from 'util';

const globPromise = promisify(glob);

class Bot extends Client {
	public logger: Consola = consola;
	public constructor() {
		super({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
	}
}
