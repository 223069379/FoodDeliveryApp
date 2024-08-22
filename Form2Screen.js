import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FormContext } from './FormContext';
import { useNavigation } from '@react-navigation/native';

const Form2Screen = () => {
    const { addressDetails, setAddressDetails } = useContext(FormContext);
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let newErrors = {};

        console.log('Validating ZIP:', addressDetails.zip);

        if (!addressDetails.address) {
            valid = false;
            newErrors.address = 'Address is required';
        }

        if (!addressDetails.city) {
            valid = false;
            newErrors.city = 'City is required';
        }

        if (!addressDetails.state) {
            valid = false;
            newErrors.state = 'State is required';
        }

        // Check if ZIP code matches the 5-digit pattern
        if (!addressDetails.zip || !/^\d{5}$/.test(addressDetails.zip)) {
            valid = false;
            newErrors.zip = 'Valid zip code is required';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleNext = () => {
        if (validate()) {
            navigation.navigate('Form3');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Address:</Text>
            <TextInput
                value={addressDetails.address}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, address: text })}
                style={[styles.input, errors.address && styles.inputError]}
                placeholder="Enter address"
                placeholderTextColor="#999"
            />
            {errors.address && <Text style={styles.error}>{errors.address}</Text>}
            
            <Text style={styles.label}>City:</Text>
            <TextInput
                value={addressDetails.city}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, city: text })}
                style={[styles.input, errors.city && styles.inputError]}
                placeholder="Enter city"
                placeholderTextColor="#999"
            />
            {errors.city && <Text style={styles.error}>{errors.city}</Text>}
            
            <Text style={styles.label}>State:</Text>
            <TextInput
                value={addressDetails.state}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, state: text })}
                style={[styles.input, errors.state && styles.inputError]}
                placeholder="Enter state"
                placeholderTextColor="#999"
            />
            {errors.state && <Text style={styles.error}>{errors.state}</Text>}
            
            <Text style={styles.label}>Zip Code:</Text>
            <TextInput
                value={addressDetails.zip}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, zip: text })}
                style={[styles.input, errors.zip && styles.inputError]}
                keyboardType="numeric"
                maxLength={5}
                placeholder="Enter zip code"
                placeholderTextColor="#999"
            />
            {errors.zip && <Text style={styles.error}>{errors.zip}</Text>}
            
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    inputError: {
        borderColor: 'red',
    },
    error: {
        color: 'red',
        marginBottom: 10,
        fontSize: 14,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default Form2Screen;
