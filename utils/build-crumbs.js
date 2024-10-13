// Merges all crumb files into one

const fs = require('fs')
const path = require('path')
const lang = 'en'
const assets = path.resolve(__dirname, `../assets/media/crumbs/${lang}`)

const crumbs = {
    colors: require(`${assets}/colors.json`),
    flooring: require(`${assets}/flooring.json`),
    furniture: require(`${assets}/furniture.json`),
    games: require(`${assets}/games.json`),
    igloos: require(`${assets}/igloos.json`),
    items: require(`${assets}/items.json`),
    penguin: require(`${assets}/penguin.json`),
    quick_keys: require(`${assets}/quick_keys.json`),
    safe_messages: require(`${assets}/safe_messages.json`),
    secret_frames: require(`${assets}/secret_frames.json`),
    strings: require(`${assets}/strings.json`),
    worlds: require(`${assets}/worlds.json`),
    jokes: require(`${assets}/jokes.json`),
    locations: require(`${assets}/locations.json`),
    stamps: require(`${assets}/stamps.json`),
    cover: require(`${assets}/cover.json`),
    polaroids: require(`${assets}/polaroids.json`),
    stage_script_messages: require(`${assets}/stage_script_messages.json`),
    puffles: require(`${assets}/puffles.json`),
    puffleanims: require(`${assets}/puffleanims.json`),
    puffleitems: require(`${assets}/puffleitems.json`),
    cards: require(`${assets}/cards.json`),
    postcards: require(`${assets}/postcards.json`),
    community_events: require(`${assets}/community_events.json`),
    tours: require(`${assets}/tours.json`),
    tour_questions: require(`${assets}/tour_questions.json`),
    mascot_messages: require(`${assets}/mascot_messages.json`),
    igloo_music: require(`${assets}/igloomusic.json`),
    transformations: require(`${assets}/transformations.json`),
    ruffle_widgets: require(`${assets}/ruffle_widgets.json`)
}

try {
    fs.writeFileSync(`${assets}/crumbs.json`, JSON.stringify(crumbs))
    console.log('Done')
} catch (error) {
    console.log(error)
}
