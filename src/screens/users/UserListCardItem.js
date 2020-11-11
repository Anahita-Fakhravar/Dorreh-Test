//Design user list card item 

import React from 'react';
import { View, Text, Animated } from 'react-native';
import { UserListStyles } from './UserListStyles';
import { Strings } from './../../assets/Strings';
import { Colors } from '../../assets/Colors';
import { responsiveHeight } from 'react-native-responsive-dimensions';


export const UserListCardItem = ({ item, index, y }) => {

    const position = Animated.subtract(index * responsiveHeight(20), y);
    const isDisappearing = -responsiveHeight(20);
    const isTop = 0;
    const isBottom = responsiveHeight(100) - responsiveHeight(20);
    const isAppearing = responsiveHeight(100);

    const translateY = Animated.add(y, y.interpolate({
        inputRange: [0, index * responsiveHeight(20)],
        outputRange: [0, -index * responsiveHeight(20)],
        extrapolateRight: "clamp"
    }))

    const scale = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolate: "clamp",
    });

    console.log('translateY', index,)
    function _rowUi(title, value) {

        return (
            <View style={UserListStyles.itemRowContainer}>
                <Text style={UserListStyles.itemTitle}>{title}: </Text>
                <Text style={UserListStyles.itemValue}>{value}</Text>
            </View>
        )
    }

    return (

        <Animated.View style={[UserListStyles.itemContainer,
        {
            backgroundColor: Colors.listColorArray[index % Colors.listColorArray.length],
            transform: [{ translateY }, { scale }]
        }]}>

            {_rowUi(Strings.fullName, item.name)}
            {_rowUi(Strings.email, item.email)}
            {_rowUi(Strings.company, item.company.name)}

        </Animated.View>
    )
}

