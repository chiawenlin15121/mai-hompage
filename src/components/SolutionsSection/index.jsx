import './index.scss'
import SolutionBlock from './SolutionBlock'

const solutions = [
  {
    textColor: '#fff',
    bgColor: '#000',
    title: 'BodyMap',
    subtitle: 'Specializing in immersive VR anatomy learning & simulation training',
    imageUrl: 'https://www.mai.ai/wp-content/uploads/2021/09/bm-1.jpg',
    linkUrl: 'http://mai.ai/bodymap'
  },
  {
    textColor: '#fff',
    bgColor: '#171717',
    title: 'AcuMap',
    subtitle: 'Revolutionizing the future of acupuncture training',
    imageUrl: 'https://www.mai.ai/wp-content/uploads/2021/09/acu-2.jpg',
    linkUrl: 'http://mai.ai/acumap'
  },
  {
    textColor: '#000',
    bgColor: '#fff',
    title: 'DigiTwin',
    subtitle: 'Engaging patients with their Digital Twin for modern patient education',
    imageUrl: 'https://www.mai.ai/wp-content/uploads/2021/09/DT.jpg',
    linkUrl: 'http://mai.ai/digitwin'
  },
]

const Index = () => {
  return (
    <section className="section-solution">
      <div className="section-solution__header">
        <div className="section-solution__header__title">
          VR-BASED SOLUTIONS
        </div>
        <div className="section-solution__header__subtitle">
          For the Next Generation of<br />
          Health Practitioners
        </div>
      </div>
      <div className="section-solution__blocks-wrapper">
        {
          solutions.map((solution,index) => (
            <SolutionBlock
              key={index}
              {...solution}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Index;
