import * as ex from 'excalibur';

// const botFile from '../res/excalibot.png');
// const botRedFile from '../res/excalibot-red.png');
// const baddieFile from '../res/baddie.png');
// const blockFile from '../res/block.png');
// const npcFile from '../res/npc.png');
// const jumpSound from '../res/jump.wav');
// const hitSound from '../res/hurt.wav');
// const gotEmSound from '../res/gottem.wav');

import botFile from '../res/excalibot.png'
import botRedFile from '../res/excalibot-red.png'
import baddieFile from '../res/baddie.png'
import blockFile from '../res/block.png'
import npcFile from '../res/npc.png'
import jumpSound from '../res/jump.wav'
import hitSound from '../res/hurt.wav'
import gotEmSound from '../res/gottem.wav'

const DUMB_IMAGE = 'data:image/xyz'
const DUMB_SOUND = 'data:audio/wav'

let resources: {[key: string]: any } = {}
// if((typeof process !== 'undefined') && (process.release.name === 'node')){
//     resources = {
//         bot: new ex.ImageSource(DUMB_IMAGE),
//         botRed: new ex.ImageSource(DUMB_IMAGE),
//         baddie: new ex.ImageSource(DUMB_IMAGE),
//         block: new ex.ImageSource(DUMB_IMAGE),
//         npc: new ex.ImageSource(DUMB_IMAGE),
//         jump: new ex.Sound(DUMB_IMAGE),
//         hit: new ex.Sound(DUMB_IMAGE),
//         gotEm: new ex.Sound(DUMB_IMAGE)
//     }
// } else {
    resources = {
        bot: new ex.ImageSource(botFile),
        botRed: new ex.ImageSource(botRedFile),
        baddie: new ex.ImageSource(baddieFile),
        block: new ex.ImageSource(blockFile),
        npc: new ex.ImageSource(npcFile),
        jump: new ex.Sound(jumpSound),
        hit: new ex.Sound(hitSound),
        gotEm: new ex.Sound(gotEmSound)
    }
// }


// const resources = {
//     bot: new ex.ImageSource(DUMB_IMAGE),
//     botRed: new ex.ImageSource(DUMB_IMAGE),
//     baddie: new ex.ImageSource(DUMB_IMAGE),
//     block: new ex.ImageSource(DUMB_IMAGE),
//     npc: new ex.ImageSource(DUMB_IMAGE),
//     jump: new ex.Sound(DUMB_IMAGE),
//     hit: new ex.Sound(DUMB_IMAGE),
//     gotEm: new ex.Sound(DUMB_IMAGE)
// }

const loader = new ex.Loader();

const botSpriteSheet = ex.SpriteSheet.fromImageSource({
    image:resources.bot, 
    grid: { 
        columns: 8,
        rows: 1, 
        spriteWidth: 32,
        spriteHeight: 32
    }
});
const botRedSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: resources.botRed,
    grid: {
        columns: 8, 
        rows: 1,
        spriteWidth: 32,
        spriteHeight: 32
    }
});
const baddieSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: resources.baddie,
    grid: {
        columns: 6, 
        rows: 1,
        spriteWidth: 32,
        spriteHeight: 32
    }
});
const blockSprite = resources.block.toSprite();
const npcSprite = resources.npc.toSprite();

for (const res in resources) {
    loader.addResource((resources as any)[res]);
}

export { resources, loader, botSpriteSheet, botRedSpriteSheet, baddieSpriteSheet, blockSprite, npcSprite }