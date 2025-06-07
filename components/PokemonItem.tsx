import { Image, StyleSheet, Text, View } from "react-native";

type Pokemon = {
    id: string;
    name: string
    type: string
    image: string
};

interface PokemonItemProps {
    pokemon: Pokemon
}

export default function PokemonItem({ pokemon }: PokemonItemProps) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 10,
            marginTop: 10
        },

        text: {
            fontSize: 16,
        },
        image: {
            width: 100,
            height: 100,
            resizeMode: 'contain',
        }
    });

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: pokemon.image }}
            />
            <Text style={styles.text}>{pokemon.name}</Text>
        </View>
    )
}