import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(shop)" options={{ headerShown: true, title: 'Shop' }} />

            <Stack.Screen name="categories" options={{ headerShown: true, title: 'Categories' }} />

            <Stack.Screen name="product" options={{ headerShown: true, title: 'Product' }} />

            <Stack.Screen name="cart" options={{ headerShown: true, title: 'Shoppin Cart' }} />

            <Stack.Screen name="auth" options={{ headerShown: true }} />  

        </Stack>
        
    );
}