import { StyleSheet, StatusBar }  from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    height: '40%',
    marginBottom: 50,
  },
  boxInput: {
    width: '95%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7e7e7e',
    borderRadius: 16,
    marginVertical: 10,
  },
  input: {
    width: '80%',
    marginLeft: 10,
  },
  buttonSubmit: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#45ff85',
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2.5
  },
  textSubmit: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,.5)',
  },
  obs: {
    position: 'absolute',
    width: '80%',
    top: StatusBar.currentHeight+10,
    color: '#999',
    fontSize: 12,
    textAlign: 'center'
  }
});

export default styles;