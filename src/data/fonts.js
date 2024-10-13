const fonts = {
    custom: {
        families: [
            'Arial:n4,n7',
            'Arial Narrow:n4,n7',
            'Asterisk:n4',
            'Burbank Small:n4,n7',
            'Burbank Small Black',
            'CCComiccrazy:n4,i7',
            'CCComicrazy:n4,i7,i4',
            'CCFaceFront:n4,i7',
            'cplcd:n4',
            'Burbank Big:n4,n7',
            'Candombe',
            'Burbank Big Regular:n7',
            'CCComicrazy-Roman:n4',
            'Burbank Big Wide:n4,n7',
            'DraculonRegular',
            'PumpkinJF',
            'Franklin Gothic Heavy',
            'RuneScapeBold'
        ],
        urls: [
            (process.env.NODE_ENV === 'development') ? 'assets/styles/fonts.css?v4=true' : CDN_URL + "assets/styles/fonts.css?v4=true"
        ]
    }
}

export default fonts
