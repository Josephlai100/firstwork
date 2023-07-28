// import classes from './index.module.css'
// function Home(){
//   return(
//     <div className={classes.section}>
//       <h1>This is Home page</h1>
//     </div>
//   )
// }

// export default Home
// function Home(){
//   return(
//     <div className={classes.DivContainer}>
//       <div className={classes.Image}>
//         <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2520sunset%2F&psig=AOvVaw1458DEjKZn_wfwMvv64T1v&ust=1690453687127000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjs4PCUrIADFQAAAAAdAAAAABAi" alt=""/>
//       </div>
//       <div className={classes.Textpage}>
//         <h3>Phone Services without the PhoneBill</h3>
//         <h2>Cut the cord from your wireless service provider. The Textnow app gives you the same nationwide phone service starting at $4.50/month.</h2>
//         <h4>We believe  that commication belongs to everyone. It should be free and flexible for all</h4>
//       </div>
//     </div>
//   )
// }


// export default Home

import BannerSection from '@/components/banner/bannerSection'
import classes from './index.module.css'

function Home(){
  return(
    <div className={classes.section}>
      <BannerSection/>
    </div>
  )
}

export default Home