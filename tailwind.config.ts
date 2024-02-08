import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9'
            },
            colors: {
                'blue-faded': '#e8f3fe',
                'skuldent-blue': '#153655',
                'skuldent-yellow': '#ffb246',
            },
        }
    }
}