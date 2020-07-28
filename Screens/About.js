// Package Import
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, ImageBackground} from 'react-native';
// End of Package Import

// Screens,Theme,Components Import
import { Diem, Fonts, Fontsize, Colors } from '../Constants/Theme';
// End of Screens,Theme,Components Import



class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,  // About Us API Call Loading
        }
    };


    async componentDidMount() {
        try {
            const response = await fetch('https://cairojazzclub.com/wp-json/cjc/about');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,

                // Content Fetch
                dataSource1: responseJson.about_content.substring(0, 318),
                dataSource2: responseJson.about_content.substring(319),
                dataSource3: responseJson.stage_history_content.substring(0, 291),
                dataSource4: responseJson.stage_history_content.substring(292, 561),
                dataSource5: responseJson.stage_history_content.substring(561, 594),
                dataSource6: responseJson.stage_history_content.substring(594, 899),
                dataSource7: responseJson.stage_history_content.substring(899, 936),
                dataSource8: responseJson.stage_history_content.substring(936, 1299),
                dataSource9: responseJson.cjc_art_content.substring(0, 295),
                dataSource10: 'Amr Qenawi: Current Graphic Designer & Art Director',
                dataSource11: responseJson.cjc_art_content.substring(355, 716),
                dataSource12: responseJson.cjc_art_content.substring(716, 1190),
                dataSource13: responseJson.cjc_art_content.substring(1190, 1257),
                dataSource14: responseJson.cjc_art_content.substring(1257, 2217),
                dataSource15: responseJson.cjc_art_content.substring(2217, 2248),
                dataSource16: responseJson.cjc_art_content.substring(2248, 2834),
                dataSource17: responseJson.cjc_art_content.substring(2834, 2866),
                dataSource18: responseJson.cjc_art_content.substring(2866, 3340),
                dataSource19: responseJson.cjc_art_content.substring(3340, 3880),
                // End of Content Fetch

                // Image Fetch
                aboutimage1: responseJson.about_images[0].image_path.url,
                aboutimage2: responseJson.stage_images[0].image_path.url,
                aboutimage3: responseJson.cjc_art_images[0].image_path.url,
                aboutimage4: responseJson.cjc_art_images[1].image_path.url,

                // End of Image Fetch
            });
        }
        catch (error) {
            console.log("error");
        }
    }

    //Main About Render
    render() {
        const { navigation } = this.props;
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
                <ImageBackground source={require('../Assets/Images/onlybg.jpg')} style={styles.AboutBK}>
                    <ScrollView>

                        {/* About Header Title */}
                        <View style={styles.HeaderTitleCon}>
                            <Text style={styles.HeaderTitle}>About Us</Text>
                            <Text style={styles.HeaderTitle2}>ABOUT CAIRO JAZZ CLUB</Text>
                        </View>
                        {/* End of About Header Title */}

                        {/* About Content */}
                        <View style={styles.ContentCon}>
                            <View style={styles.ContentGird}>
                                <Image source={require('../Assets/Images/whitecircle.png')} style={styles.WhiteCircle} />
                                <Image source={{ uri: this.state.aboutimage1 }} style={styles.ApiImages} />
                            </View>
                            <View style={styles.ContentGird}>
                                <Text style={styles.ContentTxt}>{this.state.dataSource1}</Text>
                            </View>
                        </View>
                        <View style={styles.ContentCon2}>
                            <View style={styles.ContentGird}>
                                <Text style={styles.ContentTxt}>{this.state.dataSource2}</Text>
                            </View>
                        </View>
                        {/* End of About Content */}

                        {/* Stage Header Title */}
                        <View style={styles.StageTitleCon}>
                            <Text style={styles.HeaderTitle2}>Stage History</Text>
                        </View>
                        {/* End of Stage Header Title */}

                        {/* Stage History Content */}
                        <View style={styles.ContentCon}>
                            <View style={styles.ContentGird}>
                                <Text style={styles.ContentTxt}>{this.state.dataSource3}</Text>
                            </View>
                            <View style={styles.ContentGird}>
                                <Image source={require('../Assets/Images/whitecircle.png')} style={styles.WhiteCircle} />
                                <Image source={{ uri: this.state.aboutimage2 }} style={styles.ApiImages} />
                            </View>
                        </View>
                        <View style={styles.ContentCon2}>
                            <View style={styles.ContentGird}>
                                <Text style={styles.ContentTxt}>{this.state.dataSource4}</Text>
                            </View>
                            <View style={styles.FlexRowDir}>
                                <View style={styles.Flexone}>
                                    <Text style={styles.TableHeader}>{this.state.dataSource5}</Text>
                                    <Text style={styles.TableTxt}>{this.state.dataSource6}</Text>
                                </View>
                                <View style={styles.Flexone}>
                                    <Text style={styles.TableHeader}>{this.state.dataSource7}</Text>
                                    <Text style={styles.TableTxt}>{this.state.dataSource8}</Text>
                                </View>
                            </View>
                        </View>
                        {/* End of Stage History Content */}

                        {/* CairoJazz Art Title */}
                        <View style={styles.StageTitleCon}>
                            <Text style={styles.HeaderTitle2}>CJC's Art</Text>
                        </View>
                        {/* End of CairoJazz Art Title */}

                        {/* CairoJazz Art Content */}
                        <View style={styles.ContentCon}>
                            <View style={styles.ContentGird}>
                                <Image source={require('../Assets/Images/whitecircle.png')} style={styles.WhiteCircle} />
                                <Image source={{ uri: this.state.aboutimage3 }} style={styles.ApiImages} />
                            </View>
                            <View style={styles.ContentGird}>
                                <Image source={require('../Assets/Images/whitecircle.png')} style={styles.WhiteCircle} />
                                <Image source={{ uri: this.state.aboutimage4 }} style={styles.ApiImages} />
                            </View>
                        </View>
                        <View style={styles.ContentCon2}>
                            <View style={styles.ContentGird}>
                                <Text style={styles.ContentTxt}>{this.state.dataSource9}</Text>
                            </View>
                            <View style={[styles.ContentGird2, styles.Margintop]}>
                                <Text style={styles.TableHeader}>{this.state.dataSource10}</Text>
                            </View>
                            <View style={[styles.ContentGird2, styles.Margintop]}>
                                <Text style={styles.ContentTxt}>{this.state.dataSource11}</Text>
                            </View>
                            <View style={[styles.ContentGird2, styles.Margintop]}>
                                <Text style={styles.ContentTxt}>{this.state.dataSource12}</Text>
                            </View>
                            <View style={[styles.ContentGird2, styles.Margintop]}>
                                <Text style={styles.TableHeader}>{this.state.dataSource13}</Text>
                            </View>
                            <View style={[styles.ContentGird2, styles.Margintop]}>
                                <Text style={styles.ContentTxt}>{this.state.dataSource14}</Text>
                            </View>
                            <View style={[styles.ContentGird2, styles.Margintop]}>
                                <Text style={styles.TableHeader}>{this.state.dataSource15}</Text>
                            </View>
                            <View style={[styles.ContentGird2, styles.Margintop]}>
                                <Text style={styles.ContentTxt}>{this.state.dataSource16}</Text>
                            </View>
                            <View style={[styles.ContentGird2, styles.Margintop]}>
                                <Text style={styles.TableHeader}>{this.state.dataSource17}</Text>
                            </View>
                            <View style={[styles.ContentGird2, styles.Margintop]}>
                                <Text style={styles.ContentTxt}>{this.state.dataSource18}</Text>
                            </View>
                            <View style={[styles.ContentGird2, styles.Margintop, styles.MarginBottom]}>
                                <Text style={styles.ContentTxt}>{this.state.dataSource19}</Text>
                            </View>
                        </View>
                        {/* End of CairoJazz Art Content */}

                    </ScrollView>
                </ImageBackground>
            );
        }
    }
    //End of Main About Render
};

const styles = StyleSheet.create({

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
        height: '10%',
        resizeMode: 'contain'
    },
    // End of Loader View

    // About Background View
    AboutBK: {
        height: '100%',
        width: Diem.width,
        resizeMode: 'cover'
    },
    // End of About Background View

    // About Header Title
    HeaderTitleCon: {
        width: '100%',
        height: Diem.height * 0.12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderTitle: {
        fontFamily: Fonts.Formal.fontFamily,
        fontSize: Fontsize.large.fontSize,
        color: Colors.AboutHeader.Color,
        marginVertical: '2%'
    },
    HeaderTitle2: {
        fontFamily: Fonts.MyriadProSemibold.fontFamily,
        fontSize: Fontsize.large.fontSize,
        color: Colors.AboutHeader2.Color,
        textTransform: 'uppercase'
    },
    // End of  About Header Title

    // About Content
    ContentCon: {
        height: Diem.height * 0.26,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: '5%',
        marginVertical:Diem.height * 0.02
    },
    ContentCon2: {
        width: '100%',
        paddingHorizontal: '5%'
    },
    ContentGird: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ContentGird2: {
        flex: 1,
        height: '100%',
    },
    WhiteCircle: {
        height: '90%',
        width: '90%',
        resizeMode: 'contain'
    },
    ContentTxt: {
        fontFamily: Fonts.MyriadProRegular.fontFamily,
        color: Colors.AboutHeader2.Color,
        fontSize: Fontsize.AboutContent.fontSize,
        lineHeight: 16,
    },
    // End of About Content

    // Stage Header Title
    StageTitleCon: {
        width: '100%',
        height: Diem.height * 0.12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TableHeader: {
        fontFamily: Fonts.MyriadProSemibold.fontFamily,
        color: Colors.AboutHeader2.Color,
        fontSize: Fontsize.AboutContent.fontSize,
    },
    TableTxt: {
        fontFamily: Fonts.MyriadProRegular.fontFamily,
        color: Colors.AboutHeader2.Color,
        fontSize: Fontsize.AboutContent.fontSize,
        lineHeight: 20,
    },
    // End of Stage Header Title

    ApiImages: {
        height: Diem.width*0.34,
        width: Diem.width*0.35,
        position: 'absolute',
        borderRadius: 1000,
    },

    //Constant Styles 
    FlexRowDir: {
        flexDirection: 'row'
    },
    Flexone: {
        flex: 1
    },
    Margintop: {
        marginTop: '5%',
    },
    MarginBottom: {
        marginBottom: '10%',
    }

});

export default About;