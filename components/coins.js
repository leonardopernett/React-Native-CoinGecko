import React from 'react'
import { View, Text, StyleSheet,Image} from 'react-native'

export default function CoinsItems({ item }) {
  return (
      <View style = { style.containerItem }>
          <View style = { style.item }>
          <Image source = { { uri:item.image } } style = { style.img }></Image>
          <Text style = { style.text } >{ item.name }</Text>
          <Text style={style.symbol}>{item.symbol}</Text>
          </View>
          <View style={style.price}>
            <Text style={style.current_price}>{item.current_price}</Text>
            <Text style={ item.market_cap_change_percentage_24h > 0 ? style.priceUp : style.priceDown }>{item.market_cap_change_percentage_24h}</Text>
          </View>
      </View>
   
  )
}
 
const style = StyleSheet.create({
   containerItem:{
      backgroundColor:'#121212',
      paddingTop:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
   },
   item:{
    display:'flex',
    flexDirection:'row',
   },
   text:{
     color:'#fff',
     paddingLeft:10
   },
   img:{
     width:20,
     height:20
   },
   symbol:{
     color:'#434343',
     textTransform:'uppercase',
     paddingLeft:10
   },
   price:{
     flexDirection:'row',
     flexWrap:'wrap'
   },
   current_price:{
     color:'#fff'
   },
   current_price_24h:{
    color:'red',
    paddingLeft:10
  },
  priceUp:{
    color:'green'
  },
  priceDown:{
    color:'red'
  }
})


