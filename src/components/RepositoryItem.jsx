import { Image, View, StyleSheet } from 'react-native'
import theme from '../styles/theme'
import Text from './Text'

const yMargin = 4
const xMargin = 8
const borderRadius = 4

const styles = StyleSheet.create({
  listItem: {
    padding: yMargin,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatar: {
    width: 50,
    height: 50,
    marginVertical: yMargin,
    marginHorizontal: xMargin,
    borderRadius: borderRadius
  },
  horizontalWrapper: {
    flexDirection: 'row',
  },
  language: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    padding: 4,
    borderRadius: borderRadius,
    width: 'fit-content',
    marginVertical: yMargin,
    marginHorizontal: xMargin,
  },
  boldText: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: 'bold',
    marginVertical: yMargin,
    marginHorizontal: xMargin,
  },
  paleText: {
    fontSize: theme.fontSizes.body,
    marginVertical: yMargin,
    marginHorizontal: xMargin,
  },
  details: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center'

  }
})

const Details = ({ label, value }) => (
  <View style={styles.details}>
    <Text style={styles.boldText}>{value}</Text>
    <Text style={styles.paleText}>{label}</Text>
  </View>
)

const RepositoryItem = ({ item }) => (
  <View style={styles.listItem}>
    <View style={styles.horizontalWrapper}>
      <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      <View>
        <Text style={styles.boldText}>{item.fullName}</Text>
        <Text style={styles.paleText}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
      </View>
    </View>
    <View style={styles.horizontalWrapper}>
      <Details value={`${Math.round(item.stargazersCount / 100) / 10}k`} label='Stars' />
      <Details value={`${Math.round(item.forksCount / 100) / 10}k`} label='Forks' />
      <Details value={item.reviewCount} label='Reviews' />
      <Details value={item.ratingAverage} label='Rating' />
    </View>
  </View>
)

export default RepositoryItem