

import React from "react";
import { View, StyleSheet} from "react-native";

const Layout = ({children}) =>{
    return <View style={styles.container}>{children}</View>
    
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'whitesmoke',
        padding: 5,
        flex: 1, 
        justifyContent: 'center',
        margin: 0

    }

})

export default Layout;