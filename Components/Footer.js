import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Linking, Text, SafeAreaView, ImageBackground } from 'react-native';
import { Diem, Colors } from '../Constants/Theme';
import openMap from 'react-native-open-maps';




class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            dataSource2: [],   // Map Handle Data from API
            isloadingFooter: true,
        }
    }

    // Cjc & 610 Informations API Fetch Call
    async componentDidMount() {
        try {
            const response = await fetch('https://cairojazzclub.com/wp-json/cjc/get/info');
            const responseJson = await response.json();
            const response2 = await fetch('https://cairojazzclub.com/wp-json/cjc/map');
            const responseJson2 = await response2.json();
            this.setState({
                dataSource: responseJson,
                dataSource2: responseJson2,
                isloadingFooter: false
            });

        }
        catch (error) {
            console.log("error");
        }
    };
    // End of Cjc & 610 Informations API Fetch Call

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

    //Cairo Jazz Main Branch Footer
    _CjcRender() {
        return (
            <SafeAreaView style={styles.FooterView}>
                <View style={styles.IconContainer}></View>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => { Linking.openURL(`tel:${Object.values(this.state.dataSource)[2]}`); }} >
                    <Image source={require('../Assets/Images/phone.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => this._goToCJC()} >
                    <Image source={require('../Assets/Images/location.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => Linking.openURL(Object.values(this.state.dataSource)[4])} >
                    <Image source={require('../Assets/Images/facebooksocial.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => Linking.openURL(Object.values(this.state.dataSource)[6])} >
                    <Image source={require('../Assets/Images/twitter.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => Linking.openURL(Object.values(this.state.dataSource)[7])}  >
                    <Image source={require('../Assets/Images/youtube.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => Linking.openURL(Object.values(this.state.dataSource)[8])} >
                    <Image source={require('../Assets/Images/soundcloud.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => Linking.openURL(Object.values(this.state.dataSource)[9])} >
                    <Image source={require('../Assets/Images/instagram.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <View style={styles.IconContainer}></View>
            </SafeAreaView>
        );
    };
    // End of Cairo Jazz Main Branch Footer

    //Cairo Jazz 610 Branch Footer
    _610Render() {
        return (
            <SafeAreaView style={styles.FooterView}>
                <View style={styles.IconContainer}></View>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => { Linking.openURL(`tel:${Object.values(this.state.dataSource)[3]}`); }} >
                    <Image source={require('../Assets/Images/phone.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => this._goToCJC2()} >
                    <Image source={require('../Assets/Images/location.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => Linking.openURL(Object.values(this.state.dataSource)[5])} >
                    <Image source={require('../Assets/Images/facebooksocial.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => Linking.openURL(Object.values(this.state.dataSource)[6])} >
                    <Image source={require('../Assets/Images/twitter.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => Linking.openURL(Object.values(this.state.dataSource)[7])}  >
                    <Image source={require('../Assets/Images/youtube.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => Linking.openURL(Object.values(this.state.dataSource)[8])} >
                    <Image source={require('../Assets/Images/soundcloud.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.IconContainer} onPress={() => Linking.openURL(Object.values(this.state.dataSource)[10])} >
                    <Image source={require('../Assets/Images/instagram.png')}
                        style={styles.FooterIcon} />
                </TouchableOpacity>
                <View style={styles.IconContainer}></View>
            </SafeAreaView>
        );
    };
    //End of Cairo Jazz 610 Branch Footer

    //Footer Main Render
    render() {
        if (this.state.isloadingFooter)
            return (
                <SafeAreaView style={styles.FooterView}>
                    <View style={styles.LoaderImageCon}>
                        <Image style={styles.LoaderGif} source={require('../Assets/Images/pref_loading.gif')} />
                    </View>
                </SafeAreaView>
            );
        else {
            return (
                this.props.FooterKind === "1" ? this._CjcRender() : this._610Render()
            );
        }
    }
    //End of Footer Main Render
};

const styles = StyleSheet.create({
    // Footer Bottom View
    FooterView: {
        height: Diem.height * 0.09,
        width: Diem.width,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Footer.Color,
    },
    // End of Footer Bottom View

    // Icons Grid & Style
    IconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    FooterIcon: {
        height: '45%',
        resizeMode: 'contain',
        tintColor: Colors.FooterIcon.Color
    },
    // End of Icons Grid & Style

    // Loader View
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
        height: '60%',
        resizeMode: 'contain'
    },
    // End of Loader View
});

export default Footer;