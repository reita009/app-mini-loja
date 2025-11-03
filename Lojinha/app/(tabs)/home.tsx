import { ProductItem } from "@/components/productItem";
import { getAllProducts } from "@/services/product";
import { Text } from "@react-navigation/elements";
import { View, StyleSheet, FlatList } from "react-native";


export default function Screen(){

    const products = getAllProducts();

    return(
        <View style={styles.container}>
            <FlatList 
                data={products}
                renderItem={({item})=> <ProductItem data={item}/>}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    list:{
        flex:1,
        width:'100%',
        padding:20
    }
})