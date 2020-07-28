// Package Import
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modal';
// End of Package Import

// Screens,Theme,Components Import
import { Diem, Fonts, Fontsize, Colors } from '../Constants/Theme';
import { CjcEvents, Cjc610Events } from '../Mocks/TemporaryEvents';
import Footer from '../Components/Footer';
import { ScrollView } from 'react-native-gesture-handler';
// End of Screens,Theme, Components Import


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,  // API Call Loading
            dataSource: [],   // Handle Data from API
            CJCpic: require('../Assets/Images/cjc.png'),  //CairoJazz Button Logo 
            ONOFFButton: require('../Assets/Images/buttonON.png'),  //Switch Button
            CJC610pic: require('../Assets/Images/610OFF.png'),  //CairoJazz 610 Branch Button Logo 
            FooterKind: null, //Footer Kind Passing To Child
            isModalVisible: false , //To Handle Event Modal
            isModalVisible2: false,  //To Handle Event Modal
        }
    }

    //Home ImageSlider API Fetch Call
    async componentDidMount() {
        try {
            const response = await fetch('https://cairojazzclub.com/wp-json/cjc/home/slider');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson,
            });
        }
        catch (error) {
            console.log("error");
        }
    };
    //End of Home ImageSlider API Fetch Call

    //Button Switch Functions
    Load_New_Image = () => {
        if (this.state.CJCpic == require('../Assets/Images/cjc.png')) {
            this.setState({
                CJCpic: require('../Assets/Images/cjc.png'),
                ONOFFButton: require('../Assets/Images/buttonON.png'),
                CJC610pic: require('../Assets/Images/610OFF.png'),
                FooterKind: '2'
            })
        } else {
            this.setState({
                CJCpic: require('../Assets/Images/cjc.png'),
                ONOFFButton: require('../Assets/Images/buttonON.png'),
                CJC610pic: require('../Assets/Images/610OFF.png'),
                FooterKind: '1'
            })
        }
    };
    Load_New_Image2 = () => {
        if (this.state.CJC610pic == require('../Assets/Images/610.png')) {
            this.setState({
                CJCpic: require('../Assets/Images/cjcOFF.png'),
                ONOFFButton: require('../Assets/Images/buttonOFF.png'),
                CJC610pic: require('../Assets/Images/610.png'),
                FooterKind: '1'

            })
        } else {
            this.setState({
                CJCpic: require('../Assets/Images/cjcOFF.png'),
                ONOFFButton: require('../Assets/Images/buttonOFF.png'),
                CJC610pic: require('../Assets/Images/610.png'),
                FooterKind: '2'
            })
        }
    };
    //End of Button Switch Functions

    // Loader Function
    Loader() {
        return (
            <View style={styles.SliderView}>
                <Image style={styles.LoaderGif} source={require('../Assets/Images/pref_loading.gif')} />
            </View>
        );
    };
    // End of Loader Function

    // Home ImageSlider Function 
    ImageSlider() {
        let sliderimage = ({ item, index }) => {
            return (
                <Image source={{ uri: item }} style={styles.Imagestyle} />
            );
        }
        return (
            <Carousel
                layout={'default'}
                ref={ref => this.carousel = ref}
                data={this.state.dataSource}
                sliderWidth={Diem.width}
                itemWidth={Diem.width}
                renderItem={sliderimage}
                inactiveSlideScale={1}
                autoplay={true}
                loop={true}
                autoplayInterval={3500}
            />
        );
    };
    // End of Home ImageSlider Function 

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    toggleModal2 = () => {
        this.setState({ isModalVisible2: !this.state.isModalVisible2 });
    };

    // Cairo Jazz Event Slider
    CjcEventSlider() {
        let EventSlider = ({ item, index }) => {
            return (
                <>
                    <TouchableOpacity onPress={this.toggleModal} activeOpacity={0.5} style={styles.EventImageCon}>
                        <Image source={require('../Assets/Images/whitecircle.png')} style={styles.WhiteCircle} />
                        <Image source={require('../Assets/Images/dateshape.png')} style={styles.DateCon} />
                        <Image source={require('../Assets/Images/dateshape.png')} style={styles.DateCon1} />
                        <View style={styles.TxtCon}>
                            <Text style={styles.EventTxt}>{item.EventDay} {item.EventDate.substring(0, 3)}</Text>
                        </View>
                        <Image source={{ uri: item.Image }} style={styles.EventImage} />
                    </TouchableOpacity>
                </>
            );
        }
        return (
            <>
                <Carousel
                    layout={'default'}
                    ref={ref => this.carousel = ref}
                    data={CjcEvents}
                    sliderWidth={Diem.width}
                    itemWidth={Diem.width * 0.5}
                    inactiveSlideScale={0.65}
                    renderItem={EventSlider}
                    loop={true}
                />
            </>
        );
    };
    // End of Cairo Jazz Event Slider


    // Cairo Jazz 610 Branch Event Slider
    Cjc610EventSlider() {
        let EventSlider = ({ item, index }) => {
            return (
                <TouchableOpacity onPress={this.toggleModal2} activeOpacity={0.5} style={styles.EventImageCon}>
                    <Image source={require('../Assets/Images/whitecircle.png')} style={styles.WhiteCircle} />
                    <Image source={require('../Assets/Images/dateshape.png')} style={styles.DateCon} />
                    <Image source={require('../Assets/Images/dateshape.png')} style={styles.DateCon1} />
                    <View style={styles.TxtCon}>
                        <Text style={styles.EventTxt}>{item.EventDay} {item.EventDate.substring(0, 3)}</Text>
                    </View>
                    <Image source={{ uri: item.Image }} style={styles.EventImage} />
                </TouchableOpacity>
            );
        }
        return (
            <Carousel
                layout={'default'}
                ref={ref => this.carousel = ref}
                data={Cjc610Events}
                sliderWidth={Diem.width}
                itemWidth={Diem.width * 0.5}
                inactiveSlideScale={0.65}
                renderItem={EventSlider}
                loop={true}
            />
        );
    };
    // End of Cairo Jazz 610 Branch Event Slider

    // Main Home Render
    render() {
        const { navigation } = this.props;  // To Handle navigate Between Screens
        return (
            <SafeAreaView>
                <ImageBackground source={require('../Assets/Images/MiniBk2.png')} style={styles.HomeBK}>

                    {/* Test Modal */}
                    <Modal isVisible={this.state.isModalVisible}>
                        <ImageBackground source={require('../Assets/Images/popup.png')} resizeMode='contain' style={{ width: Diem.width * 0.9, height: Diem.height * 0.9, alignItems: 'center' }}>
                            <View style={{ height: '100%', width: '100%', paddingHorizontal: '8%', paddingVertical: '10%' }}>
                                <View style={{ height: '100%', width: '100%' }}>
                                    <View style={{ flexDirection: 'row', height: '10%', width: '100%' }}>
                                        <View style={{ flex: 1, justifyContent: 'center' }}>
                                            <Image style={{ width: '60%', height: '60%', resizeMode: 'contain' }} source={require('../Assets/Images/cjcred.png')} />
                                        </View>
                                        <TouchableOpacity
                                            style={{ flex: 1, alignItems: 'flex-end' }}
                                            onPress={this.toggleModal}
                                        >
                                            <View style={{ height: '100%', width: '100%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                                <Image style={{ width: '40%', height: '60%', resizeMode: 'contain', position: 'absolute' }} source={require('../Assets/Images/xmark.png')} />
                                                <Image style={{ width: '40%', height: '40%', resizeMode: 'contain' }} source={require('../Assets/Images/close.png')} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <ScrollView style={{ height: '90%', width: '100%' }}>
                                        <View style={{ flexDirection: 'row', width: '100%', flexDirection: 'column' }}>
                                            <View style={{ width: '100%', justifyContent: 'center' }}>
                                                <Text style={{ color: '#772325', fontFamily: Fonts.MyriadProSemibold.fontFamily, fontSize: Fontsize.medium.fontSize }}>20-10-2019</Text>
                                            </View>
                                            <View>
                                                <Text style={{ fontFamily: Fonts.MyriadProSemibold.fontFamily, fontSize: Fontsize.mini.fontSize }}>Funky duo A-Squared return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each time, these nights always end up being filled with good vibes and great beats! Stay tuned to find out about thier partners in crime for the night ! Funky duo A-Squared return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each
                                                return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each time, these nights always end up being filled with good vibes and great beats! Stay tuned to find out about thier partners in crime for the night ! Funky duo A-Squared return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each time, these nights always end up being filled with good vibes and great beats! Stay tuned to find out about thier partners in crime for the night ! Funky duo A-Squared return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each time, these nights always end up being filled with good vibes and great beats! Stay tuned to find out about thier partners in crime for the night ! Funky duo A-Squared return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each time, these nights always end up being filled with good vibes and great beats! Stay tuned to find out about thier partners in crime for the night ! Funky duo A-Squared return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each time, these nights always end up being filled with good vibes and great beats! Stay tuned to find out about thier partners in crime for the night ! Funky duo A-Squared return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each time, these nights always end up being filled with good vibes and great beats! Stay tuned to find out about thier partners in crime for the night ! Funky duo A-Squared return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each time, these nights always end up being filled with good vibes and great beats! Stay tuned to find out about thier partners in crime for the night ! Funky duo A-Squared return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them eachtime</Text>
                                            </View>
                                        </View>
                                        <View style={{ width: '100%', flexDirection: 'column', marginTop: '5%' }}>
                                            <View style={{ width: '100%', justifyContent: 'center' }}>
                                                <Text style={{ color: '#772325', fontFamily: Fonts.MyriadProSemibold.fontFamily, fontSize: Fontsize.medium.fontSize }}>Performing Artists</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ flex: 1, height: Diem.height * 0.1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image style={{ width: '60%', height: '80%', borderRadius: 1000 }} source={require('../Assets/Images/Kshmr.jpg')} />
                                                </View>
                                                <View style={{ flex: 1, height: Diem.height * 0.1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image style={{ width: '60%', height: '80%', borderRadius: 1000 }} source={require('../Assets/Images/Kshmr.jpg')} />
                                                </View>
                                                <View style={{ flex: 1, height: Diem.height * 0.1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image style={{ width: '60%', height: '80%', borderRadius: 1000 }} source={require('../Assets/Images/Kshmr.jpg')} />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: '100%',height:Diem.height * 0.07, marginTop: '5%' }}>
                                            <TouchableOpacity
                                                onPress={this.toggleModal}
                                                style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Image
                                                    source={require('../Assets/Images/emptybutton.png')}
                                                    style={{ width: '30%', height: '80%' }}
                                                />
                                                <View style={{ position: 'absolute', width: '30%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: Fontsize.small.fontSize, color: 'white', fontFamily: 'AnyConv.com__MyriadPro-Regular', }}>Reserve</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>



                                    </ScrollView>
                                </View>
                            </View>
                        </ImageBackground>
                    </Modal>

                    <Modal isVisible={this.state.isModalVisible2}>
                        <ImageBackground source={require('../Assets/Images/popup.png')} resizeMode='contain' style={{ width: Diem.width * 0.9, height: Diem.height * 0.9, alignItems: 'center' }}>
                            <View style={{ height: '100%', width: '100%', paddingHorizontal: '8%', paddingVertical: '10%' }}>
                                <View style={{ height: '100%', width: '100%' }}>
                                    <View style={{ flexDirection: 'row', height: '10%', width: '100%' }}>
                                        <View style={{ flex: 1, justifyContent: 'center' }}>
                                            <Image style={{ width: '60%', height: '60%', resizeMode: 'contain' }} source={require('../Assets/Images/cjcred.png')} />
                                        </View>
                                        <TouchableOpacity
                                            style={{ flex: 1, alignItems: 'flex-end' }}
                                            onPress={this.toggleModal2}
                                        >
                                            <View style={{ height: '100%', width: '100%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                                <Image style={{ width: '40%', height: '60%', resizeMode: 'contain', position: 'absolute' }} source={require('../Assets/Images/xmark.png')} />
                                                <Image style={{ width: '40%', height: '40%', resizeMode: 'contain' }} source={require('../Assets/Images/close.png')} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <ScrollView style={{ height: '90%', width: '100%' }}>
                                        <View style={{ flexDirection: 'row', width: '100%', flexDirection: 'column' }}>
                                            <View style={{ width: '100%', justifyContent: 'center' }}>
                                                <Text style={{ color: '#772325', fontFamily: Fonts.MyriadProSemibold.fontFamily, fontSize: Fontsize.medium.fontSize }}>20-10-2019</Text>
                                            </View>
                                            <View>
                                                <Text style={{ fontFamily: Fonts.MyriadProSemibold.fontFamily, fontSize: Fontsize.mini.fontSize }}>Funky duo A-Squared return to our decks for onr of Js to share the decks with them each time, these nights always end up being filled with goodeturn to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them eachtime</Text>
                                            </View>
                                        </View>
                                        <View style={{ width: '100%', flexDirection: 'column', marginTop: '5%' }}>
                                            <View style={{ width: '100%', justifyContent: 'center' }}>
                                                <Text style={{ color: '#772325', fontFamily: Fonts.MyriadProSemibold.fontFamily, fontSize: Fontsize.medium.fontSize }}>Performing Artists</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ flex: 1, height: Diem.height * 0.1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image style={{ width: '60%', height: '80%', borderRadius: 1000 }} source={require('../Assets/Images/Kshmr.jpg')} />
                                                </View>
                                                <View style={{ flex: 1, height: Diem.height * 0.1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image style={{ width: '60%', height: '80%', borderRadius: 1000 }} source={require('../Assets/Images/Kshmr.jpg')} />
                                                </View>
                                                <View style={{ flex: 1, height: Diem.height * 0.1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image style={{ width: '60%', height: '80%', borderRadius: 1000 }} source={require('../Assets/Images/Kshmr.jpg')} />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: '100%',height:Diem.height * 0.07, marginTop: '5%' }}>
                                            <TouchableOpacity
                                                onPress={this.toggleModal2}
                                                style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Image
                                                    source={require('../Assets/Images/emptybutton.png')}
                                                    style={{ width: '30%', height: '80%' }}
                                                />
                                                <View style={{ position: 'absolute', width: '30%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: Fontsize.small.fontSize, color: 'white', fontFamily: 'AnyConv.com__MyriadPro-Regular', }}>Reserve</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>



                                    </ScrollView>
                                </View>
                            </View>
                        </ImageBackground>
                    </Modal>
                    {/* End of  Test Modal */}

                    {/* Home ImageSlider */}
                    <View style={styles.SliderView}>
                        {this.state.isLoading ? this.Loader() : this.ImageSlider()}
                    </View>
                    {/* End of Home ImageSlider */}

                    {/* Events Slider Container */}
                    <View style={styles.EventsCon}>
                        <Image style={styles.EventSliderBK} source={require('../Assets/Images/newfornow.png')} />
                        <View style={styles.EventSliderCon}>
                            <View style={styles.SwitchCon}>
                                <TouchableOpacity onPress={this.Load_New_Image} style={styles.SwitchConCom}>
                                    <Image style={styles.CjcButton} source={this.state.CJCpic} />
                                </TouchableOpacity>
                                <View style={styles.SwitchConCom}>
                                    <Image style={styles.CjcONOFFButton} source={this.state.ONOFFButton} />
                                </View>
                                <TouchableOpacity onPress={this.Load_New_Image2} style={styles.SwitchConCom}>
                                    <Image style={styles.CjcButton} source={this.state.CJC610pic} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.HeaderTitle}>
                                <Text style={styles.HeaderTxt}>Upcoming Events</Text>
                            </View>
                            <View style={styles.SliderCom}>
                                {this.state.CJCpic === require('../Assets/Images/cjc.png') ? this.CjcEventSlider() : this.Cjc610EventSlider()}
                            </View>
                        </View>
                    </View>
                    {/* End of Events Slider Container */}

                    {/* Footer View */}
                    <Footer FooterKind={this.state.FooterKind} />
                    {/* End of Footer View */}

                </ImageBackground>
            </SafeAreaView>
        );
    }
    // End of Main Home Render
};

const styles = StyleSheet.create({
    // Home Background Image
    HomeBK: {
        height: '100%',
        width: Diem.width,
        resizeMode: 'cover'
    },
    // End of Home Background Image

    // Home ImageSlider View
    SliderView: {
        height: Diem.height * 0.31,
        justifyContent: 'center',
        alignItems: 'center',

    },
    // End of Home ImageSlider View

    // Loader Image
    LoaderGif: {
        height: '20%',
        resizeMode: 'contain'
    },
    // End of Loader Image

    // Slider ImageStyle
    Imagestyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    // End of Slider ImageStyle

    // Events Container
    EventsCon: {
        height: Diem.height * 0.51,
    },
    EventSliderBK: {
        height: Diem.height,
        width: Diem.width,
        resizeMode: 'stretch',
        position: 'absolute',
        top: '-23.5%',
        zIndex: 1
    },
    // End of Events Container

    // Events Slider Container
    EventSliderCon: {
        height: '100%',
        width: '100%',
        zIndex: 2,
        alignItems: 'center'
    },
    // End of Events Container

    // Header Title
    HeaderTitle: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderTxt: {
        fontFamily: Fonts.Formal.fontFamily,
        fontSize: Fontsize.Homelarge.fontSize,
        color: Colors.Secondary.Color
    },
    // End of Header Title

    // Switch Button Container
    SwitchCon: {
        width: '80%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SwitchConCom: {
        flex: 1,
        alignItems: 'center',
    },
    CjcButton: {
        height: '50%',
        width: '70%',
        resizeMode: 'contain'
    },
    CjcONOFFButton: {
        height: '30%',
        width: '60%',
        resizeMode: 'contain'
    },
    // End of Switch Button Container

    // Slider Component View
    SliderCom: {
        height: '65%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    EventImageCon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 1000,
        borderTopRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
        borderWidth: 0,
    },
    WhiteCircle: {
        height: Diem.width * 0.53,
        width: Diem.width * 0.53,
        resizeMode: 'contain',
    },
    EventImage: {
        height: Diem.width * 0.465,
        width: Diem.width * 0.47,
        position: 'absolute',
        borderRadius: 2000,
        zIndex: 101
    },
    DateCon: {
        width: '42%',
        height: '45%',
        resizeMode: 'contain',
        position: 'absolute',
        top: '10%',
        left: '0%',
        tintColor: Colors.White.Color,
        zIndex: 102
    },
    DateCon1: {
        width: '39%',
        height: '40%',
        resizeMode: 'contain',
        position: 'absolute',
        top: '12.3%',
        left: '1.5%',
        zIndex: 103,
        tintColor: Colors.DataShape.Color
    },
    TxtCon: {
        width: '40%',
        height: '15%',
        position: 'absolute',
        top: '24.5%',
        left: '1.5%',
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    EventTxt: {
        fontSize: Fontsize.Date.fontSize,
        fontFamily: Fonts.MyriadProBold.fontFamily,
        color: Colors.White.Color,
        letterSpacing: 0
        // textTransform: 'uppercase'
    },
    // End of Slider Component View
});

export default Home;