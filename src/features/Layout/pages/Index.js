import React from 'react'
import Header from '../../Layout/components/Header.js/pages/Index'
import Main from '../../Layout/components/Main/pages/Index'
import Banner from '../components/Banner/pages/Banner'
import Section1 from '../components/Section01/pages/Section1'
import Section2 from '../components/Section02/pages/Section2'
export default function Index() {
  return (
    <div>
        <Header />
        {/* <Main /> */}
        <Banner />
        <Section1 />
        <Section2 />
    </div>
  )
}
