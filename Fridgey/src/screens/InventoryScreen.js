import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput, Button, FlatList, Alert } from "react-native";
import InventoryDeletion from '../screens/InventoryDeletion';
import DatePicker from 'react-native-datepicker';

const InventoryScreen = () => {

  const [itemList, addToList] = useState([]);//itemList is our main list of items to add and delete from

  const [enteredName, setEnteredName] = useState(''); //input for item name
  const nameInputHandler = (enteredText) =>{
    setEnteredName(enteredText);
  }

  const [enteredQuantity, setEnteredQuantity] = useState(''); //input for item quantity
  const quantityInputHandler = (enteredText) =>{
    setEnteredQuantity(parseInt(enteredText));
  }

  const [enteredPrice, setEnteredPrice] = useState(''); // input for item price
  const priceInputHandler = (enteredText) =>{
    setEnteredPrice(enteredText);
  }

  const [enteredExpiry, setEnteredExpiry] = useState(new Date()); //input for item expiry
  const expiryInputHandler = (date) =>{
    setEnteredExpiry(date);
  }


  const addItemHandler = () =>{
    const item = {name : enteredName, quantity:enteredQuantity, price: enteredPrice, expiry: enteredExpiry, expired: false}
    var i;
    for( i= 0 ; i <itemList.length; i++){
      if (itemList[i].name == item.name && itemList[i].expiry === item.expiry){
        itemList[i].quantity += item.quantity;
        break;
      }
    }
    if(i == itemList.length){
      addToList([...itemList, item]);
    }
    console.log(itemList);
  };

  const [isDeleteMode, setDeleteMode ] = useState(false);

  const deleteItemHandler= item =>{
    for(var i = 0; i < itemList.length; i++){
      if(itemList[i].name == item.name && itemList[i].quantity < item.quantity ){
        Alert.alert('Oops', 'Quantity higher than amount', [{text: 'Okay'}] );
        break;
      }
      else if(itemList[i].name == item.name && itemList[i].quantity == item.quantity ){
        Alert.alert('', 'Item Deleted', [{text: 'Okay'}] );
        addToList(itemList => {
          return itemList.filter((groceryItem)=> groceryItem.name != item.name);
        });
      }
      else if(itemList[i].name == item.name && itemList[i].quantity > item.quantity){
        Alert.alert('', 'Item Deleted', [{text: 'Okay'}] );
        itemList[i].quantity -= item.quantity;
        console.log(itemList);
      }
    }

  };


  return(
    <View>
      <InventoryDeletion visible = {isDeleteMode} onDeleteItem ={deleteItemHandler} setDeleteMode={setDeleteMode}/>
      <TextInput placeholder= "Enter item name" onChangeText = {nameInputHandler} value ={enteredName} />
      <TextInput placeholder= "Enter item quantity" onChangeText = {quantityInputHandler} value ={enteredQuantity} keyboardType = 'numeric'/>
      <TextInput placeholder= "Enter item price" onChangeText = {priceInputHandler} value = {enteredPrice} keyboardType = 'numeric'/>
      <DatePicker
        style={{width: 200}}
        date={enteredExpiry}
        mode="date"
        placeholder="Select Expiry Date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date)=>{expiryInputHandler(date)}}
      />
      <Button title= "Add" onPress={addItemHandler}/>
      <Button title= "Delete" onPress= {() => setDeleteMode(true)} />
      <FlatList
        keyExtractor = {(item, index) => item.name}
        data = {itemList}
        extraData={itemList.state}
        renderItem={ itemData => (
          <View>
            <Text>{itemData.item.name + " " + itemData.item.quantity + " "+ itemData.item.price + " "+itemData.item.expiry}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default InventoryScreen;
