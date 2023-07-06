import Home from './src/screens/Home'
import { StatusBar } from 'react-native'

const App = () => {
  return (
    <>
      <StatusBar 
        barStyle={"light-content"}
        translucent
      />
      <Home />
    </>
  )
}

export default App