import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  textInput: {
    padding: 10,
    backgroundColor: '#ccc',
    fontSize: 16,
    marginLeft: 25,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  location: {
    borderRadius: 100,
    backgroundColor: '#ccc',
    padding: 5,
  },
  locationText: {
    fontSize: 16,
    marginLeft: 20,
  },
  circle: {
    width: 5,
    height: 5,
    position: 'absolute',
    backgroundColor: '#000',
    top: 25,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 35,
    position: 'absolute',
    backgroundColor: '#000',
    top: 35,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    position: 'absolute',
    backgroundColor: '#000',
    top: 75,
    left: 15,
  },
});

export default styles;
