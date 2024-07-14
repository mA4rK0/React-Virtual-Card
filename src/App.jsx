import './App.css';

const socialMedia = [
  {
    icon : "fa-facebook-f",
    href : "https://youtu.be/OTmJmteT7hw?si=gkvpx9I9JmbPkob4",
  },
  {
    icon : "fa-x-twitter",
    href : "https://youtube.com/shorts/ouvVxWLzovA?si=bDufUzyVrX9DEYrX",
  },
  {
    icon : "fa-instagram",
    href : "https://www.instagram.com/_m4.rk0/",
  },
  {
    icon : "fa-linkedin-in",
    href : "https://youtu.be/QdezFxHfatw?si=y8J6QJHqkc-glB4T",
  },
  {
    icon : "fa-github",
    href : "https://youtu.be/QdezFxHfatw?si=y8J6QJHqkc-glB4T",
  }
];

function App() {

  return (
    <>
      <section className='card'>
        <section className='top'>
          <Header />
          <Identity />
        </section>
        <section className='bottom'>
          <Biodata />
          <Highlight />
        </section>
      </section>
    </>
  );
};

function SocialButton({icon, link}) {
  return (
    <>
      <button onClick={() => {
        window.open(link, '_blank');
      }}><i className={`fa-brands ${icon}`}></i></button>
    </>
  );
};

function Badge({text}) {
  return (
    <>
      <button>
          <div className='height'>{text}</div>
      </button>
    </>
  );
};

function Highlight() {
  return (
    <>
      <div className='buttons'>
        <Badge text={'💼 Manager'} />
        <Badge text={'💰 Buisness'} />
        <Badge text={'😼 Cat'} />
      </div>
    </>
  );
};

function Biodata() {
  return (
    <>
      <div className='desc'>
        <p>
          My name is <b>Miauw</b> and I am a Buisness Paw Manager.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore perferendis amet ex sunt esse aperiam voluptatibus placeat, ipsam ipsa nulla.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eligendi minus suscipit perspiciatis rem, hic eius ipsam, ipsum dolores</p>
      </div>
    </>
  );
};

function Identity() {
  return (
    <>
      <div className='text'>
        <div className='name-wrapper'>
          <div className='name'>
            Mr. Miauw
          </div>
        </div>
        <div className='title'>Buisness Paw</div>
      </div>
    </>
  );
};

function Header() {
  const midIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, midIndex);
  const socialRight = socialMedia.slice(midIndex);

  return (
    <>
      <div className='social-buttons'>
        {socialLeft.map(({icon, href}, index) => {
          return <SocialButton key={index} icon={icon} link={href}/>;
        })}
      </div>
      <div className='social-buttons right'>
        {socialRight.map(({icon, href}, index) => {
          return <SocialButton key={index} icon={icon} link={href} />;
        })}
      </div>
    </>
  );
};

export default App;
