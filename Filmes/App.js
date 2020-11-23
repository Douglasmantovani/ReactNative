import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  const [Filmes, setFilmes] = useState([]);
  const [tela, setTela] = useState('home');


  useEffect(() => {
    listarFilmes();
  }, []);

  const listarFilmes = () => {
    fetch('http://localhost:5000/api/Filmes', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(dados => {
        setFilmes(dados);
      })
      .catch(err => console.error(err));
  }

  switch (tela) {
    case 'home':
      return Home();
      break;
    case 'filmes':
      return filmes();
      break;
  }

  function Home() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.ColunaLogo}>
            <Image style={styles.logo} source={require('../Filmes/assets/Images/play-button.png')} />
            <Text style={styles.TextHeader}>Conheça nossa coletânea</Text>
          </View>

          <View style={styles.Nav}>
            <TouchableOpacity style={styles.btnNav}>
              <Text style={styles.textBtn} onPress={() => setTela('home')}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNav}>
              <Text style={styles.textBtn} onPress={() => setTela('filmes')}>Filmes</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Main}>
          <View style={styles.TextoMeio}>
            <Text style={styles.TituloMeio}>Monte sua coletânea de filmes...</Text>
            <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfdfgdfgdfgdfg</Text>
            <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfdfgdfgdfgdfgdfg</Text>
            <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfgdfgdfgdfgdfg</Text>
            <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsddfgdfgdfgdff</Text>
          </View>
          <View style={styles.Colunas}>
            <View style={styles.ColunaOne}>
              <Image style={styles.logo} source={require('../Filmes/assets/Images/cinema.png')} />
              <Text style={styles.TituloMeio}>Filmes</Text>
              <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfdfgdfgdfgdfg</Text>
              <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfdfgdfgdfgdfgdfg</Text>
              <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfgdfgdfgdfgdfg</Text>
              <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsddfgdfgdfgdff</Text>
            </View>

            <View style={styles.ColunaTwo}>
              <Image style={styles.logo} source={require('../Filmes/assets/Images/theater.png')} />
              <Text style={styles.TituloMeio}>Filmes</Text>
              <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfdfgdfgdfgdfg</Text>
              <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfdfgdfgdfgdfgdfg</Text>
              <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfgdfgdfgdfgdfg</Text>
              <Text style={styles.text}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsddfgdfgdfgdff</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Image style={styles.logo} source={require('../Filmes/assets/Images/play-button.png')} />
          <Text style={styles.textFooter}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfdfgdfgdfgdfg</Text>
          <Text style={styles.textFooter}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfdfgdfgdfgdfgdfg</Text>
          <Text style={styles.textFooter}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfgdfgdfgdfgdfg</Text>
          <Text style={styles.textFooter}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsddfgdfgdfgdff</Text>
        </View>
      </View>
    );
  }

  function filmes() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.ColunaLogo}>
            <Image style={styles.logo} source={require('../Filmes/assets/Images/play-button.png')} />
            <Text style={styles.TextHeader}>Conheça nossa coletânea</Text>
          </View>
          <View style={styles.Nav}>
            <TouchableOpacity style={styles.btnNav}>
              <Text style={styles.textBtn} onPress={() => setTela('home')}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNav}>
              <Text style={styles.textBtn} onPress={() => setTela('filmes')}>Filmes</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.MainFilmes}>
          <Image style={styles.logo} source={require('../Filmes/assets/Images/cinema.png')} />
          <Text>Filmes</Text>
          <View style={styles.TextoFilmeGenero}>
            <Text>Filmes</Text>
            <Text>Gêneros</Text>
          </View>
          <View style={styles.ListaDeFilmes}>
            {
              Filmes.map((item) => {
                return (
                  <View style={styles.TextoFilmeGeneroMap} key={item.idFilme}>
                    <Text>{item.titulo}---{item.genero.nome}</Text>
                  </View>
                );
              })
            }
          </View>
        </View>

        <View style={styles.footer}>
          <Image style={styles.logo} source={require('../Filmes/assets/Images/play-button.png')} />
          <Text style={styles.textFooter}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfdfgdfgdfgdfg</Text>
          <Text style={styles.textFooter}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfdfgdfgdfgdfgdfg</Text>
          <Text style={styles.textFooter}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsdfgdfgdfgdfgdfg</Text>
          <Text style={styles.textFooter}>asfdsdfsdfdisfgsidfhusodfhsodfhsdfsddfgdfgdfgdff</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  TextHeader: {
    fontSize: 20
  },
  logo: {
    height: 60,
    width: 60,
    marginTop: 10
  },
  header: {
    height: 150,
    justifyContent: 'space-around',
    backgroundColor: '#9BD2DE',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  ColunaLogo: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  Nav: {
    width: 100,
    flexDirection: 'row',
    width: '200px',
    justifyContent: 'space-between'
  },
  btnNav: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBtn: {
    fontWeight: 'bold'
  },
  Main: {
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  TituloMeio: {
    fontSize: 25,
    marginBottom: 10
  },
  TextoMeio: {
    flexDirection: 'column',
    marginBottom: 40,
    alignItems: 'center'
  },
  text: {
    flexWrap: 'wrap'
  },
  Colunas: {
    marginBottom: 20
  },
  ColunaOne: {
    alignItems: 'center',
    marginBottom: 40
  },
  ColunaTwo: {
    alignItems: 'center'
  },
  footer: {
    backgroundColor: '#F6511D',
    height: 150,
    alignItems: 'center',
  },
  textFooter: {
    flexWrap: 'wrap',
    color: '#fff'
  },
  TextoFilmeGenero: {
    flexDirection: 'row',
    marginTop: 30,
    width: 150,
    justifyContent: "space-around"
  },
  MainFilmes: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  ListaDeFilmes: {
  },
  TextoFilmeGeneroMap: {
    flexDirection: 'row'
  }
});
