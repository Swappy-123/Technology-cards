// Write your code here.
import './index.css'

const CardItem = paras => {
  const {cardDetails} = paras
  const {title, description, imageUrl, className} = cardDetails
  return (
    <li className={`${className} card-container`}>
      <h1 className="head">{title}</h1>
      <p className="para">{description}</p>
      <img src={imageUrl} alt={title} />
    </li>
  )
}

export default CardItem
