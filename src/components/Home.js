import React from "react";
import { Card, Image } from 'semantic-ui-react'
import awards from './Images/awards.png'
import coding from './Images/coding.png'
import contact from './Images/contact.png'
import files from './Images/files.png'
import longboarding from './Images/longboarding.png'
import music from './Images/music.png'
import polaroid from './Images/polaroid.png'

const Home = () => (
  <>
    <h1>Home</h1>
    <Card>
      {/* About me */}
      <Image src={longboarding} />
    </Card>
    <Card>
      {/* awards */}
      <Image src={awards} />
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
  </>
)

export default Home;