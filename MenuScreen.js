import React, { useContext } from 'react';
import { FlatList, Text, View, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {
    const { addToCart } = useContext(CartContext);
    const navigation = useNavigation();

const foodItems = [
    { 
        id: 1, 
        name: 'Gourmet Margherita Pizza', 
        description: 'A classic Margherita pizza topped with fresh mozzarella, basil leaves, and a drizzle of extra virgin olive oil.', 
        price: 120.85, 
        image: require('../assets/pizza - Google Search.jpeg')
    },
    { 
        id: 2, 
        name: 'Artisan Beef Burger', 
        description: 'Succulent Angus beef patty served with artisanal bun, crisp lettuce, ripe tomato, and a house-made secret sauce.', 
        price: 89.99, 
        image: require('../assets/IMG_974D1EA3A2AA-1.jpeg')
    },
    { 
        id: 3, 
        name: 'Garden Fresh Salad', 
        description: 'A vibrant mix of seasonal greens, heirloom tomatoes, cucumber ribbons, and a zesty citrus vinaigrette.', 
        price: 45.99, 
        image: require('../assets/IMG_0DE80F21D855-1.jpeg')
    },
    { 
        id: 4, 
        name: 'BBQ Glazed Ribs', 
        description: 'Tender pork ribs slow-cooked and coated in a tangy BBQ glaze, served with a side of coleslaw.', 
        price: 102.99, 
        image: require('../assets/IMG_D3BC28029607-1.jpeg')
    },
    { 
        id: 5, 
        name: 'Truffle Infused Potato Chips', 
        description: 'Crispy, hand-cut potato chips lightly seasoned and drizzled with truffle oil.', 
        price: 35.99, 
        image: require('../assets/IMG_6BEB9C2A23D8-1.jpeg')
    },
    { 
        id: 6, 
        name: 'Prime Aged Beef Steak', 
        description: 'An exquisite prime steak grilled to perfection, accompanied by a rich red wine reduction sauce.', 
        price: 180.99, 
        image: require('../assets/IMG_FE16922EE832-1.jpeg')
    },
    { 
        id: 7, 
        name: 'Lobster Thermidor', 
        description: 'Luxurious lobster meat cooked in a creamy cognac sauce, served in the lobster shell with a crispy cheese topping.', 
        price: 245.99, 
        image: require('../assets/IMG_3A64E2CB5E1D-1.jpeg')
    },
    { 
        id: 8, 
        name: 'Saffron Risotto', 
        description: 'Creamy risotto infused with fragrant saffron threads, adorned with shaved Parmesan and fresh herbs.', 
        price: 98.99, 
        image: require('../assets/IMG_8F75B3C33AF6-1.jpeg')
    },
    { 
        id: 9, 
        name: 'Chocolate Fondant', 
        description: 'Decadent molten chocolate cake with a gooey center, served with vanilla bean ice cream and a raspberry coulis.', 
        price: 68.50, 
        image: require('../assets/IMG_1448.jpg')
    },
];


    return (
        <View style={styles.container}>
            <FlatList
                data={foodItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => addToCart(item)}
                        >
                            <Text style={styles.addButtonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                )}
                contentContainerStyle={styles.listContent}
            />
            <View style={styles.navigationButtons}>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Text style={styles.navButtonText}>Go to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={styles.navButtonText}>Go to Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.navigate('Form1')}
                >
                    <Text style={styles.navButtonText}>Go to Form</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 15,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginVertical: 12,
        padding: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#D4AF37',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4B0082',
        fontFamily: 'serif',
    },
    description: {
        fontSize: 16,
        color: '#696969',
        marginVertical: 8,
        fontStyle: 'italic',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#8B0000',
    },
    listContent: {
        paddingBottom: 30,
    },
    addButton: {
        backgroundColor: '#D4AF37',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    navigationButtons: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    navButton: {
        flex: 1,
        backgroundColor: '#4B0082',
        paddingVertical: 12,
        borderRadius: 8,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    navButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default MenuScreen;
