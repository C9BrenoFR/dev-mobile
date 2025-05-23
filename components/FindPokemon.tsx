import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

const POKEBALL_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png'

export default function FindPokemon() {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState("");
    const [image, setImage] = useState(POKEBALL_IMAGE);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            marginTop: 10
        },
        input: {
            backgroundColor: 'white',
            width: '90%',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 4
        },
        text: {
            fontSize: 16,
        },
        image: {
            width: '80%',
            height: 200,
            resizeMode: 'contain'
        }
    });

    async function fetchPokemon() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
            if (!response)
                throw new Error("Pokemon não encontrado");
            const data = await response.json();
            let types = '';
            for (let index = 0; index < data.types.length; index++)
                types += `${data.types[index].type.name} `;
            setPokemon(`${data.species.name} encontrado! ele tem os tipos: ${types}`)
            setImage(data.sprites.front_default)
            setSearch('')
        } catch (error) {
            setPokemon(`${search} não encontrado`)
            setImage(POKEBALL_IMAGE)
            setSearch('')
        }
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: image }}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite aqui o nome do pokemon'
                value={search}
                onChangeText={setSearch}
            />
            <Button
                onPress={fetchPokemon}
                title="Procurar"
            />
            <Text style={styles.text}>{pokemon}</Text>
        </View>
    )
}