import React from 'react';
import { Drawer } from 'expo-router/drawer';

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="(tabs)/index" options={{ title: 'Profil' }} />
      <Drawer.Screen name="(tabs)/hobby" options={{ title: 'Hobi' }} />
      <Drawer.Screen name="(tabs)/explore" options={{ title: 'Tentang Saya' }} />
    </Drawer>
  );
}
