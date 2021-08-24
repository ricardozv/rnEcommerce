import React from 'react';
import {  StyleSheet, ScrollView, View, Text, Image,  } from 'react-native';

const HomeScreen = () => {
    return (
        
        <ScrollView style={styles.scrollView}>
                <View style= {styles.page}>
                <View style ={styles.root}>  
                
                    <View>
                        <Image style = {styles.image} source ={{uri:'https://imagekank.s3.amazonaws.com/haineken.png' }} />
                    </View>
                    
                    <View style = {styles.rightContainer }> 
                            <Text style ={ styles.title} numberOfLines ={3}>Produto duto duto duto duto duto duto duto </Text>
                            <Text style ={ styles.price}>Por R$ 99.90</Text>
                    </View>
                </View>
                </View>
        
        </ScrollView>
     
    );
};

const styles = StyleSheet.create({
    scrollView: {
    backgroundColor: 'pink',

  },
  
    page: {
        width: '100%',
        padding: 5,
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
      fontSize: 22,
    },
   
}); 

export default HomeScreen;  

