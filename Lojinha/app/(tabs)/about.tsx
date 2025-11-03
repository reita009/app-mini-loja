import { Text,View,StyleSheet,Image } from "react-native";

export default function App(){

   

    return(
     <View>
       <Image
       style={styles.img}
       resizeMode="cover"
       source={require('../../assets/images/ReitaLuff.jpg')}
       />
       <Text style={styles.title}>Olá! me chamo Julio!"</Text>
       <Text style={styles.desc}>💻 Desenvolvedor Full Stack | Especialista em Mobile
Sou desenvolvedor full stack com foco em criação de aplicações modernas e responsivas, com ênfase em desenvolvimento mobile utilizando tecnologias como React Native e Expo. Tenho experiência em front-end, back-end e integração de APIs, sempre buscando entregar soluções escaláveis, performáticas e com excelente experiência de usuário.       
        </Text>
        <Text style={styles.contact}>📩 Contato: julio.dev.santana@gmail.com</Text>
     </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    img:{
        height:190,
        width:190,
        marginTop:50,
        marginBottom:40,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:50
    },
    title:{
        marginLeft:'auto',
        marginRight:"auto",
        marginBottom:'30',
        fontSize:20,
        fontWeight:'bold'
    },desc:{
        width:300,
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:'30',
    },
    contact:{
        marginLeft:'auto',
        marginRight:'auto',
        fontSize:20,
        fontWeight:'bold'
    }
  
})