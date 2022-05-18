import styled, { createGlobalStyle } from 'styled-components'
import background from './images/background.jpg'

export const GlobalStyle = createGlobalStyle`
html {
  height:100%;
}
body{
  background-image: url(${background});
  background-size:cover;
  margin:0;
  padding:0 20px;
  display:flex;
  justify-content:center;
}

*{
  font-family:'Catamaran', sans-serif;
  box-sizing:border-box;
}
`

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
> p{
  color:grey;
}

.number, .score{
  padding:10px;
}

.score{
  color:black;
  font-size:2rem;
  margin:0;
}

h1 {
  font-family: Fascinate Inline;
  background-image: linear-gradient(180deg, mediumorchid, lightpink);
  font-weight: 400;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(2px 2px white);
  font-size: 70px;
  text-align: center;
  margin: 20px;
}
.start, .next {
  cursor: pointer;
  height: 40px;
  margin: 20px 0;
  padding: 0 40px;
}
.start {
  max-width: 200px;
}

.button{
  margin:5px;
}

div{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

img{
  border-radius:10px;
}
.over{
  font-family: Fascinate Inline;
  padding:25px;
  color:red;
  font-size:40px;
}
`

