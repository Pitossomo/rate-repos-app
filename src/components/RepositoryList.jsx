import { repositories } from '../data/repositories'
import { FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem'

/* const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />
*/

const renderItem = ({ item }) => <RepositoryItem item={item} />

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={renderItem}
    // ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default RepositoryList

