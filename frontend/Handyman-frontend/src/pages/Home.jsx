import Footer from "../components/Footer/Footer";
import SlideshowContainer from "../components/SlideshowContainer";


const posts = [
  { img: 'https://www.worthview.com/wp-content/uploads/2017/12/electrician.jpg',
     heading: 'Certified Electricians',
     text: 'Need a spark of genius for your electrical woes? Book a certified electrician with Task mate and light up your life with quality service and reliable repairs!' },
  { img: 'https://i.pinimg.com/originals/ad/f3/7a/adf37a43ce8bc2ac3087e708c29fffdd.jpg',
    heading: 'Top-Notch Plumbers', 
    text: 'Drip, drip, drop no more! With Task mate, find top-notch plumbers who turn the tide on leaks and clogs, ensuring your pipes are perfect and your worries washed away.' },
  { img: 'https://thepaintpeople.com/wp-content/uploads/2017/05/wallpainter.jpg',
    heading: 'Expert Painters', 
    text: 'Transform your space with a fresh coat of paint! Expert painters ready to revamp your home. Book now for vibrant colors and flawless finishes' },
  { img: 'https://www.worthview.com/wp-content/uploads/2019/12/featured-image.jpg', 
    heading: 'Skilled Carpenters',
    text: 'Effortlessly book skilled carpenters online. Quality craftsmanship just a click away. Get your projects done stress-free ' },
  { img: 'https://img.freepik.com/premium-photo/mechanic-workshop-diagnoses-repairs-engine-car-systems-car-repair-diagnostics-garage-modern-car-service-brutal-worker-mechanic_331695-16621.jpg', 
    heading: 'Expert Mechanics',
    text: 'Car trouble? We have got you covered! Expert mechanics ready to fix any issue. Book now for reliable service and peace of mind' },
];


export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#eff6d3]">
     
      {/* <TaskRequsts /> */}
      <div className="text-3xl font-bold m-5 text-black">
        Popular Services
      </div>
      <div className="flex flex-wrap justify-center">
        {/* <Link to="/profile"> */}
        <SlideshowContainer posts={posts} />
       
        {/* </Link> */}
      </div >
      {/* <div className="w-full">
      <Footer/>
      </div> */}

      

     
     
    </div>
    
  );
}