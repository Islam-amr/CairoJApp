import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native';
import { Diem, Fonts, Fontsize, Colors } from '../Constants/Theme';
import Swiper from 'react-native-swiper';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import Navbar from '../Components/Navbar';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,  // API Call Loading 
            dataSource: [],   // Handle Data From API
        };
    };

    // Intro ImageSlider API Fetch Call
    async componentDidMount() {
        try {
            const response = await fetch('https://cairojazzclub.com/wp-json/cjc/appslider/images');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson.slider_images,
            });
        }
        catch (error) {
            console.log("error");
        }
    };
    // End of Intro ImageSlider API Fetch Call

    // Loader Function 
    Loader() {
        return (
            <View style={styles.LoaderCon}>
                <Image style={styles.LoaderGif} source={require('../Assets/Images/pref_loading.gif')} />
            </View>
        );
    };
    // End of Loader Function 

    // Intro ImageSlider Function 
    ImageSlider() {
        let sliderimage = this.state.dataSource.map((slider_images, key) => {
            return (
                <View key={key} style={styles.ImageSliderCon}>
                    <Image style={styles.ImageSlider} source={{ uri: slider_images }} />
                </View>
            )
        });
        return (
            <Swiper
                autoplay={true}
                dot={<View style={styles.outerCircle}>
                    <View style={styles.innerCircle} />
                </View>}
                activeDot={<View style={styles.outerCircle}>
                    <View style={styles.innerActiveCircle} />
                </View>}
            >
                {sliderimage}
            </Swiper>
        )
    };
    // End of Intro ImageSlider Function 


    // Facebook Login Function 
    _FbLogin = () => {
        const { navigation } = this.props;
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(
            async function (result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");

                } else {
                    console.log("Login success with permissions: " + result.grantedPermissions.toString());
                    navigation.navigate('FormScreen');
                }

            },
            function (error) {
                console.log("Login fail with error: " + error);
            }
        )

    };
    // End of Facebook Login Function 

    // _FbLoginInfo = () => {
    //     try {
    //         const currentAccessToken =AccessToken.getCurrentAccessToken()

    //         const graphRequest = new GraphRequest('/me', {
    //             accessToken: currentAccessToken.accessToken,
    //             parameters: {
    //                 fields: {
    //                     string: 'picture.type(large),email,first_name,last_name',
    //                 },
    //             },
    //         }, (error, result) => {
    //             if (error) {
    //                 console.error(error)
    //             } else {
    //                 this.setState({ UserFacebookData: result });
    //                 console.log(this.state.UserFacebookData)
    //             }
    //         })

    //         new GraphRequestManager().addRequest(graphRequest).start()
    //     } catch (error) {
    //         console.error(error)
    //     }
    // };

    //Main Intro Render Function
    render() {
        const { navigation } = this.props;  // To Handle navigate Between Screens
        return (
            <SafeAreaView>
                <ImageBackground style={styles.IntroBackground} source={require('../Assets/Images/newbgg.jpg')}>

                    {/* CairoJazz Logo */}
                    <View style={styles.CjcLogoCon}>
                        <Image style={styles.CjcImage} source={require('../Assets/Images/cairojazz.png')} />
                    </View>
                    {/* End of CairoJazz Logo */}

                    {/* ImageSlider */}
                    <View style={styles.ImageSliderCon}>
                        {this.state.isLoading ? this.Loader() : this.ImageSlider()}
                    </View>
                    {/* End of ImageSlider */}

                    {/* Facebook Login */}
                    <View style={styles.LoginBtnCon}>
                        <TouchableOpacity activeOpacity={0.6}
                            onPress={() => {
                                this._FbLogin()
                            }} style={styles.LoginBtn}>
                            <View style={styles.LoginFacebookLogoCon}>
                                <Image style={styles.LoginfacebookLogo} source={require('../Assets/Images/facebooktrans.png')} />
                                <View style={styles.HotLineCon}>
                                    <Image style={styles.HorLine} source={require('../Assets/Images/shape.png')} />
                                </View>
                            </View>
                            <View style={styles.LoginBtnTxtCon}>
                                <Text style={styles.LoginBtnTxt}>Sign in with facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.DontWorryCon}>
                            <Image style={styles.infoImage} source={require('../Assets/Images/info.png')} />
                            <Text style={styles.DontWorryText}> We do not post anything to Facebook </Text>
                        </View>
                    </View>
                    {/* End of Facebook Login */}

                </ImageBackground>
            </SafeAreaView>
        );
    }
    //End of Main Intro Render Function
}

const styles = StyleSheet.create({
    // Main Background View
    IntroBackground: {
        height: Diem.height,
        resizeMode: 'cover'
    },
    //End of Main Background View

    // Cairo Jazz Intro Logo
    CjcLogoCon: {
        width: Diem.width,
        height: Diem.height * 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    CjcImage: {
        height: '50%',
        resizeMode: 'contain'
    },
    // End of Cairo Jazz Intro Logo

    // Intro Image Slider
    LoaderCon: {
        height: Diem.height * 0.6,
        width: Diem.width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoaderGif: {
        height: '15%',
        resizeMode: 'contain'
    },
    ImageSliderCon: {
        height: Diem.height * 0.6,
        width: Diem.width,
    },
    ImageSlider: {
        height: '90%',
        resizeMode: 'contain',
    },
    outerCircle: {
        borderRadius: 13 / 2,
        width: 13,
        height: 13,
        backgroundColor: '#696971',
        marginHorizontal: 7,
        marginTop: '100%',
    },
    innerCircle: {
        borderRadius: 8.5 / 2,
        width: 8.5,
        height: 8.5,
        backgroundColor: Colors.White.Color,
        overflow: 'hidden',
        margin: 2.2
    },
    innerActiveCircle: {
        borderRadius: 8.5 / 2,
        width: 8.5,
        height: 8.5,
        margin: 2.2,
        backgroundColor: Colors.Primary.Color,
        overflow: 'hidden'
    },
    // End of Intro Image Slider

    // Login Button
    LoginBtnCon: {
        width: Diem.width,
        height: Diem.height * 0.2,
        alignItems: 'center'
    },
    LoginBtn: {
        width: Diem.width * 0.54,
        height: 45,
        backgroundColor: Colors.Facebook.Color,
        marginTop: '5%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    LoginFacebookLogoCon: {
        height: '100%',
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    LoginfacebookLogo: {
        height: '60%',
        width: '60%',
        resizeMode: 'contain',
    },
    LoginBtnTxtCon: {
        height: '100%',
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '5%',
    },
    HotLineCon: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    HorLine: {
        // fontSize: Fontsize.xxlarge.fontSize,
        // color: Colors.FacebookLine.Color,
        height: '70%'
    },
    LoginBtnTxt: {
        fontSize: Fontsize.FacebookCustom.fontSize,
        color: Colors.White.Color,
        fontFamily: Fonts.MyriadProSemibold.fontFamily,
    },
    DontWorryCon: {
        height: '30%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoImage: {
        width: 20,
        height: '100%',
        resizeMode: 'contain',
        marginHorizontal: '1%'
    },
    DontWorryText: {
        color: Colors.Black.Color,
        fontFamily: Fonts.MyriadProRegular.fontFamily,
        fontSize: Fontsize.mini.fontSize
    }
    // End of Login Button
});

export default Intro;