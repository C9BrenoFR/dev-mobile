import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

const POKEBALL_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png'

interface FindPokemonProps {
    moreInformation: boolean
}

export default function FindPokemon({ moreInformation }: FindPokemonProps) {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState<any>(null);
    const [fetchError, setFetchError] = useState<string | null>(null);
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

    function getTypes() {
        let types = '';
        for (let index = 0; index < pokemon.types.length; index++)
            types += `${pokemon.types[index].type.name} `;
        return types;
    }

    function getAbilities() {
        let abilities = '';
        for (let index = 0; index < pokemon.abilities.length; index++)
            abilities += `${String(pokemon.abilities[index].ability.name).replace('-', ' ')} `
        return abilities.replace(' ', ' e ')
    }

    function renderText() {
        if (fetchError !== null)
            return <Text style={styles.text}>{fetchError}</Text>
        if (pokemon === null)
            return <Text style={styles.text}>{" "}</Text>
        return moreInformation ? (
            <>
                <Text style={styles.text}>{`${pokemon.name} encontrado! ele tem os tipos: ${getTypes()}`}</Text>
                <Text style={styles.text}>{`Seu numero na podex global é ${pokemon.id}`}</Text>
                <Text style={styles.text}>{`Ele tem as seguintes habilidades: ${getAbilities()}`}</Text>
            </>
        ) : (
            <Text style={styles.text}>{`${pokemon.name} encontrado! ele tem os tipos: ${getTypes()}`}</Text>
        )
    }

    async function fetchPokemon() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
            if (!response)
                throw new Error("Pokemon não encontrado");
            const data = await response.json();
            setPokemon(data)
            setImage(data.sprites.front_default)
            setSearch('')
            setFetchError(null)
        } catch (error) {
            setFetchError(`${search} não encontrado`)
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
            {renderText()}
        </View>
    )
}