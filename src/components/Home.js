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
  <Container className={styles.home} class="center" >
    <h1>Home</h1>
    <Container className={styles.container1} >
      <Card>
        {/* About me */}
        <Image src={longboarding} className={styles.longboarding} />
      </Card>
      <Card>
        {/* awards */}
        <Image src={awards} className={styles.awards} />
      </Card>
      <Card>
        {/* polaroid */}
        <Image src={polaroid} className={styles.polaroid} />
      </Card>
    </Container>
    <Container className={styles.container2} >
      <Card>
        {/* files */}
        <Image src={files} className={styles.files} />
      </Card>
      <Card>
        {/* contact me OwO */}
        <Image src={contact} className={styles.contact} />
      </Card>
      <Card>
        {/* music */}
        <Image src={music} className={styles.music} />
      </Card>
    </Container>
      <Card>
        {/* projects and more */}
        <Image src={coding} className={styles.coding} />
      </Card>
    </Container>
  </>
)

export default Home;