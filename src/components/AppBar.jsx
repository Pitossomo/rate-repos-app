import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../styles/theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  bar: {
    backgroundColor: theme.colors.primary,
    paddingTop: Constants.statusBarHeight
  },
  text: {
    color: 'white',
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  }
})

const AppBar = () => (
  <View style={styles.bar}>
    <AppBarTab label='Repositories' />
  </View>
)

export default AppBar