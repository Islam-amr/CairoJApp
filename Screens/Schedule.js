// Package Import
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import Carousel, { Pagination } from 'react-native-snap-carousel';
// End of Package Import

// Screens,Theme,Components Import
import { Diem, Colors, Fontsize, Fonts } from '../Constants/Theme';
import Footer from '../Components/Footer';
import { CjcScheduleEvents, Cjc610ScheduleEvents } from '../Mocks/TemporaryEvents';
// End of Screens,Theme,Components Import



class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CJCpic: require('../Assets/Images/cjc.png'),  //CairoJazz Button Logo 
            ONOFFButton: require('../Assets/Images/buttonON.png'),  //Switch Button
            CJC610pic: require('../Assets/Images/610OFF.png'),  //CairoJazz 610 Branch Button Logo 
            FooterKind: null, //Footer Kind Passing To Child
            activeTab: 0,  //To Handle Cjc Events
            activeTab2: 0  //To Handle Cjc 610 Branch Events
        }
    }

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

    // Current And Next Month Getter
    MonthGetter() {
        const Months = ["JANUARY", "FEBRUARY", "MARCH", "MAR", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        let CMonthNo = new Date().getMonth() + 1;
        let CMonthName = Months[CMonthNo];
        let NMonthName = Months[CMonthNo + 1 > 11 ? CMonthNo = 0 : CMonthNo = CMonthNo + 1];
        let TwoMonths = [CMonthName, NMonthName];
        let MonthsData = TwoMonths.map((MonthData, key) => {
            return (
                <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} key={key}>
                    <Text style={styles.DateStyle}>{MonthData}</Text>
                </View>
            )
        });
        return (
            <Swiper
                showsButtons
                loop={true}
                prevButton={
                    <Image source={require('../Assets/Images/monthbutton1.png')} style={styles.PrevButton} />
                }
                nextButton={
                    <Image source={require('../Assets/Images/monthbutton2.png')} style={styles.NextButton} />
                }
                dot={<View style={{ opacity: 0 }} />}
                activeDot={<View style={{ opacity: 0 }} />}
            >
                {MonthsData}
            </Swiper>
        );
    }
    // End of Current And Next Month Getter

    // Cairo Jazz Event Slider
    CjcScheduleEventSlider() {
        let EventSlider = ({ item, index }) => {
            return (
                <>
                    <View style={styles.DayCon}>
                        <Text style={styles.DayTxt}>{item.EventDay}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.6} style={styles.EventImageCon}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <Image style={styles.EventImage} source={{ uri: item.Image }} />
                            <View style={styles.WhiteCircleCon}>
                                <Image source={require('../Assets/Images/whitecircle.png')} style={styles.WhiteCircle} />
                                <Image source={require('../Assets/Images/blackcircle.png')} style={styles.MaroonCircle} />
                                <Text style={styles.EventDate}>{item.EventDayNum}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </>
            );
        }
        return (
            <Carousel
                layout={'default'}
                ref={ref => this.carousel = ref}
                data={CjcScheduleEvents}
                sliderWidth={Diem.width}
                itemWidth={Diem.width * 0.78}
                inactiveSlideScale={0.999}
                renderItem={EventSlider}
                loop={true}
                inactiveSlideOpacity={0.8}
                onSnapToItem={(index) => this.setState({ activeTab: index })}
            />
        );
    };
    get pagination() {
        const activeSlide = this.state;
        return (
            <Pagination
                dotsLength={CjcScheduleEvents.length}
                activeDotIndex={this.state.activeTab}
                containerStyle={{ width: '100%' }}
                dotStyle={styles.ActiveDot}
                inactiveDotStyle={styles.InactiveDot}
                inactiveDotScale={1}
                inactiveDotOpacity={0.4}
            />
        );
    }
    // End of Cairo Jazz Event Slider

    // Cairo Jazz 610 Branch Event Slider
    Cjc610ScheduleEventSlider() {
        let EventSlider = ({ item, index }) => {
            return (
                <>
                    <View style={styles.DayCon}>
                        <Text style={styles.DayTxt}>{item.EventDay}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.6} style={styles.EventImageCon}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <Image style={styles.EventImage} source={{ uri: item.Image }} />
                            <View style={styles.WhiteCircleCon}>
                                <Image source={require('../Assets/Images/whitecircle.png')} style={styles.WhiteCircle} />
                                <Image source={require('../Assets/Images/blackcircle.png')} style={styles.MaroonCircle} />
                                <Text style={styles.EventDate}>{item.EventDayNum}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </>
            );
        }
        return (
            <Carousel
                layout={'default'}
                ref={ref => this.carousel = ref}
                onSnapToItem={i => this.setState({ activeTab2: i })}
                data={Cjc610ScheduleEvents}
                sliderWidth={Diem.width}
                itemWidth={Diem.width * 0.78}
                inactiveSlideScale={0.999}
                renderItem={EventSlider}
                loop={true}
                inactiveSlideOpacity={0.8}
                onSnapToItem={(index) => this.setState({ activeTab2: index })}
            />
        );
    };
    get pagination2() {
        const activeSlide = this.state;
        return (
            <Pagination
                dotsLength={Cjc610ScheduleEvents.length}
                activeDotIndex={this.state.activeTab2}
                containerStyle={{ width: '100%' }}
                dotStyle={styles.ActiveDot}
                inactiveDotStyle={styles.InactiveDot}
                inactiveDotScale={1}
            />
        );
    }
    // End of Cairo Jazz 610 Branch Event Slider

    // Main Schedule Render
    render() {
        const { navigation } = this.props;
        return (
            <ImageBackground source={require('../Assets/Images/onlybg.jpg')} style={styles.ScheduleBK}>

                {/* Schedule Header */}
                <View style={styles.ScheduleHeaderCon}>
                    <Text style={styles.HeaderTitle}>Calendar</Text>
                </View>
                {/* End of Schedule Header */}

                {/* Switch Buttons */}
                <View style={styles.ScheduleHeaderCon2}>

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
                </View>
                {/* End of Switch Buttons */}

                {/* Month Swiper */}
                <View style={styles.MonthSwiperCon}>
                    <View style={styles.MonthSwiperConmin}>
                        {this.MonthGetter()}
                    </View>
                </View>
                {/* End of  Month Swiper */}

                {/* Schedule Events */}
                <View style={styles.ScheduleEventsCon}>
                    {this.state.CJCpic === require('../Assets/Images/cjc.png') ? this.CjcScheduleEventSlider() : this.Cjc610ScheduleEventSlider()}
                </View>
                {/* End of  Schedule Events */}

                {/* Pengation View */}

                {/* <View style={styles.PengationCon}>
                    {this.state.CJCpic === require('../Assets/Images/cjc.png') ? this.pagination : this.pagination2}
                </View> */}
                {/* End of Pengation View */}


                {/* Footer View */}
                <Footer FooterKind={this.state.FooterKind} />
                {/* End of Footer View */}

            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({

    // About Background View
    ScheduleBK: {
        height: '100%',
        width: Diem.width,
        resizeMode: 'cover'
    },
    // End of About Background View

    // Schdule Title

    ScheduleHeaderCon: {
        height: Diem.height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ScheduleHeaderCon2: {
        height: Diem.height * 0.12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderTitle: {
        fontSize: Fontsize.Homelarge.fontSize,
        fontFamily: Fonts.Formal.fontFamily,
        color: Colors.AboutHeader.Color,
    },
    // End of Schdule Title

    // Switch Button Container
    SwitchCon: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SwitchConCom: {
        flex: 1,
        alignItems: 'center',
    },
    CjcButton: {
        height: '60%',
        width: '80%',
        resizeMode: 'contain'
    },
    CjcONOFFButton: {
        height: '45%',
        width: '65%',
        resizeMode: 'contain'
    },
    // End of Switch Button Container

    // Month Swiper Container
    MonthSwiperCon: {
        height: Diem.height * 0.1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    MonthSwiperConmin: {
        height: Diem.height * 0.1,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    DateStyle: {
        fontSize: Fontsize.xlarge.fontSize,
        color: Colors.White.Color,
        fontFamily: Fonts.MyriadProRegular.fontFamily,
        textTransform: 'uppercase'
    },
    NextButton: {
        height: Diem.height * 0.035,
        width: Diem.height * 0.03,
    },
    PrevButton: {
        height: Diem.height * 0.035,
        width: Diem.height * 0.03,
    },
    // End of Month Swiper Container

    // Event Slider & Pengation Container
    ScheduleEventsCon: {
        height: Diem.height * 0.5,
        // height: Diem.height * 0.46,    //Old Height
    },
    DayCon: {
        backgroundColor: Colors.Footer.Color,
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    DayTxt: {
        color: Colors.SchduleDay.Color,
        fontSize: Fontsize.large.fontSize,
        fontFamily: Fonts.MyriadProRegular.fontFamily,
        textTransform: 'uppercase'
    },
    EventImageCon: {
        height: '85%',
        width: '100%',
        alignItems: 'center',
    },
    EventImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    WhiteCircleCon: {
        height: '15%',
        width: '20%',
        resizeMode: 'contain',
        position: 'absolute',
        left: '75%',
        top: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    WhiteCircle: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    MaroonCircle: {
        height: '97%',
        width: '97%',
        resizeMode: 'contain',
        position: 'absolute',
        tintColor: Colors.Maroon.Color
    },
    EventDate: {
        color: Colors.White.Color,
        fontSize: Fontsize.large.fontSize,
        fontFamily: Fonts.MyriadProBold.fontFamily,
        position: 'absolute',
    },
    PengationCon: {
        height: Diem.height * 0.1,
        width: Diem.width
    },
    ActiveDot: {
        width: Diem.width * 0.035,
        height: Diem.width * 0.035,
        borderRadius: 1000,
        backgroundColor: Colors.Maroon2.Color,
    },
    InactiveDot: {
        width: Diem.width * 0.03,
        height: Diem.width * 0.03,
        borderRadius: 1000,
        backgroundColor: Colors.Black2.Color
    },
    // End of Event Slider & Pengation Container

});

export default Schedule;