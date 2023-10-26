import React from 'react';
import { SafeAreaView, View,FlatList,StyleSheet,Text, StatusBar , Image} from 'react-native';



const DATA = [
 {
  id: '1',
  title: 'Atol',
  infocal:'El atol de elote (maíz tierno) puede tener alrededor de 150-200 calorías por taza, mientras que el atol shuco (maíz con chocolate) puede ser más calórico debido al chocolate y el azúcar agregados.',
  description: 'El atol es una bebida tradicional salvadoreña que se elabora a base de maíz. Es conocido por su textura suave y cremosa y su sabor dulce. A menudo se sirve caliente y puede venir en diferentes variedades, como atol de elote (maíz tierno) y atol shuco (maíz con chocolate).',
  src: require('./src/img/atol.jpg')
 },
 {
  id: '2',
  title: 'empanadas',
  infocal:'Cada empanada puede variar en calorías, pero generalmente una empanada de tamaño mediano puede tener alrededor de 150-200 calorías, dependiendo del relleno.',
  description: 'Las empanadas salvadoreñas son pequeñas delicias rellenas de ingredientes sabrosos, como chicharrón (cerdo frito), queso o frijoles refritos. Están envueltas en una masa de maíz y luego se fríen hasta que estén doradas y crujientes. Se sirven con curtido, una ensalada encurtida, y salsa de tomate.',
  src: require('./src/img/empanadas.jpg')

 },
 {
  id: '3',
  title: 'pastelito',
  infocal:'Un pastelito suele contener alrededor de 150-200 calorías, pero esto puede variar según el tamaño y el tipo de relleno.',
  description: 'Los pastelitos son un aperitivo popular en El Salvador. Son pequeñas empanadas rellenas de carne molida o papa, y a menudo están sazonadas con especias. Se fríen hasta que estén dorados y se sirven con curtido y salsa de tomate.',
  src: require('./src/img/pastelitos.jpg')
  },
  {
    id: '4',
    title: 'pupusas',
    infocal:'Una pupusa puede contener alrededor de 250-300 calorías, dependiendo del relleno y el tamaño. Las pupusas de queso y chicharrón tienden a ser más calóricas que las de frijoles.',
    description: 'Las pupusas son uno de los platos más emblemáticos de El Salvador. Son tortillas de maíz rellenas de queso, chicharrón, frijoles refritos o loroco (una flor comestible). Se cocinan a la parrilla y se sirven con curtido y salsa de tomate.',
    src: require('./src/img/pupusas.jpg')
    },
    {
      id: '5',
      title: 'rigua',
      infocal:': Una porción de rigua puede tener alrededor de 200-250 calorías, dependiendo del tamaño y los ingredientes utilizados.',
      description: 'La rigua es una deliciosa torta de maíz típica de El Salvador. Está hecha de masa de maíz, queso y a veces se le agrega chicharrón o loroco. Se cocina al horno hasta que esté dorada en el exterior y suave en el interior, y se sirve como un aperitivo o plato principal.',
      src: require('./src/img/rigua.jpg')
      },

];

const Item = ({title , img ,description , infocal}) => (
  <View  style={styles.itemmain}>
    <View style={styles.item}>
      <View style={styles.imgcont}>
    <Image style={styles.img} source={img} />
    </View>
    <View style={styles.textcontent}>
    <Text style={styles.title}>{title} </Text>
    <Text style={styles.subtitle}>{description} </Text>
    </View>
    </View>
    <Text style={{ fontWeight:'bold',color:'red'}}>Informacion calorifica:</Text>
    <Text style={styles.subtitle}>{infocal} </Text>
  </View>
);



export default function App() {

const renderItem = ({ item }) => 
(
  <Item title ={item.title}  img={item.src} description={item.description} infocal={item.infocal}/>
);

  return (
<SafeAreaView style={styles.container}>
<FlatList
data= {DATA}
renderItem={renderItem}
keyExtractor={ item => item.id}

/>

</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    },

    textcontent:{
    
      flex:1
    },

    item: {
   
    
    
    
    flexDirection:'row',
    justifyContent:'space-between',
   
    },
    itemmain: {
      backgroundColor: '#b0d1ed',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      alignItems:'center',
      flexDirection:'column',
     
      borderRadius:15
      },

    title: {
    fontSize: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 5, 
    fontWeight:'400',
    textAlign:'center',
    
    },
    subtitle: {
     
      fontSize: 15,
      fontWeight:'300',
      flex:1,
      margin:5,
      marginLeft:15,
      textAlign:'justify'

      },
    img:{
      
      height:100,
      width:100,
      borderWidth:2,
      borderColor: 'yellow',
    
      borderRadius:100,
      resizeMode:'center',
      
      
      
      
    },
    imgcont:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
      flexDirection:'column',
    }


  
  
});
