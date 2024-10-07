import { Slot, Stack } from 'expo-router';
import React from 'react';

const RooyLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ title: 'Profile' }} />
            <Slot />
        </Stack>
    );
};

export default RooyLayout;
