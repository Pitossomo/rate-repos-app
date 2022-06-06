import { StyleSheet, View } from 'react-native'
import AppBar from './AppBar'
import SignIn from './SignIn'
import RepositoryList from './RepositoryList'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Stack = createNativeStackNavigator()
const screenOptions = { header: AppBar }

const Main = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Repositories" component={RepositoryList} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </View>
  )
}

export default Main