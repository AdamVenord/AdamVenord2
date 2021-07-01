import React from "react";
import { Link, } from 'react-router-dom'
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
  <Container className={styles.home} class="center" style={{ width: "auto" }}>
    <h1>Home</h1>
    <Container className={styles.container1} >
      <Card>
        <Link to="About">
          {/* About me */}
          <Image src={longboarding} className={styles.longboarding} />
        </Link>
      </Card>
      <Card>
        <Link to="awards" >
          {/* awards */}
          <Image src={awards} className={styles.awards} />
        </Link>
      </Card>
      <Card>
        <Link to ="/Photography">
          {/* polaroid */}
          <Image src={polaroid} className={styles.polaroid} />
        </Link>
      </Card>
    </Container>
    <Container className={styles.container2} >
      <Card>
        <Link to="Resume">
          {/* resume */}
          <Image src={files} className={styles.files} />
        </Link>
      </Card>
      <Card>
        <Link to="Contact">
          {/* contact me OwO */}
          <Image src={contact} className={styles.contact} />
        </Link>
      </Card>
      <Card>
        <Link to="Music">
          {/* music */}
          <Image src={music} className={styles.music} />
        </Link>
      </Card>
    </Container>
      <Card>
        <Link to="Coding">
          {/* projects and more */}
          <Image src={coding} className={styles.coding} />
        </Link>
      </Card>
    </Container>
  </>
)

export default Home;