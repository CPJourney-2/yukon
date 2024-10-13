const rooms = {
    1: {
        key: 'Welcome',
        scene: require('@rooms/_fair/welcome/Welcome').default,
        x: 760,
        y: 755,
    },
    2: {
        key: 'Tourhq',
        scene: require('@rooms/_fair/tourhq/Tourhq').default,
        x: 775,
        y: 440,
    },
    3: {
        key: 'Lookout',
        scene: require('@rooms/_fair/lookout/Lookout').default,
        x: 760,
        y: 755,
    },
    4: {
        key: 'IcePond',
        scene: require('@rooms/_fair/icepond/IcePond').default,
        x: 788,
        y: 634,
    },
    100: {
        key: 'Town',
        scene: require('@rooms/_fair/town/Town').default,
        x: 760,
        y: 660,
    },
    110: {
        key: 'Coffee',
        scene: require('@rooms/_fair/coffee/Coffee').default,
        x: 720, //640,
        y: 480,
    },
    140: {
        key: 'Coffee_Solo',
        scene: require('@rooms/coffee_solo/Coffee_Solo').default,
        x: 624,
        y: 632,
    },
    141: {
        key: 'Pizza_Solo',
        scene: require('@rooms/pizza_solo/Pizza_Solo').default,
        x: 840,
        y: 600,
    },
    111: {
        key: 'Book',
        scene: require('@rooms/book/Book').default,
        x: 1260,
        y: 560,
    },
    120: {
        key: 'Dance',
        scene: require('@rooms/_fair/dance/Dance').default,
        x: 360,
        y: 560,
    },
    121: {
        key: 'Lounge',
        scene: require('@rooms/_fair/lounge/Lounge').default,
        x: 1120,
        y: 640,
    },
    122: {
        key: 'Eco',
        scene: require('@rooms/eco/Eco').default,
        x: 1120,
        y: 640,
    },
    130: {
        key: 'Shop',
        scene: require('@rooms/shop/Shop').default,
        x: 1075,
        y: 415
    },
    131: {
        key: 'ShopOffice',
        scene: require('@rooms/shopoffice/ShopOffice').default,
        x: 400,
        y: 600
    },
    200: {
        key: 'Village',
        scene: require('@rooms/_fair/village/Village').default,
        x: 800,
        y: 640, // changed for veggie villain party
    },
    210: {
        key: 'Sportshop',
        scene: require('@rooms/_mission11/sportshop/rebuild2/Sportshop').default,
        x: 1069,
        y: 526,
    },
    220: {
        key: 'Lodge',
        scene: require('@rooms/lodge/Lodge').default,
        x: 760,
        y: 580,
    },
    221: {
        key: 'Attic',
        scene: require('@rooms/attic/Attic').default,
        x: 1262,
        y: 560,
    },
    230: {
        key: 'Mtn',
        scene: require('@rooms/_fair/mtn/Mtn').default,
        x: 760,
        y: 440,
    },
    300: {
        key: 'Plaza',
        scene: require('@rooms/_fair/plaza/Plaza').default,
        x: 760,
        y: 680,
    },
    310: {
        key: 'Pet',
        scene: require('@rooms/pet/Pet').default,
        x: 828,
        y: 520,
    },
    318: {
        key: 'Hideout',
        scene: require('@rooms/hideout/Hideout').default,
        x: 836,
        y: 689,
    },
    319: {
        key: 'Courtyard',
        scene: require('@rooms/courtyard/Courtyard').default,
        x: 836,
        y: 689,
    },
    320: {
        key: 'Dojo',
        scene: require('@rooms/dojo/Dojo').default,
        x: 399,
        y: 635,
    },
    330: {
        key: 'Pizza',
        scene: require('@rooms/_fair/pizza/Pizza').default,
        x: 827,
        y: 502,
    },
    340: {
        key: 'Stage',
        scene: require('@rooms/stage/underwater/Stage').default,
        x: 340,
        y: 652,
    },
    /*341: {
        key: 'StageUnderground',
        scene: require('@rooms/stage/normanswarm/Underground').default,
        x: 334,
        y: 646,
    },*/
    400: {
        key: 'Beach',
        scene: require('@rooms/_fair/beach/Beach').default,
        x: 840,
        y: 680,
    },
    410: {
        key: 'Lighthouse',
        scene: require('@rooms/lighthouse/Lighthouse').default,
        x: 568,
        y: 508,
    },
    420: {
        key: 'Ship',
        scene: require('@rooms/ship/Ship').default,
        x: 840,
        y: 680,
    },
    421: {
        key: 'ShipHold',
        scene: require('@rooms/shiphold/ShipHold').default,
        x: 873,
        y: 605,
    },
    422: {
        key: 'ShipQuarters',
        scene: require('@rooms/shipquarters/ShipQuarters').default,
        x: 873,
        y: 605,
    },
    423: {
        key: 'Shipnest',
        scene: require('@rooms/shipnest/Shipnest').default,
        x: 873,
        y: 605,
    },
    411: {
        key: 'Beacon',
        scene: require('@rooms/_fair/beacon/Beacon').default,
        x: 328,
        y: 701,
    },
    800: {
        key: 'Dock',
        scene: require('@rooms/_fair/dock/Dock').default,
        x: 800,
        y: 400,
    },
    801: {
        key: 'Forts',
        scene: require('@rooms/_fair/forts/Forts').default,
        x: 960,
        y: 610,
    },
    802: {
        key: 'Rink',
        scene: require('@rooms/_fair/rink/Rink').default,
        x: 750,
        y: 320,
    },
    803: {
        key: 'HQ',
        scene: require('@rooms/_mission11/hqphase2/HQPhase2').default,
        x: 760,
        y: 755,
    },
    /*803: {
        key: 'HQ',
        scene: require('@rooms/_mission11/hqphase2/HQPhase2').default,
        x: 760,
        y: 755,
    },*/
    804: {
        key: 'Boiler',
        scene: require('@rooms/boiler/Boiler').default,
        x: 862,
        y: 733,
    },
    805: {
        key: 'Berg',
        scene: require('@rooms/_fair/berg/Berg').default,
        x: 652,
        y: 448,
    },
    806: {
        key: 'Cave',
        scene: require('@rooms/_fair/cave/Cave').default,
        x: 780,
        y: 700,
    },
    807: {
        key: 'Shack',
        scene: require('@rooms/shack/Shack').default,
        x: 760,
        y: 680,
    },
    808: {
        key: 'Mine',
        scene: require('@rooms/mine/Mine').default,
        x: 760,
        y: 680,
    },
    809: {
        key: 'Forest',
        scene: require('@rooms/_fair/forest/Forest').default,
        x: 760,
        y: 430,
    },
    810: {
        key: 'Cove',
        scene: require('@rooms/_fair/cove/Cove').default,
        x: 840,
        y: 480,
    },
    8100: {
        key: 'DarkCave',
        scene: require('@rooms/darkcave/DarkCave').default,
        x: 140,
        y: 500,
    },
    811: {
        key: 'BoxDimension',
        scene: require('@rooms/boxdimension/BoxDimension').default,
        x: 760,
        y: 680,
    },
    813: {
        key: 'Cavemine',
        scene: require('@rooms/cavemine/Cavemine').default,
        x: 840,
        y: 480,
    },
    814: {
        key: 'HiddenLake',
        scene: require('@rooms/hiddenlake/HiddenLake').default,
        x: 460,
        y: 285,
    },
    819: {
        key: 'Underwater',
        scene: require('@rooms/underwater/Underwater').default,
        x: 760,
        y: 660,
    },
    821: {
        key: 'OldBoiler',
        scene: require('@rooms/oldboiler/OldBoiler').default,
        x: 862,
        y: 733,
    },
    851: {
        key: 'Party1',
        scene: require('@rooms/_fair/party1/Party1').default,
        x: 800,
        y: 520,
    },
    852: {
        key: 'Party2',
        scene: require('@rooms/_fair/party2/Party2').default,
        x: 788,
        y: 634,
    },
    853: {
        key: 'Party3',
        scene: require('@rooms/_fair/party3/Party3').default,
        x: 788,
        y: 634,
    },
    854: {
        key: "Party4",
        scene: require('@rooms/_fair/party4/Party4').default,
        x: 340,
        y: 700,
    },
    855: {
        key: "Party5",
        scene: require('@rooms/_fair/party5/Party5').default,
        x: 935,
        y: 675,
    },
    856: {
        key: "Party6",
        scene: require('@rooms/_fair/maroonedlagoon/MaroonedLagoon').default,
        x: 1435,
        y: 600,
    },
    857: {
        key: "Party7",
        scene: require('@rooms/_fair/party7/Party7').default,
        x: 600,
        y: 750,
    },
    858: {
        key: "Party8",
        scene: require('@rooms/_fair/party8/Party8').default,
        x: 765,
        y: 640,
    },
    859: {
        key: "Party9",
        scene: require('@rooms/_fair/medievalmonsters/MedievalMonsters').default,
        x: 560,
        y: 720,
    },
    860: {
        key: "Party10",
        scene: require('@rooms/_fair/buccaneerboats/BuccaneerBoats').default,
        x: 185,
        y: 815,
    },
    861: {
        key: "Party11",
        scene: require('@rooms/_fair/spacesquid/SpaceSquid').default,
        x: 1435,
        y: 545,
    },
    862: {
        key: "Party12",
        scene: require('@rooms/_fair/coaster/Coaster').default,
        x: 765,
        y: 640,
    },
    /*863: {
        key: "Party13",
        scene: require('@rooms/_mission11/sportshop/Sportshop').default,
        x: 1069,
        y: 526,
    },
    864: {
        key: "Party14",
        scene: require('@rooms/_mission11/shop_solo/ShopSolo').default,
        x: 1075,
        y: 415
    },
    865: {
        key: "Party15",
        scene: require('@rooms/_mission11/shopoffice_solo/ShopOfficeSolo').default,
        x: 400,
        y: 600
    },
    866: {
        key: "Party16",
        scene: require('@rooms/_mission11/herbertsummit/HerbertSummitMulti').default,
        x: 560,
        y: 720,
    },
    867: {
        key: "Party17",
        scene: require('@rooms/_medieval/party17/Party17').default,
        x: 285,
        y: 670,
    },
    868: {
        key: "Party18",
        scene: require('@rooms/_medieval/party18/Party18').default,
        x: 1155,
        y: 700,
    },
    869: {
        key: "Party19",
        scene: require('@rooms/_medieval/party19/Party19').default,
        x: 760,
        y: 760,
    },
    870: {
        key: "Party20",
        scene: require('@rooms/_medieval/party20/Party20').default,
        x: 175,
        y: 740,
    },
    871: {
        key: "Party21",
        scene: require('@rooms/_medieval/party21/Party21').default,
        x: 225,
        y: 830,
    },
    872: {
        key: "Party22",
        scene: require('@rooms/_medieval/party22/Party22').default,
        x: 760,
        y: 780,
    },
    873: {
        key: "Party23",
        scene: require('@rooms/_medieval/party23/Party23').default,
        x: 790,
        y: 700,
    },
    830: {
        key: "PartyTower",
        scene: require('@rooms/_medieval/partyTower/PartyTower').default,
        x: 493,
        y: 799,
    },
    831: {
        key: "PartyTowerJoiner",
        scene: require('@rooms/_medieval/partyTowerJoiner/PartyTowerJoiner').default,
        x: 493,
        y: 799,
    },
    832: {
        key: "PartyTowerBreak",
        scene: require('@rooms/_medieval/partyTowerBreak/PartyTowerBreak').default,
        x: 493,
        y: 799,
    },
    833: {
        key: "PartyTowerTrivia",
        scene: require('@rooms/_medieval/partyTowerTrivia/PartyTowerTrivia').default,
        x: 493,
        y: 799,
    },
    834: {
        key: "PartyTowerBattle",
        scene: require('@rooms/_medieval/partyTowerBattle/PartyTowerBattle').default,
        x: 493,
        y: 799,
    },
    874: {
        key: "Party24",
        scene: require('@rooms/_medieval/party24/Party24').default,
        x: 1330,
        y: 850,
    },
    875: {
        key: "Party25",
        scene: require('@rooms/_medieval/party25/Party25').default,
        x: 280,
        y: 775,
    },
    876: {
        key: "Party26",
        scene: require('@rooms/_medieval/party26/Party26').default,
        x: 1200,
        y: 700,
    },
    877: {
        key: "Party27",
        scene: require('@rooms/_medieval/party27/Party27').default,
        x: 1245,
        y: 675,
    },*/
};

export default rooms;
