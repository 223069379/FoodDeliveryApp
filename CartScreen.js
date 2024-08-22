import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { CartContext } from './CartContext';

const CartScreen = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>Price: R{item.price}</Text>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeFromCart(item)}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R{getTotalPrice()}</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => { /* Handle checkout */ }}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#888',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
  removeButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#ff6347',
    borderRadius: 20,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 20,
    marginTop: 20,
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
