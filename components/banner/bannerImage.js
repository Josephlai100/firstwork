import classes from './bannerImage.module.css'

function BannerImg(){
    return(
        <div className={classes.figure}>
            <img src="../../fodimg.jpg" alt="banner Image"/>
        </div>
    )
}

export default BannerImg