import { View, Text, StyleSheet } from "react-native"

export default function Header(){
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Categories</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        marginLeft:22,
        marginRight:22,
        marginTop:20,
        borderBottomWidth: 1,
        borderBottomColor: '#dadada',
        paddingBottom:5,
    },
    headerText:{
        fontSize:25,
        fontWeight:"bold",
        color:"#606060"
    }
})