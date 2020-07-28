// Package Import
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import openMap from 'react-native-open-maps';
// End of Package Import

// Screens,Theme,Components Import
import { Diem, Colors, Fontsize, Fonts } from '../Constants/Theme';
// End of Screens,Theme,Components Import



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,  // Information API Call Loading
            dataSource: [],   // Information Handle Data from API
            isLoading2: true,  // Map API Call Loading
            dataSource2: [],   // Map Handle Data from API
        }
    };

    // Contact Information & Map API Fetch Call
    async componentDidMount() {
        try {
            const response = await fetch('https://cairojazzclub.com/wp-json/cjc/get/info');
            const responseJson = await response.json();
            const response2 = await fetch('https://cairojazzclub.com/wp-json/cjc/map');
            const responseJson2 = await response2.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson,
                isLoading2: false,
                dataSource2: responseJson2,
            });
        }
        catch (error) {
            console.log("error");
        }
    };
    // End of Contact Information & Map API Fetch Call

    // Google Map Navigation Function
    _goToCJC() {
        const CjcLat = parseFloat(Object.values(this.state.dataSource2)[0].split(/,/)[0]);
        const CjcLong = parseFloat(Object.values(this.state.dataSource2)[0].split(/, (.*)/)[1]);
        openMap({ latitude: CjcLat, longitude: CjcLong });
    }
    _goToCJC2() {
        let Cjc2Lat = parseFloat(Object.values(this.state.dataSource2)[1].split(/,/)[0]);
        let Cjc2Long = parseFloat(Object.values(this.state.dataSource2)[1].split(/,/)[1]);
        openMap({ latitude: Cjc2Lat, longitude: Cjc2Long });
    }
    // End of Google Map Navigation Function

    // Main Contact Render
    render() {
        const { navigation } = this.props;  // To Handle navigate Between Screens
        if (this.state.isLoading) {
            return (
                <View style={styles.LoaderCon}>
                    <ImageBackground source={require('../Assets/Images/MiniBk2.png')} style={styles.Contactbackground}>
                        <View style={styles.LoaderImageCon}>
                            <Image style={styles.LoaderGif} source={require('../Assets/Images/pref_loading.gif')} />
                        </View>
                    </ImageBackground>
                </View>
            );
        } else {
            return (
                <SafeAreaView>
                    <ImageBackground source={require('../Assets/Images/onlybg.jpg')} style={styles.ContactBK}>

                        {/* Map Container */}
                        <View style={styles.MapCon}>
                            <Image source={require('../Assets/Images/map.png')} style={styles.MapImage} />
                            <TouchableOpacity onPress={() => this._goToCJC()} activeOpacity={0.4} style={styles.LocateCon1}>
                                <Image source={require('../Assets/Images/locationcjccomplete.png')} style={styles.MapImageLoc} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this._goToCJC2()} activeOpacity={0.4} style={styles.LocateCon2}>
                                <Image source={require('../Assets/Images/location610.png')} style={styles.MapImageLoc} />
                            </TouchableOpacity>
                        </View>
                        {/* End of Map Container */}

                        {/* Information Container */}
                        <View style={styles.InfoCon}>

                            {/* CairoJazz Branch Information */}
                            <View style={styles.CjcInfoCon}>
                                <View style={styles.LogoCon}>
                                    <Image source={require('../Assets/Images/cjc.png')} style={styles.Img} />
                                </View>
                                <View style={styles.InfoIndCon}>
                                    <View style={styles.PinCon}>
                                        <View style={styles.Iconflex}>
                                            <Image source={require('../Assets/Images/pinn.png')} style={styles.PinImg} />
                                        </View>
                                        <TouchableOpacity activeOpacity={0.4} style={styles.Txtflex}>
                                            <Text style={styles.InfoTxt}>{Object.values(this.state.dataSource)[0]}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.PhoneCon}>
                                        <View style={styles.Iconflex}>
                                            <Image source={require('../Assets/Images/mobile.png')} style={styles.PinImg} />
                                        </View>
                                        <TouchableOpacity activeOpacity={0.4} onPress={() => { Linking.openURL(`tel:${Object.values(this.state.dataSource)[2]}`); }} style={styles.Txtflex}>
                                            <Text style={styles.InfoTxt}>{Object.values(this.state.dataSource)[2]}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            {/* End of CairoJazz Branch Information */}

                            {/* CairoJazz 610 Branch Information */}
                            <View style={styles.CjcInfoCon}>
                                <View style={styles.LogoCon}>
                                    <Image source={require('../Assets/Images/610.png')} style={styles.Img} />
                                </View>
                                <View style={styles.InfoIndCon}>
                                    <View style={styles.PinCon}>
                                        <View style={styles.Iconflex}>
                                            <Image source={require('../Assets/Images/pinn.png')} style={styles.PinImg} />
                                        </View>
                                        <TouchableOpacity activeOpacity={0.4} style={styles.Txtflex}>
                                            <Text style={styles.InfoTxt}>{Object.values(this.state.dataSource)[1]}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.PhoneCon}>
                                        <View style={styles.Iconflex}>
                                            <Image source={require('../Assets/Images/mobile.png')} style={styles.PinImg} />
                                        </View>
                                        <TouchableOpacity activeOpacity={0.4} onPress={() => { Linking.openURL(`tel:${Object.values(this.state.dataSource)[3]}`); }} style={styles.Txtflex}>
                                            <Text style={styles.InfoTxt}>{Object.values(this.state.dataSource)[3]}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            {/* End of CairoJazz 610 Branch Information */}

                        </View>
                        {/* End of Information Container */}

                    </ImageBackground>
                </SafeAreaView>
            );
        }
    }
    // End of Main Contact Render
};

const styles = StyleSheet.create({

    LoaderCon: {
        height: Diem.height * 0.91,
        width: Diem.width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Contactbackground: {
        height: '100%',
        width: Diem.width,
        resizeMode: 'cover'
    },
    LoaderImageCon: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoaderGif: {
        height: '10%',
        resizeMode: 'contain'
    },

    // Contact Background Image
    ContactBK: {
        height: Diem.height,
        width: Diem.width
    },
    // End of Contact Background Image

    // Map Container
    MapCon: {
        height: Diem.height * 0.41,
        width: Diem.width,
    },
    MapImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    MapImageLoc: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    LocateCon1: {
        width: '20%',
        height: '20%',
        position: 'absolute',
        left: '27%',
        top: '24%'
    },
    LocateCon2: {
        width: '20%',
        height: '20%',
        position: 'absolute',
        left: '52%',
        top: '44%'
    },
    // End of Map Container

    // Info Container
    InfoCon: {
        height: Diem.height * 0.45,
        width: Diem.width,
    },
    // End of Info Container

    // Cairo Jazz Info Container
    CjcInfoCon: {
        height: '50%',
        width: '100%',
    },
    LogoCon: {
        flex: 1,
        justifyContent: 'center'
    },
    InfoIndCon: {
        flex: 2,
        alignItems: 'center'
    },
    Img: {
        height: '55%',
        width: '30%',
        resizeMode: 'contain'
    },
    PinCon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
    },
    PinImg: {
        height: '50%',
        width: '50%',
        resizeMode: 'contain'
    },
    Iconflex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Txtflex: {
        flex: 3,
        justifyContent: 'center'
    },
    PhoneCon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
    },
    InfoTxt: {
        fontSize: Fontsize.small.fontSize,
        fontFamily: Fonts.MyriadProRegular.fontFamily,
        color: Colors.ContactTxt.Color
    }
    // End of Cairo Jazz Info Container

});

export default Contact;