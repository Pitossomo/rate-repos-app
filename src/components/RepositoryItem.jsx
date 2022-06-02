import { View, StyleSheet } from 'react-native'
import theme from '../styles/theme'
import Text from './Text'

const ItemText = ({ children }) => (
  <Text
    color='textPrimary'
    fontSize='body'
  >
    {children}
  </Text>
)

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})

const RepositoryItem = ({ item }) => (
  <View style={styles.listItem}>
    <Text fontSize='subheading'>Full name: {item.fullName}</Text>
    <ItemText>Description: {item.description}</ItemText>
    <ItemText>Language: {item.language}</ItemText>
    <ItemText>Starts: {item.stargazersCount}</ItemText>
    <ItemText>Forks: {item.forksCount}</ItemText>
    <ItemText>Reviews: {item.reviewCount}</ItemText>
    <ItemText>Rating: {item.ratingAverage}</ItemText>
  </View>
)

export default RepositoryItem