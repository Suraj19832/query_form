import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TimelineBudget = ({ navigation, route }) => {
    const { projectTitle, projectDescription, projectType, coreFeatures, customFeatures, techStack, selectedCategory } = route.params;
    const [timeline, setTimeline] = useState('');
    const [budget, setBudget] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Timeline & Budget</Text>
            <TextInput
                placeholder="Project Timeline"
                value={timeline}
                onChangeText={setTimeline}
                style={styles.input}
            />
            <TextInput
                placeholder="Budget Range"
                value={budget}
                onChangeText={setBudget}
                style={styles.input}
            />
            <Button title="Next" onPress={() => navigation.navigate('AdditionalDetails', { projectTitle, projectDescription, projectType, coreFeatures, customFeatures, techStack, timeline, budget, selectedCategory })} />
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

export default TimelineBudget;
