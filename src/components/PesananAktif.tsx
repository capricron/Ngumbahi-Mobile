import { 
    Dimensions, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View } from 'react-native'
import React from 'react'
import { MesinCuciIcon } from '../assets/icons'
import { GREY_COLOR, PRIMARY_COLOR, WARNING_COLOR } from '../utils/contents'

const PesananAktif = ({title, status} : {title: string, status: string}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <MesinCuciIcon/>
        <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <Text style={statusStyle(status)}>{status}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PesananAktif

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const statusStyle = (status: string) => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    color: status === "Sudah Selesai" ? PRIMARY_COLOR : status === "Sedang Dicuci" ? WARNING_COLOR : GREY_COLOR
})

const styles = StyleSheet.create({
    container:  {
        padding: 17,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        flexDirection: "row",
        marginVertical: windowHeigth*0.02
    },
    text: {
        marginLeft: windowWidth*0.02
    },
    title :{
        fontSize: 18,
        fontFamily: 'TitilliumWeb-SemiBold'
    },
})