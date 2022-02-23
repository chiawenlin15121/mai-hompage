import './index.scss'

const Index = () => {
  return (
    <section className="section-main">
          <div className="section-main__block section-main__left">
            <div className="pb text-accent">December 8, 2021, 12PM - 1PM EST</div>
            <div className="h1">A Virtual Tour of</div>
            <div className="pb h1">the Heart and Circulation</div>
            <div className="pb divider-accent"></div>
            <div className="text-muted">Speaker</div>
            <div className="pb h2">Gregory Katz</div>
            <div className="pb section-main__avatar">
              <img src="https://www.mai.ai/wp-content/uploads/2021/11/VR-Event-09.png" alt="" />
            </div>
            <div className="text-muted">MD</div>
            <div className="pb">speciality in Cardiology</div>
            <div className="text-muted">Assistant Professor</div>
            <div>Department of Medicine at</div>
            <div className="pb">NYU Grossman School of Medicine</div>
            <div className="section-main__btn">
            Watch Event Recordings
            </div>
            <div className="text-accent">
            CME Eligible – 1.0 &nbsp;
            <i className="italic">
             AMA PRA Category 1 Credits™
            </i>
            </div>

          </div>
          <div className="section-main__block section-main__right">
            <img src="https://www.mai.ai/wp-content/uploads/2021/11/Event.png" alt="" />
          </div>
        </section>
  );
}

export default Index;
