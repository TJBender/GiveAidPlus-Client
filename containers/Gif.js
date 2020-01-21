import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native'

const Gif = () => {

    let randomGifs = [
         'https://media3.giphy.com/media/tJMHfE1mF0I0jU4h9s/source.gif',
         'https://media.giphy.com/media/3otPoUkg3hBxQKRJ7y/giphy.gif',
         'https://media3.giphy.com/media/QaXcpBEQRfD9pR3zk5/giphy.gif',
         'https://media.giphy.com/media/1kJXHfUaBRQPn3gL55/giphy.gif',
         'http://31.media.tumblr.com/88ee2a56006928ef66128912fec100f1/tumblr_n1cq2oeUeD1t77ydgo1_400.gif',
         'https://gifimage.net/wp-content/uploads/2017/12/juno-temple-year-one-gif-7.gif',


    ]
    let gif = randomGifs[Math.floor(Math.random() * randomGifs.length)];

    return (
        <View style={styles.gifBackround}>
            <Image 
                source={{ uri: gif }}
                style={{
                    width: Dimensions.get('window').width -35,
                    height: 300, alignSelf: 'center', marginTop:  100, borderRadius: 10, borderColor: 'white', borderWidth: 10 }}
            > 
            </Image>
            <Text style={styles.textStyle}> Thank You For Volunteering</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    gifBackround: {
        flex: 1,
        backgroundColor: 'gold'
    },
    textStyle: {
        position: 'absolute',
        marginVertical: 420,
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
        fontFamily: 'Georgia-BoldItalic'
    }
})

export default Gif