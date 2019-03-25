import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import ProductSmokingHero from '../components/imbit/ProductSmokingHero';
import ProductHero from '../components/imbit/ProductHero';
import ProductValues from '../components/imbit/ProductValues';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    
    <ProductHero  />
    <ProductValues />         
    <ProductSmokingHero />
  </Layout>
)

export default IndexPage



// import React, { Component } from 'react';
// import MaLayout from '../components/MaLayout'
// import ProductSmokingHero from '../components/imbit/ProductSmokingHero';
// import ProductHero from '../components/imbit/ProductHero';
// import ProductValues from '../components/imbit/ProductValues';

// import Helmet from 'react-helmet';
// const ImbitPage = class ImbitPage extends Component {
//     render() { 
//         return ( 
//             <MaLayout>
//                      <Helmet>
//                         <title>IMbit-Web3.0时代数字身份系统,自主控制授权你的身份数据 </title>
//                      </Helmet>
                    
//                         <div style={{marginTop: '50px'}}>
//                             <ProductHero  />
//                             <ProductValues />
                       
//                             <ProductSmokingHero />
//                             {/* <Footer />  */}
//                         </div>
//             </MaLayout>   
//         ) 
//     }
// };
// export default ImbitPage




