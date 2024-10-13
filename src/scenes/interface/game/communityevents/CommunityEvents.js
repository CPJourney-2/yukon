import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'
import EventSubmission from './eventsubmission/EventSubmission';

export const preload = {
    key: 'communityevents-pack',
    url: 'assets/media/interface/game/communityevents/communityevents-pack.json',
    loadString: ['loading', 'communityevents']
}

/* START OF COMPILED CODE */

export default class CommunityEvents extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 477);

        /** @type {Phaser.GameObjects.Text} */
        this.event_name;
        /** @type {Phaser.GameObjects.Text} */
        this.event_location;
        /** @type {Phaser.GameObjects.Text} */
        this.event_date;
        /** @type {Phaser.GameObjects.Text} */
        this.event_time;
        /** @type {Phaser.GameObjects.Image} */
        this.toggleLeft;
        /** @type {Phaser.GameObjects.Image} */
        this.toggleRight;
        /** @type {EventSubmission} */
        this.eventSubmission;


        // block
        const block = scene.add.rectangle(-12, 7, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // noticeboard
        const noticeboard = scene.add.image(4, -28, "communityevents", "noticeboard");
        this.add(noticeboard);

        // close
        const close = scene.add.image(475, -359, "main", "grey-button");
        this.add(close);

        // grey_x
        const grey_x = scene.add.image(475, -361, "main", "grey-x");
        this.add(grey_x);

        // event_name
        const event_name = scene.add.text(-284, -66.54999542236328, "", {});
        event_name.setOrigin(0, 1);
        event_name.text = "An Awesome Event!";
        event_name.setStyle({ "color": "#000", "fontFamily": "CCFaceFront", "fontSize": "50px", "maxLines":1});
        this.add(event_name);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(-292, -56, 128, 128);
        rectangle_1.scaleX = 4.657746108699158;
        rectangle_1.scaleY = -0.03913091631650171;
        rectangle_1.setOrigin(-0.0006030975494644153, 0.3633332485189271);
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        this.add(rectangle_1);

        // event_name_1
        const event_name_1 = scene.add.text(-289, -45, "", {});
        event_name_1.text = "Location";
        event_name_1.setStyle({ "color": "#000", "fixedWidth":590,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "italic" });
        this.add(event_name_1);

        // event_location
        const event_location = scene.add.text(-290, -1, "", {});
        event_location.text = "Someone's Igloo";
        event_location.setStyle({ "color": "#000", "fixedWidth":590,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        this.add(event_location);

        // rectangle
        const rectangle = scene.add.rectangle(-292, 61, 128, 128);
        rectangle.scaleX = 4.657746108699158;
        rectangle.scaleY = -0.03913091631650171;
        rectangle.setOrigin(-0.0006030975494644153, 0.3633332485189271);
        rectangle.isFilled = true;
        rectangle.fillColor = 0;
        this.add(rectangle);

        // event_name_3
        const event_name_3 = scene.add.text(-292, 69, "", {});
        event_name_3.text = "When";
        event_name_3.setStyle({ "color": "#000", "fixedWidth":590,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "italic" });
        this.add(event_name_3);

        // save_button
        const save_button = scene.add.image(213, 374, "login", "save-button");
        save_button.scaleX = 0.5590512425044025;
        save_button.scaleY = 0.5645643851973567;
        save_button.setOrigin(0.5017543859649123, 0.5046728971962616);
        this.add(save_button);

        // event_date
        const event_date = scene.add.text(-289, 111, "", {});
        event_date.text = "Date: December 31, 2000";
        event_date.setStyle({ "color": "#000", "fixedWidth":590,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        this.add(event_date);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(-286, 218, 128, 128);
        rectangle_2.scaleX = 4.657746108699158;
        rectangle_2.scaleY = -0.03913091631650171;
        rectangle_2.setOrigin(-0.0006030975494644153, 0.3633332485189271);
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 0;
        this.add(rectangle_2);

        // disclaimer
        const disclaimer = scene.add.text(23, 243, "", {});
        disclaimer.setOrigin(0.5, 0.5);
        disclaimer.text = "The listed times are in Penguin Standard Time.";
        disclaimer.setStyle({ "align": "center", "color": "#000", "fixedWidth":590,"fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
        disclaimer.setWordWrapWidth(600);
        this.add(disclaimer);

        // event_time
        const event_time = scene.add.text(-288, 158, "", {});
        event_time.text = "Time: 12:00 PM";
        event_time.setStyle({ "color": "#000", "fixedWidth":590,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        this.add(event_time);

        // disclaimer_1
        const disclaimer_1 = scene.add.text(23, 289.77557373046875, "", {});
        disclaimer_1.setOrigin(0.5, 0.5);
        disclaimer_1.text = "These events are community-hosted. Our moderators are not affiliated with nor responsible for these events.";
        disclaimer_1.setStyle({ "align": "center", "color": "#000", "fixedWidth":590,"fontFamily": "Burbank Small", "fontSize": "23px" });
        disclaimer_1.setWordWrapWidth(600);
        this.add(disclaimer_1);

        // rectangle_4
        const rectangle_4 = scene.add.rectangle(-276, 332, 128, 128);
        rectangle_4.scaleX = 4.657746108699158;
        rectangle_4.scaleY = -0.03913091631650171;
        rectangle_4.setOrigin(-0.0006030975494644153, 0.3633332485189271);
        rectangle_4.isFilled = true;
        rectangle_4.fillColor = 0;
        this.add(rectangle_4);

        // disclaimer_2
        const disclaimer_2 = scene.add.text(-66, 368, "", {});
        disclaimer_2.setOrigin(0.5, 0.5);
        disclaimer_2.text = "Want to host your own event? Click the button for more information!";
        disclaimer_2.setStyle({ "align": "center", "color": "#000", "fixedWidth":450,"fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
        disclaimer_2.setWordWrapWidth(400);
        this.add(disclaimer_2);

        // submittxthihu
        const submittxthihu = scene.add.text(214, 372, "", {});
        submittxthihu.setOrigin(0.5, 0.5);
        submittxthihu.text = "View Form";
        submittxthihu.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "27px", "fontStyle": "bold" });
        submittxthihu.setWordWrapWidth(400);
        this.add(submittxthihu);

        // toggleLeft
        const toggleLeft = scene.add.image(-261, 327, "communityevents", "ce-pageturn");
        this.add(toggleLeft);

        // toggleRight
        const toggleRight = scene.add.image(321, 318, "communityevents", "ce-pageturn");
        toggleRight.angle = -0.5;
        toggleRight.flipX = true;
        this.add(toggleRight);

        // eventSubmission
        const eventSubmission = new EventSubmission(scene, 0, 0);
        eventSubmission.visible = false;
        this.add(eventSubmission);

        // block (components)
        new Interactive(block);

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "grey-button";
        closeButton.callback = () => this.close();
        closeButton.activeFrame = true;

        // save_button (components)
        const save_buttonButton = new Button(save_button);
        save_buttonButton.spriteName = "save-button";
        save_buttonButton.callback = () =>  this.showSubmissionForm();

        // toggleLeft (components)
        const toggleLeftButton = new Button(toggleLeft);
        toggleLeftButton.spriteName = "ce-pageturn";
        toggleLeftButton.callback = () => {this.onBack()};

        // toggleRight (components)
        const toggleRightButton = new Button(toggleRight);
        toggleRightButton.spriteName = "ce-pageturn";
        toggleRightButton.callback = () => {this.onForward()};

        this.event_name = event_name;
        this.event_location = event_location;
        this.event_date = event_date;
        this.event_time = event_time;
        this.toggleLeft = toggleLeft;
        this.toggleRight = toggleRight;
        this.eventSubmission = eventSubmission;

        /* START-USER-CTR-CODE */
        this.events_list = this.crumbs.community_events.events
        this.event_index = 0
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show(args) {
        super.show()

        this.event_index = 0
        this.updateText()
        this.checkPages()
    }

    hide() {
        this.event_index = 0
        this.visible = false
    }

    //update the text
    updateText() {
        this.event_name.text = this.events_list[this.event_index].name
        this.event_location.text = this.events_list[this.event_index].location

        //get time and date
        let date = new Date(this.events_list[this.event_index].time * 1000)
        let formattedDate = date.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles', month: 'long', day: 'numeric', year: 'numeric' })
        let formattedTime = date.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: 'numeric', minute: '2-digit' })
        this.event_date.text = `Date: ${formattedDate}`
        this.event_time.text = `Time: ${formattedTime}`

        //shrink event name if its too long
        if(this.event_name.text.toString().length > 22) {
            let lengthDifference = this.event_name.text.toString().length - 22
            let amongus = 0
            for(let i = 1; i <= lengthDifference; i++) {
                amongus = 50 - (i * 2)
            }
            this.event_name.setFontSize(amongus)
        } else {
            this.event_name.setFontSize(50)
        }
    }

    //this hides the respective buttons if the first or last page has been reached
    checkPages() {
        this.toggleLeft.visible = this.event_index == 0 ? false : true
        this.toggleRight.visible = (this.event_index + 1) == this.events_list.length ? false : true
        if(this.events_list.length == 1) {
            this.toggleLeft.visible = false
            this.toggleRight.visible = false
        }
    }

    onBack() {
        if((this.event_index - 1) >= 0) {
            this.event_index--
            this.updateText()
        }
        this.checkPages()
    }

    onForward() {
        if((this.event_index + 1) < this.events_list.length) {
            this.event_index++
            this.updateText()
        }
        this.checkPages()
    }

    showSubmissionForm() {
        this.eventSubmission.show(1)
    }

    callback() {
        this.eventSubmission.callback()
    }

    noCallback() {
        this.eventSubmission.noCallback()
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
