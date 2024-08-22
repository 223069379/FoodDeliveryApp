import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FormContext } from './FormContext';
import { useNavigation } from '@react-navigation/native';

const Form3Screen = () => {
    const { paymentDetails, setPaymentDetails } = useContext(FormContext);
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let newErrors = {};

        if (!paymentDetails.cardNumber || !/^\d{16}$/.test(paymentDetails.cardNumber)) {
            valid = false;
            newErrors.cardNumber = 'Valid card number (16 digits) is required';
        }

        if (!paymentDetails.expiryMonth || !paymentDetails.expiryYear) {
            valid = false;
            newErrors.expiry = 'Expiry date (MM/YYYY) is required';
        } else {
            const currentYear = new Date().getFullYear();
            const currentMonth = new Date().getMonth() + 1;
            const expiryYear = parseInt(paymentDetails.expiryYear, 10);
            const expiryMonth = parseInt(paymentDetails.expiryMonth, 10);

            if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
                valid = false;
                newErrors.expiry = 'Card is expired';
            }
        }

        if (!paymentDetails.cvv || !/^\d{3}$/.test(paymentDetails.cvv)) {
            valid = false;
            newErrors.cvv = 'Valid CVV (3 digits) is required';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = () => {
        if (validate()) {
            // Handle form submission
            console.log('Form submitted successfully');
            navigation.navigate('Profile'); // Navigate to Profile screen
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Card Number:</Text>
            <TextInput
                value={paymentDetails.cardNumber}
                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, cardNumber: text })}
                style={[styles.input, errors.cardNumber && styles.inputError]}
                keyboardType="numeric"
                maxLength={16}
                placeholder="Enter card number"
                placeholderTextColor="#999"
            />
            {errors.cardNumber && <Text style={styles.error}>{errors.cardNumber}</Text>}
            
            <Text style={styles.label}>Expiry Month (MM):</Text>
            <TextInput
                value={paymentDetails.expiryMonth}
                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, expiryMonth: text })}
                style={[styles.input, errors.expiry && styles.inputError]}
                keyboardType="numeric"
                maxLength={2}
                placeholder="MM"
                placeholderTextColor="#999"
            />
            {errors.expiry && <Text style={styles.error}>{errors.expiry}</Text>}
            
            <Text style={styles.label}>Expiry Year (YYYY):</Text>
            <TextInput
                value={paymentDetails.expiryYear}
                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, expiryYear: text })}
                style={[styles.input, errors.expiry && styles.inputError]}
                keyboardType="numeric"
                maxLength={4}
                placeholder="YYYY"
                placeholderTextColor="#999"
            />
            {errors.expiry && <Text style={styles.error}>{errors.expiry}</Text>}
            
            <Text style={styles.label}>CVV:</Text>
            <TextInput
                value={paymentDetails.cvv}
                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, cvv: text })}
                style={[styles.input, errors.cvv && styles.inputError]}
                keyboardType="numeric"
                maxLength={3}
                placeholder="Enter CVV"
                placeholderTextColor="#999"
            />
            {errors.cvv && <Text style={styles.error}>{errors.cvv}</Text>}
            
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
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
        backgroundColor: '#28a745',
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

export default Form3Screen;
