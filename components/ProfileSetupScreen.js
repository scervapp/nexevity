import { getAuth } from 'firebase/auth';
import React from 'react';

import {View, Text, TextInput, Button, StyleSheet } from 'react-native';


const auth = getAuth();

View
const ProfileSetupScreen = () => {
    return (
        <View>
            {/* Your component content goes here */}
            <Text>Pofile Setup</Text>
        </View>
    );
};

export default ProfileSetupScreen;
