import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button  } from 'react-native';
import { bookStore } from '../data/books';
import { useState } from 'react';
import * as React from 'react';
import { Card  } from 'react-native-paper';



export default function About({navigation}) {
    const [data, setData] = useState();

 
    const addingData = () => {
        console.log("Started");
        setData(bookStore);
    }

    const MyComponent = () => (
        <Card style={styles.imgCon}>
          <Card.Cover source={{ uri: 'https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA' }} style={styles.image} />
        </Card>
      );

     

    return (
        <View style={styles.container}>
           
            <Text style={styles.header}>Welcome to the dashboard</Text>
            <Button title="Show data" onPress={() => addingData()}/>
            {
            data && data.books.map((b, index) => {
                if(b.category.toLowerCase() == 'java') {
                    return(
                        <View style={styles.bookCon} key={index}>
                            <Text style={styles.bookTitle}>{b.title}</Text>
                            {
                                b.authors && b.authors.map((a, ind) => {
                                    return(
                                        <View style={styles.bookAuth} key={ind}>
                                           <Text> {a}</Text>
                                           
                                            </View>
                                            
    
                                    )
                                })
                            }
                            <View>
                           <MyComponent/>
                            </View>
                        </View>
                    )
                }
                }
            )
        }
        
   

        </View>
       
    );}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 250,
        height: 200
    },
    imgCon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    header: {
        fontSize: 30,
        marginBottom: 50,
        marginTop: -30,
        fontWeight: 'bold'
    },
    bookCon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bookTitle: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    bookAuth: {
        display: 'flex',
        flexDirection: 'row'
    }
});
