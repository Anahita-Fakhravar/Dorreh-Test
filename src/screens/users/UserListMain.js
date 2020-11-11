/* User list data has been fetched in this component 
and its ui will render
*/
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native'
import UserListUi from './UserListUi';
import { CustomTopBar } from '../../components/CustomTopBar';
import { Strings } from './../../assets/Strings';
import { UserListStyles } from './UserListStyles';

const USerListMain = () => {

    const [isLoading, setLoading] = useState(true);
    const [listData, setListData] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                res.json().then((json) => {
                    setListData(json)
                })
            }).catch((error) => console.error('error on fetch', error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTopBar title={Strings.userList} />
            { isLoading ?
                <Text style={UserListStyles.loadingTxt}>Loading...</Text>
                : <UserListUi listData={listData} />}
        </SafeAreaView>
    )
}
export default USerListMain;