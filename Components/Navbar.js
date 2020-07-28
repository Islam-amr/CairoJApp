import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Linking, Text, SafeAreaView, ImageBackground, AsyncStorage } from 'react-native';
import { Diem, Fonts, Fontsize, Colors } from '../Constants/Theme';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisble: true,  //To handle NavMenu Toggle
            Menu: require('../Assets/Images/MenuMark33.png'),  //To handle NavMenu Button Toggle
            DataList: [],  //To Handle Data Come From Storage
            ShortName: null,  // To Short Last Name
        };
        this.GetData();  // Get Data Call Function
    }

    // Fetch Data Form Storage 
    GetData = async () => {
        try {
            let UserData = await AsyncStorage.getItem('UserData');
            // let UserToken = await AsyncStorage.getItem('UserToken');
            let Parsed = JSON.parse(UserData);
            this.setState({ DataList: Parsed });
            this.setState({ ShortName: this.state.DataList.UserLastName.substring(0, 1) + '.' });
            // console.log(UserToken);
        }
        catch (error) {
            console.log("error");
        }
    }
    // End of Fetch Data Form Storage 



    // Menu Button Toggle Function
    MenuButtonToggle() {
        if (this.state.isVisble) {
            this.setState({
                Menu: require('../Assets/Images/CloseXMark.png'),
                isVisble: false
            });
        } else {
            this.setState({
                Menu: require('../Assets/Images/MenuMark33.png'),
                isVisble: true
            })
        }
    };
    // End of Menu Button Toggle Function

    // Menu Render Function
    MenuRender() {
        return (
            <SafeAreaView style={styles.MenuView}>
                <ImageBackground source={require('../Assets/Images/onlybg.jpg')} style={styles.MenuBackGround}>
                    <View style={styles.LinksCon}>
                        <TouchableOpacity onPress={() => { this.props.options.navigate("HomeScreen"); this.setState({ isVisble: true, Menu: require('../Assets/Images/MenuMark33.png') }) }} style={styles.Link}>
                            <Text style={styles.MenuTxt}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.options.navigate("AboutScreen"); this.setState({ isVisble: true, Menu: require('../Assets/Images/MenuMark33.png') }) }} style={styles.Link}>
                            <Text style={styles.MenuTxt}>About Cjc</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.options.navigate("ScheduleScreen"); this.setState({ isVisble: true, Menu: require('../Assets/Images/MenuMark33.png') }) }} style={styles.Link}>
                            <Text style={styles.MenuTxt}>Schedule</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.options.navigate("ContactScreen"); this.setState({ isVisble: true, Menu: require('../Assets/Images/MenuMark33.png') }) }} style={styles.Link2}>
                            <Text style={styles.MenuTxt}>Contact Us</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    };
    // End of Menu Render Function


    // Main Navbar Render
    render() {
        return (
            <SafeAreaView>
                <ImageBackground style={styles.Navbar} source={require('../Assets/Images/MiniBk.png')}>
                    <View style={styles.UserImageandNameCon}>
                        <TouchableOpacity activeOpacity={0.4} style={styles.UserTouch}>
                            <Image style={styles.UserimageBorder} source={require('../Assets/Images/faceborder.png')} />
                            <Image style={styles.Userimage} source={{ uri: this.state.DataList.UserPicture }} />
                        </TouchableOpacity>
                        <Text style={styles.UserName}>{this.state.DataList.UserFirstName} {this.state.ShortName}</Text>
                    </View>
                    <View style={styles.NavCjcLogoCon}>
                        <Image style={styles.CjcImage} source={require('../Assets/Images/cairojazz.png')} />
                    </View>
                    <View style={styles.MenuButtonCon}>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => this.MenuButtonToggle()} style={styles.IconTouch}>
                            <Image style={styles.Icon} source={this.state.Menu} />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
                {/* to Toggle Menu  */}
                {!this.state.isVisble ? this.MenuRender() : <View>{null}</View>}

            </SafeAreaView>
        );
    }
    //End of Main Navbar Render
};

const styles = StyleSheet.create({
    // Navbar View
    Navbar: {
        height: Diem.height * 0.09,
        width: Diem.width,
        flexDirection: 'row',
    },
    UserImageandNameCon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        left: '1%'
    },
    UserimageBorder: {
        height: Diem.width * 0.11,
        width: Diem.width * 0.11,
        resizeMode: 'contain',
        borderRadius: 2000,
        position: 'absolute',
    },
    Userimage: {
        height: Diem.width * 0.105,
        width: Diem.width * 0.105,
        borderRadius: 2000,
    },
    UserName: {
        fontSize: Fontsize.mini.fontSize,
        color: Colors.Maroon.Color,
        fontFamily: Fonts.MyriadProSemibold.fontFamily
    },
    UserTouch: {
        height: '66%',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    NavCjcLogoCon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    CjcImage: {
        height: '80%',
        width: '100%',
        resizeMode: 'contain'
    },
    MenuButtonCon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    IconTouch: {
        width: '30%',
        height: '80%',
        marginRight: '5%',
        justifyContent: 'center',
        opacity: 0.7
    },
    Icon: {
        height: '35%',
        width: '100%',
        resizeMode: 'contain'
    },
    // End of Navbar View

    // Menu View
    MenuView: {
        width: Diem.width,
        height: Diem.height * 0.91,
    },
    MenuBackGround: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    LinksCon: {
        height: '50%',
        width: '100%'
    },
    Link: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: '14%',
        borderBottomColor: 'white',
        borderBottomWidth: 0.4
    },
    Link2: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: '14%'
    },
    MenuTxt: {
        color: Colors.Primary.Color,
        fontSize: Fontsize.Homelarge.fontSize,
        fontFamily: Fonts.Formal.fontFamily,
        textTransform: 'uppercase'
    }
    // End of Menu View

});

export default Navbar;