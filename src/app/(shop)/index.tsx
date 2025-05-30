// screens/HomeScreen.js
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { PRODUCTS } from '../../../assets/products';
import { ProductListItem } from "../../components/product-list-item";
    
    
const HomeScreen = () => {
    return (
        <View>
            <FlatList
                data={PRODUCTS}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                ListHeaderComponent={<Text>Products</Text>}
                contentContainerStyle={styles.flatListContent}
                columnWrapperStyle={styles.flatListColumn}
                style={{ paddingHorizontal: 10, paddingVertical: 5 }}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    flatListContent: {
        paddingBottom: 20,
    },

    flatListColumn: {
        justifyContent: 'space-between'
    }
});
