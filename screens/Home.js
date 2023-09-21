import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { RadioButton, Text } from 'react-native-paper';
import * as React from 'react';



export default function Home({navigation}) {
    const [number, setNumber] = useState(1);

    const check = () => {
        if(number == 1) {
          console.log("ONE");
        } else if(number == 2) {
          console.log("TWO");
        } else if(number == 3) {
          navigation.push('About');
        }
        setNumber(number + 1);
      }

      const MyComponent = () => {
        const [value, setValue] = React.useState('first');
      
        return (
          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View style={styles.radioBtn}>
            <RadioButton value="first" />
              <Text>DashBoard</Text>
            </View>
            <View style={styles.radioBtn}>
            <RadioButton value="second" />
              <Text>Recommended</Text>
            </View>
          </RadioButton.Group>
        );
      };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to Your Library</Text>
            <Text style={styles.subHeader}>Uncover Your:</Text>
           <View style={styles.btnGroup} >
           <MyComponent/>
            </View> 
            <TouchableOpacity onPress={() => check()}
                              style={ number === 1 ? styles.btnBlue : 
                                     number === 2 ? styles.btnRed : 
                                     styles.btnGreen}>
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBlue: {
        backgroundColor: '#63C5DA',
        alignItems: 'center',
        borderColor: '#63C5DA',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    btnRed: {
        backgroundColor: '#800000',
        alignItems: 'center',
        borderColor: '#800000',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    btnGreen: {
        backgroundColor: '#00563B',
        alignItems: 'center',
        borderColor: '#00563B',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: -100
    },
    subHeader: {
        fontSize: 20,
        marginTop: 70,
        marginBottom: 20,
    },
    radioBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnGroup: {
        marginBottom: 20
    }
});
