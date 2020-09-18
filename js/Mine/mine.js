/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Image} from 'react-native';
import MineCommonItem from './MineCommonItem';
export default class Mine extends Component<Props> {
    _renderNavBar(){
        return (
            <View style={styles.navViewStyle}>
                <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}> More </Text>
                <Image source = {require('../../res/images/icon_mine_setting.png')} style={styles.navImageStyle}/>
            </View>
        )
    }

    render(){
        return(
            <View>
                {this._renderNavBar()}
                <ScrollView>
                    <View style={{marginTop:10}}>
                        <MineCommonItem title={"扫一扫"}/>
                    </View>

                    <View style={{marginTop:10}}>
                        <MineCommonItem title={"再扫一扫"} isSwitch={true}/>
                        <MineCommonItem title={"忘记写了！"}/>
                        <MineCommonItem title={"一直扫"}/>
                        <MineCommonItem title={"列表测试"} rightTitle="2.99MB"/>
                    </View>
                    <View style={{marginTop:10}}>
                        <MineCommonItem title={"这是第一条"}/>
                        <MineCommonItem title={"第二条啦"}/>
                        <MineCommonItem title={"第三条"} isSwitch={true}/>
                        <MineCommonItem title={"丑陋的列表项"}/>
                    </View>
                    <View style={{marginTop:10}}>
                        <MineCommonItem title={"最后几条"}/>
                        <MineCommonItem title={"右边文字"} rightTitle="wenzhi"/>
                        <MineCommonItem title={"最后一条"}/>
                    </View>
                </ScrollView>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    navImageStyle:{
        position:'absolute',
        right:10,
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },
    navViewStyle:{
        backgroundColor:'rgba(255,96,0,1.0)',
        height:50,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
