import { Text,View,StyleSheet,SafeAreaView,Image } from "react-native";
import {Button} from "../components/button"
import { router } from "expo-router";

export default function App(){

    const handleStart = () =>{
       router.replace('/home');
    }

    return(
       <SafeAreaView style={styles.container}>
            <Image 
            style={styles.logo}
            resizeMode="cover"
                source={require('../assets/logo.jpg')}
            />
            <Text style={styles.h1}>Loja Teste</Text>
            <Text style={styles.h2}>Aqui você encontra tudo!</Text>
            <Button 
                title="Começar as compras"
                onPress={handleStart}
            />
       </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:200,
        height:200,
        marginBottom:20
    },
    h1:{
        fontSize:22,
        fontWeight:"bold",
        marginBottom:10
    },
    h2:{
        fontSize:16,
        marginBottom:10
    }
})