const newspapers = [
    {
        date: 'February 26, 2023',
        headline: "BETA PARTY IS HERE",
        scene: require('@scenes/interface/game/newspaper/issue1/Newspaper'),
    },
    {
        date: 'March 4, 2023',
        headline: "SNOWCAT INVASION",
        scene: require('@scenes/interface/game/newspaper/issue2/Newspaper'),
    },
    {
        date: 'March 20, 2023',
        headline: "LEPRECHAUN LEFTOVERS",
        scene: require('@scenes/interface/game/newspaper/issue3/Newspaper'),
    },
    {
        date: 'April 4, 2023',
        headline: "APRIL FOOLS PARTY",
        scene: require('@scenes/interface/game/newspaper/issue4/Newspaper'),
    },
    {
        date: 'April 18, 2023',
        headline: "EARTH DAY",
        scene: require('@scenes/interface/game/newspaper/issue5/Newspaper'),
    },
    {
        date: 'May 1, 2023',
        headline: "AUNT ARCTIC RECAPS EARTH DAY!",
        scene: require('@scenes/interface/game/newspaper/issue6/Newspaper'),
    },
    {
        date: 'May 18, 2023',
        headline: "PUFFLES ARE HERE!",
        scene: require('@scenes/interface/game/newspaper/issue7/Newspaper'),
    },
    {
        date: 'May 29, 2023',
        headline: "CELEBRATION OF PIZZA",
        scene: require('@scenes/interface/game/newspaper/issue8/Newspaper'),
    },
    {
        date: 'June 12, 2023',
        headline: "AUNT ARCTIC INTERVIEWS THE SENSEI",
        scene: require('@scenes/interface/game/newspaper/issue9/Newspaper'),
    },
    {
        date: 'June 27, 2023',
        headline: "CARD-JITSU PARTY CONSTRUCTION!",
        scene: require('@scenes/interface/game/newspaper/issue10/Newspaper'),
    },
    {
        date: 'July 10, 2023',
        headline: "CARD-JITSU CELEBRATION!",
        scene: require('@scenes/interface/game/newspaper/issue11/Newspaper'),
    },
    {
        date: 'July 24, 2023',
        headline: "CARD-JITSU PARTY RECAP!",
        scene: require('@scenes/interface/game/newspaper/issue12/Newspaper'),
    },
    {
        date: 'August 7, 2023',
        headline: "CRASH AT SEA!",
        scene: require('@scenes/interface/game/newspaper/issue13/Newspaper'),
    },
    {
        date: 'August 21, 2023',
        headline: "SUBMARINE PARTY!",
        scene: require('@scenes/interface/game/newspaper/issue14/Newspaper'),
    },
    {
        date: 'September 4, 2023',
        headline: "SALVAGE THE SUNKEN SHIP!",
        scene: require('@scenes/interface/game/newspaper/issue15/Newspaper'),
    },
    {
        date: 'September 18, 2023',
        headline: "PREPARE FOR THE FAIR!",
        scene: require('@scenes/interface/game/newspaper/issue16/Newspaper'),
    },
    {
        date: 'October 2, 2023',
        headline: "BLOSSOM WINS!",
        scene: require('@scenes/interface/game/newspaper/issue17/Newspaper'),
    },
    {
        date: 'October 16, 2023',
        headline: "SECRET AGENTS WANTED!",
        scene: require('@scenes/interface/game/newspaper/issue18/Newspaper'),
    },
    {
        date: 'October 30, 2023',
        headline: "SCARIEST PARTY OF THE YEAR!",
        scene: require('@scenes/interface/game/newspaper/issue19/Newspaper'),
    },
    {
        date: 'November 13, 2023',
        headline: "SLED RACING IS COMING!",
        scene: require('@scenes/interface/game/newspaper/issue20/Newspaper'),
    },
    {
        date: 'November 27, 2023',
        headline: "WINTER IS HERE!",
        scene: require('@scenes/interface/game/newspaper/issue21/Newspaper'),
    },
    {
        date: 'December 11, 2023',
        headline: "PREPARE FOR THE HOLIDAYS!",
        scene: require('@scenes/interface/game/newspaper/issue22/Newspaper'),
    },
    /*{
        date: 'December 25, 2023',
        headline: "LETTER FROM AUNT ARCTIC",
        scene: require('@scenes/interface/game/newspaper/mini/Newspaper'),
        notcanon: true
    },*/
    {
        date: 'January 8, 2024',
        headline: "PREPARE FOR A FIESTA!",
        scene: require('@scenes/interface/game/newspaper/issue23/Newspaper'),
    },
    {
        date: 'January 22, 2024',
        headline: "REFORMED FRIENDS LIST!",
        scene: require('@scenes/interface/game/newspaper/issue24/Newspaper'),
    },
    {
        date: 'February 5, 2024',
        headline: "CPJ TURNS 1 YEAR OLD!",
        scene: require('@scenes/interface/game/newspaper/issue25/Newspaper'),
    },
    {
        date: 'February 19, 2024',
        headline: "SMOOTHIES AND TUNES",
        scene: require('@scenes/interface/game/newspaper/issue26/Newspaper'),
    },
    {
        date: 'March 4, 2024',
        headline: "JOIN ROCKHOPPER'S CREW",
        scene: require('@scenes/interface/game/newspaper/issue27/Newspaper'),
    },
    {
        date: 'March 18, 2024',
        headline: "PIRATE PARTY SETS SAIL",
        scene: require('@scenes/interface/game/newspaper/issue28/Newspaper'),
    },
    {
        date: 'April 1, 2024',
        headline: "SILLIEST PARTY OF THE YEAR",
        scene: require('@scenes/interface/game/newspaper/issue29/Newspaper'),
    },
    {
        date: 'April 15, 2024',
        headline: "BASEBALL IS COMING",
        scene: require('@scenes/interface/game/newspaper/issue30/Newspaper'),
    },
    {
        date: 'April 29, 2024',
        headline: "MYSTERIOUS DRAGON SPOTTED",
        scene: require('@scenes/interface/game/newspaper/issue31/Newspaper'),
    },
    {
        date: 'May 13, 2024',
        headline: "MEDIEVAL PARTY ON THE HORIZON",
        scene: require('@scenes/interface/game/newspaper/issue32/Newspaper'),
    },
    {
        date: 'May 27, 2024',
        headline: "THE DRAGON KING FALLS",
        scene: require('@scenes/interface/game/newspaper/issue33/Newspaper'),
    },
    {
        date: 'June 10, 2024',
        headline: "GET DRESSED FOR SUMMER",
        scene: require('@scenes/interface/game/newspaper/issue34/Newspaper'),
    },
    {
        date: 'June 24, 2024',
        headline: "PH'S FROGGLE FINDINGS",
        scene: require('@scenes/interface/game/newspaper/issue35/Newspaper'),
    },
    {
        date: 'July 8, 2024',
        headline: "MUSIC JAM IS COMING",
        scene: require('@scenes/interface/game/newspaper/issue36/Newspaper'),
    },
    {
        date: 'July 22, 2024',
        headline: "GET UP, PARTY PENGUINS",
        scene: require('@scenes/interface/game/newspaper/issue37/Newspaper'),
    },
    {
        date: 'August 5, 2024',
        headline: "NEW JOBS FOR PENGUINS",
        scene: require('@scenes/interface/game/newspaper/issue38/Newspaper'),
    },
    {
        date: 'August 19, 2024',
        headline: "CORN SIGHTINGS",
        scene: require('@scenes/interface/game/newspaper/issue39/Newspaper'),
    },
    {
        date: 'September 2, 2024',
        headline: "POPCORN AT THE SPORT SHOP",
        scene: require('@scenes/interface/game/newspaper/issue40/Newspaper'),
    },
    {
        date: 'September 16, 2024',
        headline: "THE BUZZ OF THE FAIR",
        scene: require('@scenes/interface/game/newspaper/issue41/Newspaper'),
    }
]

export default newspapers
