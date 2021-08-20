import React from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native';


const HomeScreen = () => {
    return (
        <View style= {styles.page}>
        <View style ={styles.root}>  
           
            <View>
                <Image style = {styles.image} source ={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg' }} />
            </View>
            
            <View style = {styles.rightContainer }> 
                    <Text style ={ styles.title} numberOfLines ={3}>Produto duto duto duto duto duto duto duto </Text>{/* Render Product Component   /* Tela para renderização de componente */}
                    <Text style ={ styles.price}>Por R$ 99.90</Text>
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        width: '100%',
        padding: 10,
    },
    root: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 2,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '95%',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    rightContainer: {
        padding: 15,
        width: '100%'
    },
    title: {
        fontSize: 18,
        width: '50%'
       
    },
    price: {
       
    }
})

export default HomeScreen;