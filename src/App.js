import './App.css';
import Card from './components/Card';
import rp2 from "./images/rp2.jpg";
import p1 from "./images/p1.png";
import p2 from "./images/p2.jpg";
import p3 from "./images/p3.jpg";
function App() {

  const data = [
    {
      title:"AI + RPA is what we do",
      details:"Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
      link:"AI + RPA Automation",
      image:rp2
    },
    {
      title:"Make Bolder Choices",
      details:"Digital focused strategies to realize market-changing ideas",
      link:"Build Better Apps",
      image:p1
    },
    {
      title:"Innovate with Speed",
      details:"Create higher quality software, deliver on customer expectations and business goals",
      link:"DevOps",
      image:p2
    },
    {
      title:"Embrace Cloud",
      details:"With Cloud-First accelerate innovation and optimize performance",
      link:"Cloud Services",
      image:p3
    }
  ]

  return (
    <>
      <h1 className='title'>
        Let's Collaborate
      </h1>
      <div className="card-container">
          {
            data.map((card) => {
              return(
                <Card title={card.title} details={card.details} link={card.link} image={card.image}/>
              )
            })
          }
      </div>
      <div className="button-container">
        <button>Get in touch</button>
      </div>
    </>
  );
}

export default App;
