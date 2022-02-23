import './index.scss'
import TADetail from './Detail'

const taList = [
  {
    iconClass: 'fas fa-user-md',
    title: 'Practitioners',
    subtitle: 'Refine procedural techniques prior to performing certain procedures on actual patients​',
  },
  {
    iconClass: 'fas fa-user-tie',
    title: 'Educators',
    subtitle: 'No longer rely on 2D textbook images to teach concepts best understood through 3D visualization',
  },
  {
    iconClass: 'fas fa-user-graduate',
    title: 'Students',
    subtitle: 'Better memorize and retain anatomy knowledge through realistic VR immersion',
  },
  {
    iconClass: 'fas fa-user-injured',
    title: 'Patients',
    subtitle: 'Better understand health conditions through immersive medical image visualization',
  },
]

const Index = () => {
  return (
    <section className="section-ta">
      <h2 className="section-ta__title">
      Our comprehensive VR-based learning solutions<br />
      can be used at any stage of your medical journey
      </h2>
      <div className="section-ta__details-wrapper">
        {
          taList.map((ta, index)=>(
            <TADetail key={index} {...ta}/>
          ))
        }
      </div>
    </section>
  );
}

export default Index;
