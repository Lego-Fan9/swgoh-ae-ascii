#!/usr/bin/env node

import { Command } from 'commander';
import { getAsset } from './assetGetter.js';
import { getAsciiImage } from './assetToAscii.js';

async function main() {
    const program = new Command();

    program
        .name('swgoh-ae-ascii')
        .description('Convert swgoh assets to ascii')
        .version('0.1.0');
    
    program
        .option('--assetName <assetName>', 'Asset to get')
        .option('--assetVersion <assetVersion>', 'Asset version to use')
        .option('--ae <url>', 'URL to SWGoH AE2 or similar, must implement /Asset/single. Should include protocol, but no endpoint.')
        .action(async (options) => {
            let url = options.ae;

            if (!url) {
                url = process.env.AE_URL;
                if (!url || !url.startsWith("http")) {
                    console.error("Please specify AE URL via --ae or AE_URL environment variable");
                    return;
                }
            }

            const img = await getAsset(`${url}/Asset/single?assetName=${options.assetName}&version=${options.assetVersion}`);
            if(!img) {
                return;
            }
            getAsciiImage(img);
        })

    program.parse();
}

main();