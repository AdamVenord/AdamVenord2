import React from "react"
import { Container } from 'semantic-ui-react'
import styles from '../css/mystyle.module.css'; 

const Missing = () => (
// this page is pretty good, but it can be better

  <Container className={styles.home} class="center" >
    <h2>Whoops! Broken Link</h2>
  </Container>
);

export default Missing;