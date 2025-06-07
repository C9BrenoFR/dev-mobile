
import PokemonItem from '@/components/PokemonItem';
import { supabase } from '@/lib/supabase';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

type Pokemon = {
    id: string;
    name: string
    type: string
    image: string
};

export default function PokemonListScreen() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const getPokemons = async () => {
            try {
                const { data: fetch_pokemons, error } = await supabase.from('pokemons').select();

                if (error) {
                    console.error('Error fetching pokemons:', error.message);
                    return;
                }

                if (fetch_pokemons && fetch_pokemons.length > 0) {
                    setPokemons(fetch_pokemons);
                }
            } catch (error) {
                console.error('Error fetching pokemons:', error);
            }
        };
        getPokemons();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Pokemon List</Text>
            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PokemonItem key={item.id} pokemon={item} />}
            />
        </View>
    );
};

