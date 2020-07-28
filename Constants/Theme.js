import { Dimensions, Platform, PixelRatio, StatusBar } from 'react-native';

// Constant Mobile Dimensions 
let H;

if (Platform.OS === 'android') {
    const hasNotch = StatusBar.currentHeight > 24;
    if (hasNotch === true) {
        H = Dimensions.get('window').height
    } else {
        H = Dimensions.get('window').height - StatusBar.currentHeight
    }
};

const Diem = {
    width: Dimensions.get('window').width,
    height: H
};
// End of Constant Mobile Dimensions 

// Fonts
const Fonts = {
    Formal: {
        fontFamily: "Formal436BT"
    },
    MyriadProRegular: {
        fontFamily: "AnyConv.com__MyriadPro-Regular"
    },
    MyriadProSemibold: {
        fontFamily: "AnyConv.com__MyriadPro-Semibold"
    },
    MyriadProBold: {
        fontFamily: "AnyConv.com__MyriadPro-Bold"
    },
};
// End of Fonts

// Responsive Font Size Function
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

export function actuatedNormalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
};
// End of Responsive Font Size Function

// Font Sizes
const Fontsize = {
    mini: {
        fontSize: actuatedNormalize(12)
    },
    small: {
        fontSize: actuatedNormalize(15)
    },
    medium: {
        fontSize: actuatedNormalize(17)
    },
    large: {
        fontSize: actuatedNormalize(20)
    },
    xlarge: {
        fontSize: actuatedNormalize(24)
    },
    xxlarge: {
        fontSize: actuatedNormalize(27)
    },
    FacebookCustom: {
        fontSize: actuatedNormalize(13)
    },
    Date: {
        fontSize: actuatedNormalize(19)
    },
    AboutContent: {
        fontSize: actuatedNormalize(11)
    },
    Homelarge: {
        fontSize: actuatedNormalize(22)
    },
};
// End of Font Sizes

// App Main Colors
const Colors = {
    Primary: {
        Color: '#fcb034'
    },
    Secondary: {
        Color: '#c8d7a4'
    },
    Tertiary: {
        Color: '#ffffff'
    },
    White: {
        Color: '#ffffff'
    },
    Black: {
        Color: 'rgb(0, 0, 0)'
    },
    Black2: {
        Color: 'rgba(0, 0, 0,0.6)'
    },
    Facebook: {
        Color: '#3a589a'
    },
    FacebookLine: {
        Color: 'rgba(0, 0, 0, 0.3)'
    },
    Footer: {
        Color: 'rgba(0, 0, 0, 0.1)'
    },
    FooterIcon: {
        Color: '#97A8A9'
    },
    Maroon: {
        Color: '#762123'
    },
    Maroon2: {
        Color: 'rgba(118, 33, 35,0.8)'
    },
    ContactTxt: {
        Color: 'rgb(177,188,189)'
    },
    SchduleDay: {
        Color: 'rgba(255,255,255,0.6)'
    },
    DataShape: {
        Color: '#ed7014'
    },
    AboutHeader: {
        Color: 'rgb(252,176,52)'
    },
    AboutHeader2: {
        Color: 'rgb(199,210,211)'
    }
};
// App Main Colors


export { Diem, Fonts, Fontsize, Colors };
