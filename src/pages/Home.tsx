import {Dimensions, Image, ImageBackground, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import * as Images from '../assets'
import { ButtonIcon, Saldo, PesananAktif } from '../components';
import { GREY_COLOR } from '../utils/contents';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsHorizontalScrollIndicator={false}>
      <ImageBackground source={Images.Header} style={styles.header}>
        <Image source={Images.Logo} style={styles.logo}/>
        <View style={styles.helo}>
          <Text style={styles.selamat}>Selamat Datang,</Text>
          <Text style={styles.username}>Username</Text>
        </View>
      </ImageBackground>
      <Saldo/>
      <View style={styles.layanan}>
        <Text style={styles.label}>Layanan Kami</Text>
        <View style={styles.iconLayanan}>
          <ButtonIcon title="Kiloan" type="layanan"/>
          <ButtonIcon title="Satuan" type="layanan"/>
          <ButtonIcon title="VIP" type="layanan"/>
          <ButtonIcon title="Karpet" type="layanan"/>
          <ButtonIcon title="Setrika" type="layanan"/>
          <ButtonIcon title="Ekspress" type="layanan"/>
        </View>
      </View>
      <View style={styles.pesananAktif}>
        <Text style={styles.label}>
          Pesanan Aktif
        </Text>
        <PesananAktif title={"Pesanan No 123456"} status={"Sudah Selesai"}/>
        <PesananAktif title={"Pesanan No 456789"} status={"Sedang Dicuci"}/>
        <PesananAktif title={"Pesanan No 987654"} status={"Sudah Selesai"}/>
      </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWith = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page:{
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 40,
    width: windowWith,
    height: windowHeigth*0.3
  },
  logo: {
    width: windowWith*0.3,
    height: windowHeigth*0.07
  },
  helo: {
    marginTop: windowHeigth*0.03,
  },
  selamat : {
    color: "black",
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular'
  },
  username : {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "TitilliumWeb-Bold"
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label:{
    fontSize: 18,
    fontFamily: "TitilliumWeb-Bold"
  },
  iconLayanan : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: "wrap"
  },
  pesananAktif : {
    paddingTop: 10,
    backgroundColor: GREY_COLOR,
    paddingHorizontal: 30,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  }
});
