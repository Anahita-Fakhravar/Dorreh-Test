//Design custom topbar 

import React from 'react';
import { View, Text, StyleSheet,Platform} from 'react-native';
import {Colors} from '../assets/Colors';
import { responsiveHeight} from 'react-native-responsive-dimensions';
export const CustomTopBar = ({ title }) => {
    
    return (
        <View style={styles.topBarView}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    topBarView:{
        backgroundColor:Colors.darkTheme,
        height: Platform === 'ios' ? responsiveHeight(5):responsiveHeight(10) ,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:Colors.lightTheme,
        fontSize: 16,
    }
})