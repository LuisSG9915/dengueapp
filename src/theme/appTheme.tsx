import { StyleSheet } from 'react-native';
import { palette } from './theme';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'blue',
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: 'rgb(178, 56, 45)',
    flex: 1,
  },

  headerTexto: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    // marginVertical: -10,
    color: 'rgba(254, 254, 254, 255)',
  },
  panelSuperiorGris: {
    backgroundColor: 'rgb(87, 87, 86)',
    // backgroundColor: 'red',
    flex: 7,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  panelInferiorRed: {
    backgroundColor: 'rgb(178, 56, 45)',
    flex: 8,
    opacity: 0.9,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputMargin: {
    alignItems: 'center',
  },

  inputBox: {
    alignItems: 'center',
    width: 292,
    height: 52,
    borderWidth: 3,
    borderColor: 'rgb(178, 56, 45)',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  inputText: {
    fontFamily: 'Segoe UI',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 30,
    color: 'rgb(7, 7, 7)',
    opacity: 0.5,
  },

  botonBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    height: 52,
    borderRadius: 16,
    backgroundColor: 'rgb(255, 210, 0)',
  },
  botonText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },

  container: {
    height: 55,
    width: '80%',
    marginTop: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    shadowColor: 'pink',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },
  textInputContainer: {
    marginHorizontal: 10,
    flex: 1,
    backgroundColor: 'transparent',
    height: 54,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    height: 54,
    margin: 0,
    padding: 0,
    borderRadius: 9,
    backgroundColor: 'white',
    elevation: 5, // Shadow android
    shadowColor: palette.dark.main, // Shadow ios
    shadowOpacity: 0.1, // Shadow ios
    shadowRadius: 15, // Shadow ios
    borderWidth: 1,
    borderColor: palette.grayScale.gray100,
    fontSize: 18,
  },
});
