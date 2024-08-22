import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { FormContext } from './FormContext';
import { ThemeContext } from './ThemeContext';

const ProfileScreen = () => {
    const { userDetails, addressDetails, paymentDetails } = useContext(FormContext);
    const { theme, updateTheme } = useContext(ThemeContext);

    const cardNumber = paymentDetails?.cardNumber || '';

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.title, { color: theme.textColor }]}>User Information</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Name: {userDetails.name}</Text>
            </View>

            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.title, { color: theme.textColor }]}>Address</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Address: {addressDetails.address}</Text>
            </View>

            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.title, { color: theme.textColor }]}>Payment Details</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>
                    Payment: **** **** **** {cardNumber.slice(-4)}
                </Text>
            </View>

            <View style={styles.themeContainer}>
                <Text style={[styles.themeLabel, { color: theme.textColor }]}>Customize Theme:</Text>
                <TextInput
                    placeholder="Text Color"
                    placeholderTextColor="#999"
                    onChangeText={(color) => updateTheme({ ...theme, textColor: color })}
                    style={[styles.input, { borderColor: theme.textColor }]}
                />
                <TextInput
                    placeholder="Card Background Color"
                    placeholderTextColor="#999"
                    onChangeText={(color) => updateTheme({ ...theme, cardBackground: color })}
                    style={[styles.input, { borderColor: theme.textColor }]}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#F5F7FA', 
    },
    card: {
        padding: 20,
        marginBottom: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 15,
        fontFamily: 'Arial',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Arial',
    },
    themeContainer: {
        marginTop: 30,
        paddingHorizontal: 10,
    },
    themeLabel: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
        fontWeight: '500',
        backgroundColor: '#FFF',
    },
});

export default ProfileScreen;
