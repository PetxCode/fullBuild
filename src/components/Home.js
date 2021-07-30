import styled from "styled-components"
import img from "./1.jpg"
import React, {useState, useEffect} from "react"
import axios from "axios"

const Home = () => {

  const [backendData, setBackendData] = useState([])

  const getData = async() => {
  const result =  await axios.get("http://localhost:2110/api/")
    if(result){
      setBackendData(result.data)
      console.log(backendData)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      {
        backendData?.map(item => (
          <Wrapper key={item._id}>
        <Avatar src={item.image} />
        <Category>{item.category}</Category>
        <Card>{item.title}</Card>
        <Description>{item.description}</Description>
        <Data>
          <Price>
            <Cost>{item.price}</Cost>
            <CostTitle>Price</CostTitle>
          </Price>
          <Vr/>
          <Price>
            <Cost>2000</Cost>
            <CostTitle>Price</CostTitle>
            </Price>
       
          <Vr/>
          <Price>
          <Cost>{backendData.length}</Cost>
            <CostTitle>Total Entry</CostTitle>
          </Price>
          
        </Data>
      </Wrapper>
        ))
      }
    </Container>
  )
}

export default Home

const Vr = styled.div`
  height: 80%;
  width: 2px;
  background-color: black;
  opacity: 0.2;
`

const Data = styled.div`
/* background-color: #FC4B0B; */
background-color: #fd6805;
height: 70px;
width:100%;
font-weight: bold;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 0 0 10px 10px;
`
const Price = styled.div`
display: flex;
width:100%;
height: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Cost = styled.div`
color:white;

`
const CostTitle = styled.div`
  color: lightgray;
  font-size: 10px;
  margin-top: 5px;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px
`
const Wrapper = styled.div`
margin: 20px;
  width: 300px;
  height: 400px;
  background-color: lightblue;
  border-radius: 10px;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  display: flex;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 53%) 0px 16px 10px -10px;
    

`
const Card = styled.div`
margin-top: 10px;
font-weight: 500;
font-size: 20px;
`
const Description = styled.div`
margin-top: 5px;
font-weight: 500;
font-size: 10px;
color: gray;
flex: 1;
`
const Category = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
  margin-top: 20px;
  color: #FF4A08;
`
const Avatar = styled.img`
width:100%;
height: 200px;
object-fit: cover;
border-radius: 10px 10px 0 0;
`