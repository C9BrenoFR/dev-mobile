import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

interface UfjfMenuProps {
    date: string
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        height: '100%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32
    },
    text: {
        fontSize: 16
    },
    input: {
        backgroundColor: 'white',
        width: '90%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4
    },
    image: {
        width: '80%',
        height: 200,
        resizeMode: 'contain'
    }
})

export default function UfjfMenu({ date }: UfjfMenuProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo à UFJF</Text>
            <Text style={styles.text}>Conheça nossa Universidade</Text>
            <Image
                style={styles.image}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Logo_da_UFJF.png/1024px-Logo_da_UFJF.png' }}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite aqui sua matricula'
            />
            <Text style={styles.text}>{date}</Text>
        </View>
    )
}