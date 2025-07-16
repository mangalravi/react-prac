
const Child = ({
    mainheading , mainpara1 , mainpara2 , hide , imageArray , data , currentIndex
}) => {
  return (
    <div>
    <h1>{mainheading}</h1>
    <p>{mainpara1}</p>
    {!hide && <p>{mainpara2}</p>}
    <img src={imageArray[currentIndex]} alt={`slider ${currentIndex}`} style={{ width: '400px', height: 'auto' }} />
    </div>
  )
}

export default Child