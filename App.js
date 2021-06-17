import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList, StatusBar, Text, TextInput } from 'react-native'
import CoinsItems from './components/coins'

export default function App() {
  const [coins, setcoins] = useState([])
  const [search, setSearch] = useState("")
  const [refresh, setrefresh] = useState(false)
  useEffect(() => {
    loadData()
  }, [setcoins])

  const loadData = async ()=>{
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const data =  await res.json()
    setcoins(data)
    } catch (error) {
      console.log(error)
    }

  }

  const inputChange = (e)=>{
      setSearch(e.target.value)
  }
  return (
    <View style = {style.container}>
      <StatusBar backgroundColor="#141414" />
       <View style={style.header}>
         <Text style={style.title}>CoinsMarket</Text>
         <TextInput style={style.search} onChange = {inputChange}/>
       </View>
      <FlatList
        style={style.list}
        data = { coins.filter(c => 
          c.name.toLowerCase().includes(search) || 
          c.symbol.toLowerCase().includes(search) ) }

        renderItem = { ({item})=>{
          return <CoinsItems item={item} />
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refresh}
        onRefresh={async ()=>{
          setrefresh(true)
          await loadData()
          setrefresh(false)
        }}
      />
    </View>
  )
}


const style = StyleSheet.create({
  container:{
    backgroundColor:'#141414',
    alignItems:'center',
    flex:1
  },
  list:{
     width:'90%',
     marginTop:56,
     height:500
  },
  title:{
    fontSize:20,
    color:'#fff',
    textAlign:'center',
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
    marginTop:20,
    marginBottom:30,
    position:'fixed',
    zIndex:5,

    
  },
  search:{
    color:'#fff',
    borderWidth:1,
    borderColor:'#fff'
  }
})