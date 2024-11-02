import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TechnicalPreferences = ({ navigation, route }) => {
    const { projectTitle, projectDescription, projectType, coreFeatures, customFeatures, selectedCategory } = route.params;
    const [techStack, setTechStack] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Technical Preferences</Text>
            <TextInput
                placeholder="Preferred Tech Stack"
                value={techStack}
                onChangeText={setTechStack}
                style={styles.input}
            />
            <Button title="Next" onPress={() => navigation.navigate('TimelineBudget', { projectTitle, projectDescription, projectType, coreFeatures, customFeatures, techStack, selectedCategory })} />
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

export default TechnicalPreferences;
