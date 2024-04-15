import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryBox = () => {
    return (
        <TouchableOpacity style={styles.wrapper} activeOpacity={0.9}>
            <View style={styles.categoryHeader}>
                <View style={styles.categoryBox}></View>
                <Text style={styles.itemLeftText}>10</Text>
            </View>
            
            <Text style={styles.catogoryText}>Category</Text>
        </TouchableOpacity>

    
    );
}


const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000", // shadow color
        shadowOffset: {
            width: 0, // horizontal shadow
            height: 2, // vertical shadow
        },
        shadowOpacity: 0.25, // shadow opacity
        shadowRadius: 3.84, // blur radius
        elevation:5, // elevation for Android
    },
    categoryBox: {
        backgroundColor: 'seagreen',
        borderRadius: 10,
        width: 80,
        height: 21,
    },
    catogoryText: {
        marginTop: 10,
        marginLeft: 3,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    categoryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemLeftText: {
        backgroundColor: 'red',
        padding: 3,
        width: 25,
        borderRadius: 15, // Half of width/height
        color: 'white',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        textAlign: 'center', // Center text
        fontWeight: 'bold'
    },

});




export default CategoryBox;
