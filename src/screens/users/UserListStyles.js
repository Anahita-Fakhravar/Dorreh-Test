//User list styles 

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

export const UserListStyles = {

    loadingTxt: {
        alignSelf: 'center',
        marginTop: responsiveHeight(50),
        color: Colors.darkTheme,
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemContainer: {
        borderRadius: 10,
        width:responsiveWidth(96),
        alignSelf:'center',
        marginVertical: responsiveHeight(1),
        paddingHorizontal: responsiveScreenWidth(3),
        paddingVertical: responsiveHeight(1),
    },
    itemRowContainer: {
    
        flexDirection: 'row',
        marginVertical: responsiveHeight(1)
    },
    itemTitle: {
        color: Colors.txtOnLightTheme,
        fontSize: responsiveFontSize(2),
        width: responsiveWidth(40)
    },
    itemValue: {
        color: Colors.darkTheme,
        fontSize: responsiveFontSize(2),
        flex: 1,
        flexWrap: 'wrap',
    }

}