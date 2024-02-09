export class Hsl {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;

    constructor(
        hue: number,
        saturation: number,
        lightness: number,
        alpha?: number
    ) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.alpha = alpha === undefined ? 1.0 : alpha;
    }

    shiftHue(hue: number): Hsl {
        return new Hsl(
            Math.max(0, Math.min(360, this.hue + hue)),
            this.saturation,
            this.lightness,
            this.alpha
        );
    }

    shiftSaturation(saturation: number): Hsl {
        return new Hsl(
            this.hue,
            Math.max(0, Math.min(100, this.saturation + saturation)),
            this.lightness,
            this.alpha
        );
    }

    shiftLightness(lightness: number): Hsl {
        return new Hsl(
            this.hue,
            this.saturation,
            Math.max(0, Math.min(100, this.lightness + lightness)),
            this.alpha
        );
    }

    shiftAlpha(alpha: number): Hsl {
        return new Hsl(
            this.hue,
            this.saturation,
            this.lightness,
            Math.max(0, Math.min(1, this.alpha + alpha))
        );
    }

    toString() {
        return this.alpha === -1
            ? `hsl(${this.hue},${this.saturation}%,${this.lightness}%)`
            : `hsla(${this.hue},${this.saturation}%,${this.lightness}%,${this.alpha})`;
    }
}

type Color = any;

type ITheme = {
    bg_d3: Color;
    bg_d2: Color;
    bg_d1: Color;
    bg: Color;
    sidebar_bg: Color;
    primary: Color;
    primary_d1: Color;
    secondary: Color;
    shadow: Color;
    border: Color;
    text: Color;
    text_d1: Color;
    text_d2: Color;
    text_d3: Color;
    text_d4: Color;
};

const CommonTheme = {
    primary: new Hsl(239, 77, 70), //  https://coolors.co/3d348b-7678ed-ebebd3-f4d35e-e85f5c
    primary_d1: new Hsl(246, 46, 37),
    secondary: new Hsl(1, 75, 64),
};

const LightTheme: ITheme = {
    ...CommonTheme,

    bg_d3: new Hsl(202, 14, 15),
    bg_d2: new Hsl(216, 13, 15),
    bg_d1: new Hsl(220, 13, 18),
    bg: new Hsl(220, 13, 23),
    sidebar_bg: '#333842',
    shadow: 'rgba(20, 20, 20, 0.4)',
    border: 'rgba(200, 200, 200, 0.3)',
    text: new Hsl(0, 0, 0),
    text_d1: new Hsl(0, 0, 22),
    text_d2: new Hsl(0, 0, 39),
    text_d3: new Hsl(0, 0, 59),
    text_d4: new Hsl(0, 0, 78),
};
const DarkTheme: ITheme = {
    ...CommonTheme,

    bg_d3: new Hsl(202, 14, 15),
    bg_d2: new Hsl(216, 13, 15),
    bg_d1: new Hsl(220, 13, 18),
    bg: new Hsl(220, 13, 23),
    sidebar_bg: '#333842',
    shadow: 'rgba(20, 20, 20, 0.4)',
    border: 'rgba(200, 200, 200, 0.3)',
    text: new Hsl(0, 0, 100),
    text_d1: new Hsl(0, 0, 78),
    text_d2: new Hsl(0, 0, 59),
    text_d3: new Hsl(0, 0, 39),
    text_d4: new Hsl(0, 0, 20),
};

const Themes = [LightTheme, DarkTheme];

let Theme: ITheme = DarkTheme;

export const setTheme = (themeIndex: number) => {
    Theme = Themes[themeIndex];
};

export default Theme;
