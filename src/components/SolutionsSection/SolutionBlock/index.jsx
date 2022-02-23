import './index.scss'

const Index = (props) => {
  const {bgColor, textColor, imageUrl, linkUrl, title, subtitle} = props
  const blockStyle={
    'backgroundColor': bgColor || '#fff',
    'color': textColor || '#000',
  }
  return (
    <div className="solution-block" style={blockStyle}>
      <div className="solution-block__title">
        {title}
      </div>
      <div className="solution-block__subtitle">
        {subtitle}
      </div>
      <div className="solution-block__btn">
        Learn More <span>&gt;</span>
      </div>
      <div className="solution-block__image-wrapper">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
}

export default Index;
