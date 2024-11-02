import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const QueryForm = ({ navigation }) => {
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectType, setProjectType] = useState('Individual');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Categories
    const categories = [
        { label: 'Web Applications', value: 'web_applications' },
        { label: 'Mobile Applications', value: 'mobile_applications' },
        { label: 'Desktop Software', value: 'desktop_software' },
        { label: 'Cloud Solutions', value: 'cloud_solutions' },
        { label: 'AI/ML Applications', value: 'ai_ml_applications' },
        { label: 'Data Analytics and Visualization', value: 'data_analytics' },
        { label: 'IoT Solutions', value: 'iot_solutions' },
        { label: 'E-commerce Solutions', value: 'ecommerce_solutions' },
        { label: 'Blockchain and Crypto Solutions', value: 'blockchain' },
        { label: 'Custom Enterprise Software', value: 'custom_software' },
        { label: 'Game Development', value: 'game_development' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Select Software Category</Text>
            <RNPickerSelect
                onValueChange={(value) => setSelectedCategory(value)}
                items={categories}
                placeholder={{ label: 'Select a category...', value: null }}
                style={pickerSelectStyles}
            />

            <Text style={styles.header}>Project Information</Text>
            <TextInput
                placeholder="Project Title"
                value={projectTitle}
                onChangeText={setProjectTitle}
                style={styles.input}
            />
            <TextInput
                placeholder="Brief Project Description"
                value={projectDescription}
                onChangeText={setProjectDescription}
                style={styles.input}
            />
            <Text style={styles.label}>Project Type:</Text>
            <View style={styles.radioContainer}>
                <TouchableOpacity
                    style={projectType === 'Individual' ? styles.selectedRadio : styles.radio}
                    onPress={() => setProjectType('Individual')}
                >
                    <Text style={styles.radioText}>Individual</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={projectType === 'Company' ? styles.selectedRadio : styles.radio}
                    onPress={() => setProjectType('Company')}
                >
                    <Text style={styles.radioText}>Company</Text>
                </TouchableOpacity>
            </View>
            <Button title="Next" onPress={() => navigation.navigate('FeatureDetails', { projectTitle, projectDescription, projectType, selectedCategory })} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#ffffff',
        flex: 1,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    label: {
        marginTop: 20,
    },
    radioContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        gap: 20
    },
    radio: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        alignItems: 'center',
    },
    selectedRadio: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: '#e0f7fa',
        borderRadius: 5,
        alignItems: 'center',
    },
    radioText: {
        color: 'black',
    },
});

// Styles for the picker
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        color: 'black',
        marginBottom: 20,
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        color: 'black',
        marginBottom: 20,
    },
});

export default QueryForm;
