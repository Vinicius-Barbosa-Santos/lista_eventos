import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#131016'
    },
    eventName: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate : {
      color : '#6B6B6B',
      marginTop: 5
    },
    form : {
      gap: 12,
      marginTop: 36,
      marginBottom: 42,
      flexDirection: 'row',
    },
    input : {
      height: 56,
      padding: 16,
      flex: 1,
      color: '#fff',
      borderRadius: 5,
      backgroundColor : '#1f1e25'
    },
    buttonText : {
      color: '#fff',
      fontSize: 18
    },
    button : {
      width: 56,
      height: 56,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#31CF67'
    },
    listEmptyText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center'
    }
  })