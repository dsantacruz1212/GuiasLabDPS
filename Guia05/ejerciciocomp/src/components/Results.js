import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Result(props) {
    const { nombre, SalarioBase, total, errorMessage } = props;

    const formatCurrency = (value) => {
        return parseFloat(value).toFixed(2);
      };
return (
<View style={styles.content}>
{total && (
<View style={styles.boxResult}>
<Text style={styles.title}>RESUMEN</Text>
<DataResult title="Nombre:" value={nombre} />
<DataResult title="Salario Base:" value={`${formatCurrency(SalarioBase)} $`} />
<DataResult title="ISS -3%:" value={`${formatCurrency(total.ISS)} $`} />
<DataResult title="AFP -4%:" value={`${formatCurrency(total.AFP)} $`} />
<DataResult title="RENTA -5%:" value={`${formatCurrency(total.RENTA)} $`} />
<DataResult title="Total a Recibir:" value={`${formatCurrency(total.total)} $`} />

</View>
)}
<View>
<Text style={styles.error}>{errorMessage}</Text>
</View>
</View>
);
}
function DataResult(props) {
const {title, value} = props;
return (
<View style={styles.value}>
<Text>{title}</Text>
<Text>{value}</Text>
</View>
);
}
const styles = StyleSheet.create({
content: {
marginHorizontal: 40,
},
boxResult: {
    padding: 30,
},
title: {
fontSize: 25,
textAlign: 'center',
fontWeight: 'bold',
marginBottom: 20,
},
value: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
error: {
textAlign: 'center',
color: '#f00',
fontWeight: 'bold',
fontSize: 20,
},
});