import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
  timeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 100,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    color: '#ccc',
  },
  icon: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 100,
    marginRight: 15,
  },
  rowText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
