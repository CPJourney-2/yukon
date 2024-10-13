import PenguinSpriteFactory from './PenguinSpriteFactory'
//import TransformSpriteFactory from './TransformSpriteFactory'
import PuffleLoader from './PuffleLoader'


export default class PenguinLoader {

    constructor(world) {
        this.world = world

        this.nameStyle = {
            fontFamily: 'Arial',
            fontSize: 24,
            color: '#000000',
            align: 'center',
            fixedWidth: 250
        }
    }

    loadPenguin(penguin) {
        this.addPenguin(penguin)

        if(this.isMascot(penguin)) {
            this.addMascotRing(penguin)
        } else if(this.isBuddy(penguin)) { // Add buddy ring/shadow if penguin is a buddy
            this.addBuddyRing(penguin)
        }
        
        this.addShadow(penguin)
        this.addInput(penguin)

        if(penguin.walking && penguin.walking !== 0) {
            this.addPuffle(penguin, {}, penguin.walkingPuffleType)
        }

        penguin.playFrame(penguin.frame)

        if (penguin.openSprite != null) {
            this.openOtherSprite(penguin, penguin.openSprite);
        }
        // If buddy, update items for headshot
        this.world.interface.updateBuddyHeadshot(penguin)
    }

    isBuddy(penguin) {
        let buddy = this.world.client.buddies.find(obj => obj.id == penguin.id)
        if(!buddy) return false
        return true
    }

    isMascot(penguin) {
        return this.world.isMascot(penguin.id);
    }

    addPenguin(penguin) {
        penguin.bodySprite = PenguinSpriteFactory.create(penguin, 'body', 1)
        penguin.penguinSprite = PenguinSpriteFactory.create(penguin, 'penguin', 2)
        if(penguin.isTransformed) penguin.transformation(penguin.transform)
    }

    /*addTransform(penguin) {
        penguin.transformSprite = TransformSpriteFactory.create(penguin, `transformation_${penguin.transform}`, 'body', 1)
    }*/

    openOtherSprite(penguin, spriteName) {
        let frame = 1;
        penguin.playFrame(frame)

        this.world.room.onPenguinUpdate(penguin.id)

        penguin.lockRotation = true;

        penguin.openSprite = penguin.room.add.image(0, 0, 'other_sprites', spriteName)
        penguin.openSprite.depth = penguin.depth + 2000

        penguin.addAt(penguin.openSprite, 10)
    }

    closeOtherSprite(penguin) {
        penguin.lockRotation = false;

        let frame = 1;
        penguin.playFrame(frame)

        this.world.room.onPenguinUpdate(penguin.id)
        penguin.remove(penguin.openSprite, 10)

        penguin.openSprite = undefined
    }

    addShadow(penguin) {
        if(penguin.shadow) penguin.remove(penguin.shadow, 0)
        penguin.shadow = penguin.room.add.image(0, 0, 'penguin_base', 'shadow')

        penguin.addAt(penguin.shadow, 0)
    }

    addBuddyShadow(penguin) {
        if(penguin.shadow) penguin.remove(penguin.shadow, 0)
        penguin.shadow = penguin.room.add.image(0, 0, 'penguin_base', 'buddy_shadow')

        penguin.addAt(penguin.shadow, 0)
    }

    addRing(penguin, remove = false) {
        if(penguin.ring) penguin.remove(penguin.ring, 0)
        if(remove) return
        penguin.ring = penguin.room.add.image(0, 0, 'penguin_base', 'ring')

        penguin.addAt(penguin.ring, 0)
    }

    addBuddyRing(penguin) {
        if(penguin.ring) penguin.remove(penguin.ring, 0)
        penguin.ring = penguin.room.add.image(0, 0, 'penguin_base', 'buddy_ring')

        penguin.addAt(penguin.ring, 0)
    }

    addMascotRing(penguin) {
        if(penguin.ring) penguin.remove(penguin.ring, 0)
        penguin.ring = penguin.room.add.image(0, 0, 'penguin_base', 'mascot_ring')

        penguin.addAt(penguin.ring, 0)
    }

    removeBuddyRing(penguin) {
        if(penguin.ring) penguin.ring.destroy();
    }

    addName(penguin) {
        let x = penguin.x
        let y = penguin.y + 40

        let nameTag

        nameTag = penguin.room.add.text(x, y, penguin.displayName, this.nameStyle)

        nameTag.setOrigin(0.5)
        nameTag.depth = penguin.depth + 2000 // Keep nametag above everything else

        if(this.world.isMascot(penguin.id)) {
            let style = {}
            style.stroke = "#414141"
            style.strokeThickness = 6
            style.color = "#fff"

            nameTag._setStyle(style)
            nameTag.depth = penguin.depth + 2100 // make mascot name render above others
        }

        //phaser would otherwise attempt to render it at subpixel coordinates
        //this adds an annoying layer of blur that most ppl dont notice
        //but that i find annoying so heres a fix
        if(nameTag.height % 2 == 1) {
            let style = nameTag.style
            style.fixedHeight = nameTag.height + 1
            nameTag._setStyle(style)
        }

        return nameTag
    }

    addInput(penguin) {
        let hitArea = new Phaser.Geom.Ellipse(0, -20, 70, 90)

        penguin.setInteractive({
            cursor: 'pointer',
            hitArea: hitArea,
            hitAreaCallback: Phaser.Geom.Ellipse.Contains
        })

        if(penguin.isNPC) {
            penguin.on('pointerup', (pointer, target) => penguin.onClick(pointer, target))
        } else {
            penguin.on('pointerup', (pointer, target) => this.onPenguinClick(penguin.id, pointer, target))
        }
    }

    onPenguinClick(id) {
        this.world.interface.showCard(id)
    }

    onPenguinClick(id, pointer, target) {
        if(this.world.room.blockPlayerClicks) {
            this.world.interface.main.showEditPopup("Open Player Card Here")
            return;
        }

        var keyObj = this.world.room.input.keyboard.addKey("ALT");
        var isDown = this.world.room.input.keyboard.checkDown(keyObj);
        if(isDown) {
            this.world.client.onPointerUp(pointer, target)
            return;
        }

        this.world.interface.showCard(id)
    }

    /*
        Puffles

        addPuffle loader eventually calls loadPuffle after loading the file

        Responsible for adding the puffle next to the player, like a hand item NOT for igloo sprites

        Called from walkPuffle() and loadPenguin() (which is called from createPenguin() on room load)
    */

    addPuffle(penguin, puffle, puffleType) {
        if(!puffle || puffleType === undefined) {
            console.warn("Invalid puffle")
            return
        }

        let color = this.world.crumbs.puffles[puffleType].name;

        puffle.type = puffleType
        puffle.color = color

        let puffleLoader = new PuffleLoader(penguin, puffle);
        puffleLoader.loadPuffle(penguin, color);
    }

    loadPuffle(penguin, puffleObject, puffle_color) {


        penguin.pufflesprite = penguin.room.add.sprite(
            0,
            0,
            `puffles_${puffle_color}`,
            "1_1"
        )
        penguin.pufflesprite.depth = 3;
        penguin.add(penguin.pufflesprite);
        penguin.hasPuffle = true;
        penguin.puffle = puffleObject;
        penguin.playFrame(penguin.frame)
    }
}
