import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FeatureDetails = ({ navigation, route }) => {
    const { projectTitle, projectDescription, projectType, selectedCategory } = route.params;
    const [coreFeatures, setCoreFeatures] = useState('');
    const [customFeatures, setCustomFeatures] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Feature Details</Text>
            <TextInput
                placeholder="Core Features (comma separated)"
                value={coreFeatures}
                onChangeText={setCoreFeatures}
                style={styles.input}
            />
            <TextInput
                placeholder="Custom Feature Description"
                value={customFeatures}
                onChangeText={setCustomFeatures}
                style={styles.input}
            />
            <Button title="Next" onPress={() => navigation.navigate('TechnicalPreferences', { projectTitle, projectDescription, projectType, coreFeatures, customFeatures, selectedCategory })} />
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
});

export default FeatureDetails;
