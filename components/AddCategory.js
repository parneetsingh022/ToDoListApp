import React, { useState, useEffect } from 'react';
import { View,Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import themeColors from '../Colors';

export default function AddCategory(){
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const onPressHandler = () => {
        setCategory("")
    }

    useEffect(() => {
        if (category && !/^[a-z0-9 ]+$/i.test(category)) {
            setError("Only alphabets and numbers are allowed in name!!");
        } else if (category.toLowerCase().trim() == "category") {
            setError("This category already exists!");
        } else {
            setError("");
        }
    }, [category])

    return (
        <View style={styles.addCategory}>
            <TextInput
                style={styles.inputBox}
                placeholder="Create Category"
                onChangeText={text => setCategory(text)}
                placeholderTextColor={themeColors.secondaryText}
                value={category}
                maxLength={20}
            />
            {error && <Text style={styles.error}>{error}</Text>}
            {(category && !error) &&
            <TouchableOpacity style={styles.buttonContainer} onPress={onPressHandler}>
                <Icon name="plus-circle" size={20} color="#fff" />
            </TouchableOpacity>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    addCategory:{
        marginLeft:20,
        marginRight:20,
        marginTop:20,
    },

    inputBox:{ 
        height: 40, 
        borderColor: themeColors.borderColor,
        backgroundColor:themeColors.borderColor,
        color:themeColors.secondaryText,
        borderRadius:10, 
        borderWidth: 1,
        padding:10
    },
    buttonContainer:{
        marginTop:8,
        backgroundColor:themeColors.themeBlue,
        padding:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    error:{
        color:'red',
        margin:4,
        fontSize:16,
    }
})