import React from 'react'
import MasterLayout from '../layouts/MasterLayout'
import Form from '../components/form';
import css from "./Contact.module.css";


export default function contact() {
  return (
    <MasterLayout>
      <section className={css.content}>
        <Form />
      </section>
      <section className={css.hero}></section>
    </MasterLayout>
  )
}

