import { View, Text, StyleSheet } from 'react-native'
import theme from '../styles/theme'

const styles = StyleSheet.create({
  bar: {
    backgroundColor: theme.colors.primary,
    padding: 16
  },
  text: {
    color: 'white',
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  }
})

const Heading = () => (
  <View style={styles.bar}>
    <Text style={styles.text}>Rate Repository Application</Text>
  </View>
)

export default Heading