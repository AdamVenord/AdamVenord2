import React from "react";
import { Card, Image, Container } from 'semantic-ui-react'
import awards from './Images/awards.png'
import coding from './Images/coding.png'
import contact from './Images/contact.png'
import files from './Images/files.png'
import longboarding from './Images/longboarding.png'
import music from './Images/music.png'
import polaroid from './Images/polaroid.png'
import styles from '../css/mystyle.module.css'; 
import '../css/App.css'

const Home = () => (
  <>
  <Container className={styles.home} >
    <h1>Home</h1>
      <Card>
        {/* About me */}
        <Image src={longboarding} className={styles.longboarding} />
      </Card>
      <Card>
        {/* awards */}
        <Image src={awards} rounded/>
      </Card>
      <Card>
        {/* files */}
        <Image src={files} />
      </Card>
      <Card>
        {/* music */}
        <Image src={music} />
      </Card>
      <Card>
        {/* polaroid */}
        <Image src={polaroid} />
      </Card>
      <Card>
        {/* contact me OwO */}
        <Image src={contact} />
      </Card>
      <Card>
        {/* projects and more */}
        <Image src={coding} />
      </Card>
    </Container>
  </>
)

export default Home;