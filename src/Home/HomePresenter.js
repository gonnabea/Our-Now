import React from "react"
import styled from "styled-components"
import Book from "../Components/3DBook"
import Navigation from "../Hooks/useNavigation"

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Head = styled.div`
  width: 100%;
`

const BookFront = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #314458; */
  background-image: url("/cover.jpg");
  background-size: cover;
  box-shadow: 0 0 10px white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Intro = styled.main``

export default ({ user, loading }) => (
  <Container>
    <Book
      width="500px"
      height="650px"
      spineWidth="50px"
      front={
        <BookFront>
          <Head>
            <Navigation />
            {loading === true ? "Now Loading..." : `Welcome ${user ? user.username : ""}!`}
          </Head>
          <Intro></Intro>
        </BookFront>
      }
    />
  </Container>
)
