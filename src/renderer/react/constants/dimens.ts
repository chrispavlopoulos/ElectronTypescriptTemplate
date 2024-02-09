interface IDimens {
    spacerXS: number;
    spacerS: number;
    spacerM: number;
    spacerL: number;
    spacerXL: number;
    cornerRadiusS: number;
    cornerRadiusM: number;
}

const DefaultDimens: IDimens = {
    spacerXS: 8,
    spacerS: 12,
    spacerM: 24,
    spacerL: 48,
    spacerXL: 72,
    cornerRadiusS: 8,
    cornerRadiusM: 12,
};
const RoomyDimens: IDimens = {
    spacerXS: 12,
    spacerS: 16,
    spacerM: 28,
    spacerL: 54,
    spacerXL: 86,
    cornerRadiusS: 8,
    cornerRadiusM: 12,
};

const DimenThemes = [DefaultDimens, RoomyDimens];

let Dimens: IDimens = DefaultDimens;

export const setDimenTheme = (themeIndex: number) => {
    Dimens = DimenThemes[themeIndex];
};

export default Dimens;
