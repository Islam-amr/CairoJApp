// Package Import
import React, { Component } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, View, Text, Image, CheckBox, TextInput, ImageBackground, Button, AsyncStorage, FlatList } from 'react-native';
import { AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import DatePicker from 'react-native-datepicker';
// End of Package Import

// Screens,Theme,Components Import
import { Diem, Fontsize, Fonts, Colors } from '../Constants/Theme';
// End of Screens,Theme,Components Import

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: null,  //To Handle Facebook Id
            FBEmail: null,  //To Handle Facebook Email
            FirstName: null,  //To Handle Facebook First Name
            LastName: null,  //To Handle Facebook Last Name
            Picture: null,  //To Handle Facebook Profile Picture
            Email: null,  //To Handle Email
            Email_Error: null, //To Handle Email Error
            PhoneNumber: null, //To Handle Phone Number
            PhoneNumber_Error: null,
            Address: null, //To Handle Address
            Address_Error: null,
            FBEmail2: null,  //To Handle Facebook Email 2
            FBEmail2_Error: null,
            BirthDate: null,
            BirthDate_Error: null,
            TodayDate: null,
            dataSource: [],
            checked: false,
            check1000: false,
            check1001: false,
            check1: false,
            check2: false,
            check3: false,
            check4: false,
            check5: false,
            check6: false,
            check7: false,
            check8: false,
            check9: false,
            check10: false,
            check11: false,
            check12: false,
            check13: false,
            check14: false,
            check15: false,
            check15: false,
            check17: false,
            check18: false,
            check19: false,
            check20: false,
            check21: false,
            check22: false,
            check23: false,
            check24: false,
            check25: false,
            check26: false,
            check27: false,
            check28: false,
            check29: false,
            check30: false,
            check31: false,
            check32: false,
            check33: false,
            check34: false,
            check35: false,
            check36: false,
            check37: false,
            check38: false,
            VenueCheck: [],
            Venue_Error: null,
            Accestoken: null,
        };
    }

    // Fetch User Data From Facebook Api
    async componentDidMount() {
        try {
            const { setParams } = this.props.navigation;

            const currentAccessToken = await AccessToken.getCurrentAccessToken();
            const Accectoken = JSON.stringify(currentAccessToken.accessToken)
            this.setState({ AccessToken: Accectoken });
            // const Acces = await AccessToken.getCurrentAccessToken();
            // AsyncStorage.setItem('UserToken', this.state.AccessToken);
            const graphRequest = new GraphRequest('/me', {
                accessToken: currentAccessToken.accessToken,
                parameters: {
                    fields: {
                        string: 'picture.type(large),email,first_name,last_name',
                    },
                },
            }, (error, result) => {
                if (error) {
                    console.error(error)
                } else {
                    this.setState({ Id: result.id, FBEmail: result.email, FirstName: result.first_name, LastName: result.last_name, Picture: result.picture.data.url });
                    let UserData = {
                        UserId: this.state.Id,
                        UserFirstName: this.state.FirstName,
                        UserLastName: this.state.LastName,
                        UserFBEmail: this.state.FBEmail,
                        UserPicture: this.state.Picture,
                    };
                    AsyncStorage.setItem('UserData', JSON.stringify(UserData));
                    this.CheckRender()
                }
            })
            new GraphRequestManager().addRequest(graphRequest).start()
        } catch (error) {
            console.error(error)
        };


        let today = new Date();
        let dd = today.getDate();

        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd;
        this.setState({ TodayDate: today });

    };
    // End of Fetch User Data From Facebook Api


    CheckBoxTest1000() {
        this.setState({
            check1000: !this.state.check1000
        })
    };
    CheckBoxTest1001() {
        this.setState({
            check1001: !this.state.check1001
        })
    };

    CheckBoxTest1() {
        this.setState({
            check1: !this.state.check1
        })
    };

    CheckBoxTest2() {
        this.setState({
            check2: !this.state.check2
        })
    };
    CheckBoxTest3() {
        this.setState({
            check3: !this.state.check3
        })
    };
    CheckBoxTest4() {
        this.setState({
            check4: !this.state.check4
        })
    };
    CheckBoxTest5() {
        this.setState({
            check5: !this.state.check5
        })
    };
    CheckBoxTest6() {
        this.setState({
            check6: !this.state.check6
        })
    };
    CheckBoxTest7() {
        this.setState({
            check7: !this.state.check7
        })
    };
    CheckBoxTest8() {
        this.setState({
            check8: !this.state.check8
        })
    }

    CheckBoxTest9() {
        this.setState({
            check9: !this.state.check9
        })
    }
    CheckBoxTest10() {
        this.setState({
            check10: !this.state.check10
        })
    }
    CheckBoxTest11() {
        this.setState({
            check11: !this.state.check11
        })
    }
    CheckBoxTest12() {
        this.setState({
            check12: !this.state.check12
        })
    }
    CheckBoxTest13() {
        this.setState({
            check13: !this.state.check13
        })
    }
    CheckBoxTest14() {
        this.setState({
            check14: !this.state.check14
        })
    }
    CheckBoxTest15() {
        this.setState({
            check15: !this.state.check15
        })
    }
    CheckBoxTest16() {
        this.setState({
            check16: !this.state.check16
        })
    }
    CheckBoxTest17() {
        this.setState({
            check17: !this.state.check17
        })
    }
    CheckBoxTest18() {
        this.setState({
            check18: !this.state.check18
        })
    }
    CheckBoxTest19() {
        this.setState({
            check19: !this.state.check19
        })
    }
    CheckBoxTest20() {
        this.setState({
            check20: !this.state.check20
        })
    }
    CheckBoxTest21() {
        this.setState({
            check21: !this.state.check21
        })
    }
    CheckBoxTest22() {
        this.setState({
            check22: !this.state.check22
        })
    }
    CheckBoxTest23() {
        this.setState({
            check23: !this.state.check23
        })
    }
    CheckBoxTest24() {
        this.setState({
            check24: !this.state.check24
        })
    }
    CheckBoxTest25() {
        this.setState({
            check25: !this.state.check25
        })
    }
    CheckBoxTest26() {
        this.setState({
            check26: !this.state.check26
        })
    }
    CheckBoxTest27() {
        this.setState({
            check27: !this.state.check27
        })
    }
    CheckBoxTest28() {
        this.setState({
            check28: !this.state.check28
        })
    }
    CheckBoxTest29() {
        this.setState({
            check29: !this.state.check29
        })
    }
    CheckBoxTest30() {
        this.setState({
            check30: !this.state.check30
        })
    }
    CheckBoxTest31() {
        this.setState({
            check31: !this.state.check31
        })
    }
    CheckBoxTest32() {
        this.setState({
            check32: !this.state.check32
        })
    }
    CheckBoxTest33() {
        this.setState({
            check33: !this.state.check33
        })
    }
    CheckBoxTest34() {
        this.setState({
            check34: !this.state.check34
        })
    }
    CheckBoxTest35() {
        this.setState({
            check35: !this.state.check35
        })
    }
    CheckBoxTest36() {
        this.setState({
            check36: !this.state.check36
        })
    }
    CheckBoxTest37() {
        this.setState({
            check37: !this.state.check37
        })
    }

    CheckBoxTest38() {
        this.setState({
            check38: !this.state.check38
        })
    }

    goToTop = () => {
        this.scroll.scrollTo({ x: 0, y: 0, animated: true });
    }

    CheckRender = async () => {
        try {
            const response = await fetch(`https://cairojazzclub.com/wp-json/fbr/preference/user/merged/${this.state.Id}`);
            const responseJson = await response.json();
            this.setState({ dataSource: responseJson });
        } catch (error) {
            console.log("error");
        }
    }


    EmailValidation() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.Email) === true) {
            this.setState({ Email_Error: null });
            return true;
        } else {
            this.setState({ Email_Error: "* Please enter valid email" });
            return false;
        }
    };
    PhoneValidation() {
        const reg = /^0\d{10,10}$/;
        if (reg.test(this.state.PhoneNumber) === true) {
            this.setState({ PhoneNumber_Error: null })
            return true;
        } else {
            this.setState({ PhoneNumber_Error: "* Please enter valid phone number" });
            return false;
        }
    }
    AddressValidation() {
        if (this.state.Address !== null) {
            this.setState({ Address_Error: null })
            return true;
        } else {
            this.setState({ Address_Error: "* Please fill in your address" });
            return false;
        }
    }
    FBMailValidation() {
        if (this.state.FBEmail2 !== null) {
            this.setState({ FBEmail2_Error: null })
            return true;
        } else {
            this.setState({ FBEmail2_Error: "* Please fill in your facebook account" });
            return false;
        }
    }
    BirthDateValidation() {
        if (this.state.BirthDate !== null) {
            this.setState({ BirthDate_Error: null })
            return true;
        } else {
            this.setState({ BirthDate_Error: "* Please fill in your Birth date" });
            return false;
        }
    }
    Venuevaldation() {
        if (this.state.check1000 === false && this.state.check1001 === false) {
            return false;
        } else {
            return true;
        }
    }
    onSubmit = async () => {
        const { navigation } = this.props;
        this.EmailValidation();
        this.PhoneValidation();
        this.AddressValidation();
        this.FBMailValidation();
        this.BirthDateValidation();
        this.Venuevaldation();
        if (this.EmailValidation() === true && this.PhoneValidation() === true && this.AddressValidation() === true && this.FBMailValidation() === true && this.BirthDateValidation() === true & this.Venuevaldation() === true) {
            AsyncStorage.setItem('UserToken', this.state.AccessToken);
            navigation.navigate("HomeScreen");
        } else {
            this.goToTop();
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView>
                <ImageBackground style={styles.FormBackground} source={require('../Assets/Images/finalbeto.jpg')}>

                    {/* CairoJazz Logo */}
                    <View style={styles.CjcLogoCon}>
                        <Image style={styles.CjcImage} source={require('../Assets/Images/cairojazz.png')} />
                    </View>
                    {/* End of CairoJazz Logo */}
                    <ScrollView ref={(c) => { this.scroll = c }}>
                        <View style={styles.TxtinputHeaderCon}>
                            <View style={styles.HeaderCon}>
                                <Text style={styles.HeaderTxt}>Additional information </Text>
                            </View>
                            <View style={styles.TxtinputCon}>
                                <View style={styles.TxtView}>
                                    <TextInput style={this.state.Email_Error ? styles.Txtinput2 : styles.Txtinput}
                                        underlineColorAndroid="transparent"
                                        placeholder="Type your Email"
                                        placeholderTextColor="#24454a"
                                        autoCapitalize="none"
                                        onChangeText={(text) => { this.setState({ Email: text }) }}
                                    />
                                    <Text style={styles.Error}>{this.state.Email_Error}</Text>
                                </View>
                                <View style={styles.TxtView}>
                                    <TextInput style={this.state.PhoneNumber_Error ? styles.Txtinput2 : styles.Txtinput}
                                        underlineColorAndroid="transparent"
                                        placeholder="Type your Phone Number"
                                        keyboardType="number-pad"
                                        placeholderTextColor="#24454a"
                                        autoCapitalize="none"
                                        onChangeText={(text) => { this.setState({ PhoneNumber: text }) }}
                                    />
                                    <Text style={styles.Error}>{this.state.PhoneNumber_Error}</Text>
                                </View>
                                <View style={styles.TxtView}>
                                    <TextInput style={this.state.Address_Error ? styles.Txtinput2 : styles.Txtinput}
                                        underlineColorAndroid="transparent"
                                        placeholder="Type your Address"
                                        placeholderTextColor="#24454a"
                                        autoCapitalize="none"
                                        onChangeText={(text) => { this.setState({ Address: text }) }}
                                    />
                                    <Text style={styles.Error}>{this.state.Address_Error}</Text>
                                </View>
                                <View style={styles.TxtView}>
                                    <TextInput style={this.state.FBEmail2_Error ? styles.Txtinput2 : styles.Txtinput}
                                        underlineColorAndroid="transparent"
                                        placeholder="Type your Facebook Account"
                                        placeholderTextColor="#24454a"
                                        autoCapitalize="none"
                                        onChangeText={(text) => { this.setState({ FBEmail2: text }) }}
                                    />
                                    <Text style={styles.Error}>{this.state.FBEmail2_Error}</Text>
                                </View>
                                <View style={styles.TxtView}>
                                    <DatePicker
                                        style={this.state.BirthDate_Error ? styles.Txtinput2 : styles.Txtinput}
                                        date={this.state.BirthDate}
                                        mode="date"

                                        placeholder="Date of Birth"

                                        format="YYYY-MM-DD"
                                        minDate="1960-01-01"
                                        maxDate={this.state.TodayDate}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        showIcon={false}
                                        customStyles={{
                                            dateInput: {
                                                marginLeft: 0,
                                                color: "#24454a",
                                                borderWidth: 0,
                                                fontFamily: 'AnyConv.com__MyriadPro-Regular',
                                            },
                                            dateText: {
                                                color: "white",
                                                fontFamily: 'AnyConv.com__MyriadPro-Regular',
                                                fontSize: 16,
                                                width: '100%',


                                            },
                                            placeholderText: {
                                                color: "#24454a",
                                                fontFamily: 'AnyConv.com__MyriadPro-Regular',
                                                fontSize: 16,
                                                width: '100%'
                                            }
                                        }}
                                        onDateChange={(date) => { this.setState({ BirthDate: date }) }}
                                    />
                                    <Text style={styles.Error}>{this.state.BirthDate_Error}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.ChechBoxHeaderCon}>
                            <Text style={styles.HeaderTxt}>Venue of interest </Text>
                            <View style={styles.Txtinput2Con}>
                                <View style={styles.CheckboxVenue}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked2}
                                        value={this.state.check1000}
                                        onChange={() => this.CheckBoxTest1000()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>CJC</Text>
                                </View>
                                <View style={styles.CheckboxVenue}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked2}
                                        value={this.state.check1001}
                                        onChange={() => this.CheckBoxTest1001()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>610</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'column' }}>
                            <Text style={styles.HeaderTxt}>Choose Your Genre </Text>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check1}
                                        onChange={() => this.CheckBoxTest1()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>90's House</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check2}
                                        onChange={() => this.CheckBoxTest2()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>African</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check3}
                                        onChange={() => this.CheckBoxTest3()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Alternative</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check4}
                                        onChange={() => this.CheckBoxTest4()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Ambient</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check5}
                                        onChange={() => this.CheckBoxTest5()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Arabic</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check6}
                                        onChange={() => this.CheckBoxTest6()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Blues</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check7}
                                        onChange={() => this.CheckBoxTest7()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Classic Rock</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check8}
                                        onChange={() => this.CheckBoxTest8()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Contemporary</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check9}
                                        onChange={() => this.CheckBoxTest9()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Deep House</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check10}
                                        onChange={() => this.CheckBoxTest10()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Disco</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check11}
                                        onChange={() => this.CheckBoxTest11()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Electro</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check12}
                                        onChange={() => this.CheckBoxTest12()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Electro Shaabi</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check13}
                                        onChange={() => this.CheckBoxTest13()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Electronic</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check14}
                                        onChange={() => this.CheckBoxTest14()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Experimental</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check15}
                                        onChange={() => this.CheckBoxTest15()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Folk</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check16}
                                        onChange={() => this.CheckBoxTest16()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Funk</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check17}
                                        onChange={() => this.CheckBoxTest17()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Funk / Disco</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check18}
                                        onChange={() => this.CheckBoxTest18()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Fusion</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check19}
                                        onChange={() => this.CheckBoxTest19()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Gypsy Jazz</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check20}
                                        onChange={() => this.CheckBoxTest20()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>House</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check21}
                                        onChange={() => this.CheckBoxTest21()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Indie</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check22}
                                        onChange={() => this.CheckBoxTest22()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Jazz</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check23}
                                        onChange={() => this.CheckBoxTest23()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Latin Jazz</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check24}
                                        onChange={() => this.CheckBoxTest24()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Mahraganat</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check25}
                                        onChange={() => this.CheckBoxTest25()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Nu Disco</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check26}
                                        onChange={() => this.CheckBoxTest26()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Pop</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check27}
                                        onChange={() => this.CheckBoxTest27()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Progressive House</Text>

                                </View>

                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check28}
                                        onChange={() => this.CheckBoxTest28()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Rai</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check29}
                                        onChange={() => this.CheckBoxTest29()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Reggae</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check30}
                                        onChange={() => this.CheckBoxTest30()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>RnB/Hip Hop</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check31}
                                        onChange={() => this.CheckBoxTest31()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Rock</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check32}
                                        onChange={() => this.CheckBoxTest32()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Rock n' Roll</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check33}
                                        onChange={() => this.CheckBoxTest33()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Rockabilly</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check34}
                                        onChange={() => this.CheckBoxTest34()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Ska</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check35}
                                        onChange={() => this.CheckBoxTest35()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Soul</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check36}
                                        onChange={() => this.CheckBoxTest36()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Tech House</Text>

                                </View>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check37}
                                        onChange={() => this.CheckBoxTest37()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>Techno</Text>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                    <CheckBox
                                        center
                                        title='610'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checked}
                                        value={this.state.check38}
                                        onChange={() => this.CheckBoxTest38()}
                                        tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                    />
                                    <Text style={styles.CheckBoxTxt}>World Music</Text>

                                </View>
                            </View>

                        </View>
                        {/* <View>
                            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'column' }}>
                                <Text style={styles.HeaderTxt}>Choose Your Genre </Text>
                                <View style={{ width: '85%', flexDirection: 'row' }}>
                                    <FlatList
                                        data={this.state.dataSource}
                                        keyExtractor={item => item.itemId}
                                        horizontal={false}
                                        numColumns={2}
                                        renderItem={({ item, index }) => (
                                            <View key={this.state.dataSource[index].term_id} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '1%' }}>
                                                <CheckBox
                                                    center
                                                    title='610'
                                                    checkedIcon='dot-circle-o'
                                                    uncheckedIcon='circle-o'
                                                    checked={this.state.checked}
                                                    onPress={() =>  this.setState({checked:!this.state.checked})}
                                                    tintColors={{ true: '#FCB034', false: '#F2EAD8' }}
                                                />
                                                <Text style={styles.CheckBoxTxt}>{this.state.dataSource[index].name}</Text>
                                            </View>
                                        )}
                                    />
                                </View>
                            </View>
                        </View> */}


                        <View style={{ width: '100%', height: '100%', alignItems: 'center', marginVertical: '10%' }}>
                            <TouchableOpacity activeOpacity={0.6} style={styles.SubmitBtnCon} onPress={() => this.onSubmit()}>
                                <Image
                                    source={require('../Assets/Images/botton.png')}
                                    style={{ width: '100%', height: '100%' }}
                                />
                                <Text style={styles.SubmitTxt}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({

    //Form Background
    FormBackground: {
        height: Diem.height,
        resizeMode: 'contain'
    },
    // End of Form Background

    //CairoJazz Logo
    CjcLogoCon: {
        height: Diem.height * 0.125,
        justifyContent: 'center',
        alignItems: 'center'
    },
    CjcImage: {
        height: '70%',
        resizeMode: 'contain'
    },
    // End of CairoJazz Logo

    TxtinputHeaderCon: {
        height: Diem.height * 0.55,
    },
    HeaderCon: {
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderTxt: {
        fontSize: Fontsize.large.fontSize,
        fontFamily: Fonts.Formal.fontFamily,
        color: Colors.Secondary.Color,
    },
    TxtinputCon: {
        height: '85%',
        alignItems: 'center',
    },
    TxtView: {
        width: '85%',
        height: '20%',
    },
    Txtinput: {
        height: '70%',
        backgroundColor: '#557476',
        width: '100%',
        color: Colors.White.Color,
        fontFamily: Fonts.MyriadProRegular.fontFamily,
        fontSize: Fontsize.small.fontSize,
        paddingLeft: '5%',
        justifyContent:'center'
    },
    Txtinput2: {
        height: '70%',
        backgroundColor: '#557476',
        width: '100%',
        color: Colors.White.Color,
        fontFamily: Fonts.MyriadProRegular.fontFamily,
        fontSize: Fontsize.small.fontSize,
        paddingLeft: '5%',
        justifyContent:'center',
        borderColor: Colors.Primary.Color,
        borderWidth: 0.5
    },
    Error: {
        width: '100%',
        color: Colors.Primary.Color,
        left: '5%',
        height: '30%',
        fontSize: Fontsize.mini.fontSize,
    },
    ChechBoxHeaderCon: {
        height: Diem.height * 0.12,
        alignItems: 'center',
        marginVertical:'2%'
    },
    Header2Con: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Txtinput2Con: {
        flexDirection: 'row',
        height: '50%',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    CheckboxVenue: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    CheckBox: {
        height: '100%',
        borderColor: '#fff',
    },
    CheckBoxTxt: {
        fontFamily: Fonts.MyriadProRegular.fontFamily,
        fontSize: Fontsize.small.fontSize,
        color: '#F2EAD8'
    },
    SubmitBtnCon: {
        width: '30%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    SubmitTxt: {
        position: 'absolute',
        color: '#2f4e56',
        fontSize: Fontsize.large.fontSize,
        fontFamily: Fonts.MyriadProRegular.fontFamily
    }

});

export default Form;