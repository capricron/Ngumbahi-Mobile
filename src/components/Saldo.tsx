import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonIcon from './ButtonIcon'
import { PRIMARY_COLOR } from '../utils/contents'
import Gap from './Gap'

const Saldo = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.informasiSaldo}>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>Saldo :</Text>
          <Text style={styles.valueSaldo}>Rp. 100.000</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.labelPoint}>Ngumbahi Point: </Text>
          <Text style={styles.valuePoint}>69 point</Text>
        </View>
      </View>

      <View style={styles.buttonAction}>
        <ButtonIcon title={"Add Saldo"} type={''} />
        <Gap height={10} width={10}/>
        <ButtonIcon title={"Get Point"} type={''} />
      </View>

    </View>
  )
}

export default Saldo

const windowWith = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    marginTop: -windowHeigth*0.07,
    flexDirection: "row",
  },
  text: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  informasiSaldo: {
    width: '60%',
  },
  labelSaldo:{
    fontSize: 20,
    fontFamily: "TitilliumWeb-Regular"
  },
  valueSaldo:{
    fontSize: 20,
    fontFamily: "TitilliumWeb-Bold"
  },
  labelPoint:{
    fontSize: 15,
    fontFamily: "TitilliumWeb-Regular"
  },
  valuePoint:{
    fontSize: 15,
    fontFamily: "TitilliumWeb-Bold",
    color: PRIMARY_COLOR
  },
  buttonAction: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-end'
  }

})