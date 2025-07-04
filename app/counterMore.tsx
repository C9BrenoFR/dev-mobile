// src/screens/HomeScreen.tsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useCounter } from '../context/CounterContext';

export default function counterLess() {
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            padding: 20
        }}>
            <Text style={{ fontSize: 32, textAlign: 'center' }}>{counter}</Text>

            <Button
                title="+5"
                onPress={() => increment(5)}
            />
            <Button
                title="-5"
                onPress={() => decrement(5)}
            />
            <Button
                title="Resetar para 0"
                onPress={() => reset()}
            />
        </View>
    );
}
