import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AdditionalDetails = ({ navigation, route }) => {
    const { projectTitle, projectDescription, projectType, coreFeatures, customFeatures, techStack, timeline, budget, selectedCategory } = route.params;
    const [userDemographics, setUserDemographics] = useState('');
    const [competitorExamples, setCompetitorExamples] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Additional Details</Text>
            <TextInput
                placeholder="User Demographics"
                value={userDemographics}
                onChangeText={setUserDemographics}
                style={styles.input}
            />
            <TextInput
                placeholder="Competitor Examples"
                value={competitorExamples}
                onChangeText={setCompetitorExamples}
                style={styles.input}
            />
            <Button title="Next" onPress={() => navigation.navigate('ReviewSubmit', { projectTitle, projectDescription, projectType, coreFeatures, customFeatures, techStack, timeline, budget, userDemographics, competitorExamples, selectedCategory })} />
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

export default AdditionalDetails;
