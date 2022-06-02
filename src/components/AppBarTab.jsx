import { Pressable, StyleSheet, Text } from 'react-native'
import theme from '../styles/theme'

const styles = StyleSheet.create({
  tab: {
    color: 'white',
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    padding: 12
  }
})

const AppBarTab = ({ label }) => {
  return (
    <Pressable>
      <Text style={styles.tab}>{label}</Text>
    </Pressable>
  )
}

export default AppBarTab