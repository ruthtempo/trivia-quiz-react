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
  font-family:'Roboto', sans-serif;
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
  font-family: Roboto;
  background-image: linear-gradient(180deg, lightcoral, lightpink);
  font-weight: 400;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(2px 2px white);
  font-size: 40px;
  text-align: center;
  margin: 10px;
}

h1{
  font-family: Roboto;
  background-image: linear-gradient(180deg, lightcoral, lightpink);
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
  margin-top: 20px;
  margin-bottom:10px;
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

.number{
  font-size:30px;
  background-image: linear-gradient(180deg, lightcoral, lightpink);
  font-weight: 400;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(2px 2px white);
}

.button{
  margin:5px;
}

div{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  min-width:300px;
  max-width:400px;
  border-radius:10px;
  padding:8px;
  margin-bottom:10px;
  color:CornflowerBlue;
}

img{
  border-radius:10px;
  border-style:solid;
  border-color: lightpink;
  border-width:2px;
}
.over{
  font-weight: 400;
  font-family: Roboto;
  background-image: linear-gradient(180deg, firebrick, lightcoral);
  font-weight: 400;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(2px 2px white);
  font-size: 40px;
  text-align: center;
  margin: 10px;
}
`

