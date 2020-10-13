import type { Client, Message } from "@open-wa/wa-automate";
import type MessageHandler from "../handler/Message";

export interface ICommand {
    id: string;
    path?: string;
    client?: Client;
    handler?: MessageHandler;
    categories?: ICategories;
    options: ICommandOptions;
    description: ICommandDescription;
    exec(msg: Message, args?: string[]): Promise<any> | any;
}
export interface ICommandOptions {
    cooldown?: number;
    aliases: string[];
    category: string;
    meOnly?: boolean;
    devOnly?: boolean;
    groupOnly?: boolean;
    privateOnly?: boolean;
}
export interface ICommandDescription {
    content: string;
    usage?: string;
}

export interface ICategories {
    name: string;
    path?: string;
    commands: ICommand[];
}
export interface IHandler {
    message?: MessageHandler;
}