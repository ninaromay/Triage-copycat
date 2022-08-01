//Styled Components
import { ThemeProvider } from 'styled-components'
import { GlobalStyled }  from './Styled/Global.styled'
import { theme }         from './Styled/Theme.styled'

//Context
import { GlobalContext, bbdd } from './Global.context.jsx'
import { useState, useEffect } from 'react'
import { Triage } from './Components/Triage'
import { useFetch } from './Hooks/useFetch'

import dotenv from 'dotenv'
let environment = dotenv.config().parsed

const App = () =>{

  const { data : datos, loading , error} = useFetch(bbdd)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled/>
      <GlobalContext.Provider value= { {datos} }>
        <div className="App">
         
          { loading && <Triage/> }
          {/* <Triage/>  */}


        </div>
      </GlobalContext.Provider>
    </ThemeProvider>
  )
}

export default App
