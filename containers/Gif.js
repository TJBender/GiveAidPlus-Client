import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native'

const Gif = () => {

    let randomGifs = [
         'https://media3.giphy.com/media/tJMHfE1mF0I0jU4h9s/source.gif', // sassy 'very impressed'
         'https://media.giphy.com/media/3otPoUkg3hBxQKRJ7y/giphy.gif', // obama thank you 
         'https://media3.giphy.com/media/QaXcpBEQRfD9pR3zk5/giphy.gif', // elf congratulations
         'https://media.giphy.com/media/1kJXHfUaBRQPn3gL55/giphy.gif', // excited clapping
         'http://31.media.tumblr.com/88ee2a56006928ef66128912fec100f1/tumblr_n1cq2oeUeD1t77ydgo1_400.gif', // 'the office : duane' slow clap
         'https://media1.tenor.com/images/da585b99b6ea9458887bcbbea02582e6/tenor.gif?itemid=13109295', //obama mic drop 
         'https://media.giphy.com/media/QAsBwSjx9zVKoGp9nr/giphy.gif', // Keanu Reeves kiss
         'https://media1.tenor.com/images/f29bd274b1239980be41c3f146e0e4e7/tenor.gif?itemid=5154817', // dog smile "THANK YOU"
         'https://media2.giphy.com/media/NjjvZdmoVhgrK/source.gif', // guy laugh and point
         'https://media1.giphy.com/media/1acaDLnSo4QdG/source.gif',  // jack black smile
        'https://media.giphy.com/media/xT77XWum9yH7zNkFW0/giphy.gif' // shocked open-mouth clapping boy
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