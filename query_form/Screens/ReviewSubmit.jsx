import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ReviewSubmit = ({ navigation, route }) => {
    const { projectTitle, projectDescription, projectType, coreFeatures, customFeatures, techStack, timeline, budget, userDemographics, competitorExamples, selectedCategory } = route.params;

    const handleSubmit = () => {
        // Here, you would typically send the data to your backend.
        console.log("Submitted: ", { projectTitle, projectDescription, projectType, coreFeatures, customFeatures, techStack, timeline, budget, userDemographics, competitorExamples });
        alert("Query submitted successfully!");
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Review Your Submission</Text>
            <Text style={styles.text}>Project Category : {selectedCategory}</Text>
            <Text style={styles.text}>Project Title: {projectTitle}</Text>
            <Text style={styles.text}>Project Description: {projectDescription}</Text>
            <Text style={styles.text}>Project Type: {projectType}</Text>
            <Text style={styles.text}>Core Features: {coreFeatures}</Text>
            <Text style={styles.text}>Custom Features: {customFeatures}</Text>
            <Text style={styles.text}>Tech Stack: {techStack}</Text>
            <Text style={styles.text}>Timeline: {timeline}</Text>
            <Text style={styles.text}>Budget: {budget}</Text>
            <Text style={styles.text}>User Demographics: {userDemographics}</Text>
            <Text style={styles.text}>Competitor Examples: {competitorExamples}</Text>
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#ffffff',
        flex: 1,
        gap: 10
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    text: {
        fontWeight: "600",
        fontSize: 17,

    }
});

export default ReviewSubmit;
