import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../styles/theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  bar: {
    backgroundColor: theme.colors.primary,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  }
})


const AppBar = ({ navigation }) => (
  <View style={styles.bar}>
    <AppBarTab label='Repositories' onPress={() => navigation.navigate('Repositories')} />
    <AppBarTab label='SignIn' onPress={() => navigation.navigate('SignIn')} />
  </View>
)

export default AppBar