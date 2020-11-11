/*Design user list flatlist*/

import React from 'react';
import { Animated, FlatList } from 'react-native';
import { UserListCardItem } from './UserListCardItem';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const UserListUi = ({ listData }) => {

    const y = new Animated.Value(0);
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
        useNativeDriver: true,
    });

    return (
        <AnimatedFlatList
            scrollEventThrottle={20}
            bounces={false}
            data={listData}
            renderItem={({ item, index }) => {
                return (

                    <UserListCardItem item={item} index={index} y={y} />
                );
            }}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            horizontal={false}
            {...{ onScroll }}
        />

    )
}
export default UserListUi
