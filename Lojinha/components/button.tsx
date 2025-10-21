import { Pressable,View,Text,StyleSheet } from "react-native";

type Props ={
    title:string;
    onPress: ()=> void;
}

export const Button = ({title,onPress}:Props) =>{
    return(
        <Pressable onPress={onPress} style={style.button}>
                <Text style={style.buttonText}>{title}</Text>
        </Pressable>
    )
}

const style =StyleSheet.create({
    button:{
        backgroundColor:"#164E85",
        borderRadius:10,
        paddingVertical:15,
        paddingHorizontal:25
    },
    buttonText:{
        fontSize:16,
        color:'white',
        textAlign:"center"
    }
})