import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput, Button, FlatList, Alert, Picker } from "react-native";
import InventoryDeletion from '../screens/InventoryDeletion';
import DateTimePicker from '@react-native-community/datetimepicker';

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
  const [enteredCategory, setEnteredCategory]= useState('');
  const categoryInputHandler =(enteredText)=>{
    setEnteredCategory(enteredText);
  }


  const addItemHandler = () =>{
    const item = {name : enteredName, quantity:enteredQuantity, price: enteredPrice, expiry: enteredExpiry, category:enteredCategory}
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
  };

  const [isDeleteMode, setDeleteMode ] = useState(false);

  const[show, setShow] = useState(false);

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
      }
    }

  };
  const onChangeExpiry = value=>{
    setShow(false);
    expiryInputHandler(value);
  }


  return(
    <View>
      <InventoryDeletion visible = {isDeleteMode} onDeleteItem ={deleteItemHandler} setDeleteMode={setDeleteMode}/>
      <TextInput placeholder= "Enter item name" onChangeText = {nameInputHandler} value ={enteredName} />
      <TextInput placeholder= "Enter item quantity" onChangeText = {quantityInputHandler} value ={enteredQuantity} keyboardType = 'numeric'/>
      <TextInput placeholder= "Enter item price" onChangeText = {priceInputHandler} value = {enteredPrice} keyboardType = 'numeric'/>
      {show &&
        (<DateTimePicker
          value = {enteredExpiry}
          mode="date"
          onChange={(value)=> onChangeExpiry(value)}
          />)
        }
      <Button title= "Click to set date" onPress ={() => setShow(true)} />
      <Picker
        style={{flex: 1, justifyContent: "center", margin:30}}
        placeholder= "Enter a category"
        selectValue = {enteredCategory}
        onValueChange= {(itemValue) => {categoryInputHandler(itemValue.value)}}>

        <Picker.Item label="Produce" value ="Produce" />
        <Picker.Item label="Dry Food" value= "Dry Food"/>
      </Picker>
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

const styles = StyleSheet.create({
  viewScreen: {width: 200},
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0
  },
  dateInput: {
    marginLeft: 36
  }
});

export default InventoryScreen;
