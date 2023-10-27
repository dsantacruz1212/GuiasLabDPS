/**
* @format
* @flow strict-local
*/


import React, { useState , useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar,} from 'react-native' ;
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Results from './src/components/Results';


export default function App() {

const [nombre, setNombre] =useState('');
const [ SalarioBase, setSalarioBase]=useState(null)
const [errorMessage , setErrorMessage] = useState('');

const [total , setTotal] = useState({
AFP: 0,
ISS: 0,
RENTA:0,
total: 0,

});


useEffect(() => {
  if (nombre && SalarioBase) calculate();

  else reset();
}, [nombre , SalarioBase]);
const calculate = () => {
reset();
if (!nombre) {
setErrorMessage('Añade el nombre del empleado');
} else if (!SalarioBase) {
setErrorMessage('Añade un salario');
}  else {
const AFP = SalarioBase * 0.04.toFixed(2);
const ISS = SalarioBase * 0.03.toFixed(2);
const RENTA =SalarioBase *  0.05.toFixed(2);
const totalSalarioDescuento = SalarioBase - AFP - RENTA - ISS;

setTotal({
  AFP,
  ISS,
  RENTA,
  total: totalSalarioDescuento,
});
}
};
const reset = () => {
  setErrorMessage('');
  setTotal({
    AFP: 0,
    ISS: 0,
    RENTA: 0,
    total: 0,
  });
};


  return (
    <>
<StatusBar barStyle='light-content'/>
<SafeAreaView style={styles.safeArea}>
<View style={styles.background}>
<Text style={styles.titleApp} >SALARIO NETO</Text>
<Form  setNombre={setNombre} setSalarioBase={setSalarioBase} />
</View>

</SafeAreaView>

<Results
  nombre={nombre}
  SalarioBase={SalarioBase}
  total={{
    AFP: total.AFP.toFixed(2),
    ISS: total.ISS.toFixed(2),
    RENTA: total.RENTA.toFixed(2),
    total: total.total.toFixed(2),



  }}
  errorMessage={errorMessage}
/>
<Footer calculate={calculate}></Footer>
</>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
    },
    background: {
      backgroundColor: colors.PRIMARY_COLOR,
      height: 200,
      width: '100%',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      position: 'absolute',
      zIndex: -1,
      alignItems:'center'
      },
      titleApp: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 15,
      
      },
      
  Header:{
    backgroundColor: colors.PRIMARY_COLOR,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
    },
    Headapp:{
      fontSize:25,
      fontWeight:'bold',
      color:'#fff',
      marginTop:15
    }
});