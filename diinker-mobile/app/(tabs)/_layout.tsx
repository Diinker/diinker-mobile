import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
const houseIcon = require('../../assets/images/house.png');
const swordsIcon = require('../../assets/images/swords.png');
const bluetoothIcon = require('../../assets/images/bluetooth.png');
const graphIcon = require('../../assets/images/graph.png');
const userIcon = require('../../assets/images/user.png');

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: 'white',
          height: 100,
          paddingTop: 15,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <Image
              source={houseIcon}
              style={{
                width: 28,
                height: 28
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="challenge"
        options={{
          title: 'Challenge',
          tabBarIcon: () => (
            <Image
              source={swordsIcon}
              style={{
                width: 28,
                height: 28
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="connect"
        options={{
          title: 'Connect',
          tabBarIcon: () => (
            <Image
              source={bluetoothIcon}
              style={{
                width: 28,
                height: 28
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: 'Statistics',
          tabBarIcon: () => (
            <Image
              source={graphIcon}
              style={{
                width: 28,
                height: 28
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => (
            <Image
              source={userIcon}
              style={{
                width: 28,
                height: 28
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
