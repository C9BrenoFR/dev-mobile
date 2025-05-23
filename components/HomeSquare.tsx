import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

type SquareColor = 'red' | 'yellow' | 'green' | 'blue';

export default function HomeSquare() {
    const [squares, setSquares] = useState<SquareColor[]>(['red', 'yellow', 'green', 'blue'])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
        },
        red: {
            width: 100,
            height: 100,
            backgroundColor: 'red',
            margin: 12.5,
        },
        blue: {
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            margin: 12.5,
        },
        yellow: {
            width: 100,
            height: 100,
            backgroundColor: 'yellow',
            margin: 12.5,
        },
        green: {
            width: 100,
            height: 100,
            backgroundColor: 'green',
            margin: 12.5,
        }
    });

    function shuffleArray(array: SquareColor[]) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function changeColors() {
        setSquares(prev => shuffleArray(prev))
    }

    return (
        <View style={styles.container}>
            {squares.map(square => (
                <View key={square} style={styles[square]} />
            ))}
            <Button
                onPress={changeColors}
                title="Trocar Cores"
            />
        </View>
    )
}