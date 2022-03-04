import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"

import ParImpar from './components/ParImpar'
//import Diferenciar from './components/Diferenciar'
//import ContadorV2 from './components/contador/ContadorV2'
//import Pai from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
//import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import Aleatorio from './components/Aleatorio'
//import MinMax from './components/MinMax'
//import CompPadrao, { Comp1, Comp2} from './components/Multi'
//import Primerio from './components/Primeiro'


export default () => (
    <SafeAreaView style={style.App}>
        <ParImpar num={8}/>
        {/*
        <Diferenciar/>
        <ContadorV2/>
        <Pai/>
        <Pai/>
        <Contador inicial={100} passo={5}/>
        <Contador/>
        <Botao />
        <Titulo principal="Cadastro Produto"
            secundario="Tela de Cadastro"/>
        <Aleatorio min={1} max={60}/>
        <MinMax  min="3" max="20"/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
       <Primerio /> 
       */}
    </SafeAreaView>)


const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20        
    }
})