import { Presence } from "@/types/Presence";
import { StyleSheet, Text, View } from "react-native";

interface PresenceItemProps {
    presence: Presence
}

export default function PresenceItem({ presence }: PresenceItemProps) {

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            marginTop: 10
        },

        text: {
            fontSize: 16,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{presence.student_id}</Text>
            <Text style={styles.text}>{presence.date}</Text>
        </View>
    )
}