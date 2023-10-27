import React from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';

import colors from '../utils/colors';


export default function Form(props) {
    const {setNombre , setSalarioBase} = props;


    return (
        <View style={styles.viewForm}>
        <View style={styles.viewInputs}>
        <TextInput
        placeholder="Nombre del Empleado"
        keyboardType="default"
        style={styles.inputname}
        onChange={(e) => setNombre(e.nativeEvent.text)}
        />
        <TextInput
        placeholder="Salario Base"
        keyboardType="numeric"
        style={[styles.inputsalary, styles.inputPercentage]}
        onChange={(e) => setSalarioBase(e.nativeEvent.text)}
        />
        </View>
    
        </View>
        );
        }


        const styles = StyleSheet.create({
            viewForm: {
                        alignItems:'center',
                        alignContent:'center',
                        margin:15,
                        borderRadius: 30,
                        justifyContent: 'center',
                        },
            viewInputs: {
                        flexDirection: 'row',
                        alignContent:'center',
                        flex:1
                        },
            inputname: {
                        height: 60,
                        backgroundColor: '#fff',
                        flex:1,
                        alignItems:'center',
                        borderColor: colors.PRIMARY_COLOR,
                        borderRadius: 15,
                        width: Dimensions.get("window").width *0.4,
                        color: '#000',
                        paddingHorizontal: 20,
            },
            inputsalary: {
                            height: 60,
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: colors.PRIMARY_COLOR,
                            borderRadius: 15,
                            width: Dimensions.get("window").width *0.4,
                            color: '#000',
                            paddingHorizontal: 20,
                            },
    
            inputPercentage: {
                                width: '40%',
                                marginLeft: 5,
                                },
                });
const picketSelectStyles = StyleSheet.create({
inputIOS: {
fontSize: 16,
paddingVertical: 12,
paddingHorizontal: 10,
borderWidth: 1,
borderColor: 'grey',
borderRadius: 4,
color: 'black',
paddingRight: 30,
backgroundColor: '#fff',
marginLeft: -5,
marginRight: -5,
},
inputAndroid: {
fontSize: 16,
paddingHorizontal: 10,
paddingVertical: 8,
borderWidth: 0.5,
borderColor: 'grey',
borderRadius: 8,
color: 'black',
paddingRight: 30,
backgroundColor: '#fff',
},
});
