import styled from '@emotion/styled'
import PokeNameChip from '../Common/PokeNameChip'

const PokeCard = () =>{
  const imgScr = `https://m.media-amazon.com/images/I/5124J8JXn-L._AC_UF894,1000_QL80_.jpg`
  return(
    <Item>
      <Header>
        <PokeNameChip/>
      </Header>
      <Body>
        <Image src={imgScr} alt={'psyduck'}/>
      </Body>
      <Footer>

      </Footer>
    </Item>
  )
}

const Item = styled.li`
  display: flex;
  flex-direction:column;
  padding:8px;
  width:250px;
  height:300px;
  box-shadow:1px 1px 3px 1px #c0c0c0;
  border: 1px solid #c0c0c0;
`

const Header = styled.section`
  display:flex;
`
const Body = styled.section`
  display:flex;
  align-items:center;
  justify-content:center;
  margin:8px 0;
`
const Image = styled.img`
  width:50%;
  margin:8px 0;
`

const Footer =styled.section`
  display:flex;
  margin-left:auto;
  flex-direction: row;
`

export default PokeCard