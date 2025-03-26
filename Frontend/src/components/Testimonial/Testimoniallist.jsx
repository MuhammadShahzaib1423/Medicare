import React from 'react';
import patientimage from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "M Ahmed",
    rating: 4,
    text: "Excellent service and professional staff. Highly recommended!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    text: "The best experience I've had with healthcare services.",
  },
  {
    id: 3,
    name: "John Smith",
    rating: 4,
    text: "Very caring and attentive team. Great experience overall.",
  },
  {
    id: 4,
    name: "Emily Davis",
    rating: 5,
    text: "Outstanding care and support throughout my treatment.",
  },
  {
    id: 5,
    name: "Robert Wilson",
    rating: 4,
    text: "Really impressive service and friendly staff.",
  },
];

const Testimoniallist = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,        
    slidesToScroll: 3,        
    autoplay: true,
    autoplaySpeed: 3000,      
    arrows: false,
    pauseOnHover: true,
    responsive: [             
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <HiStar
          key={index}
          className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
        />
      ));
  };

  return (
    <div className="py-[30px] px-5 max-w-7xl mx-auto">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-3">
            <div className="
              bg-white 
              rounded-lg 
              shadow-lg 
              border 
              border-gray-200 
              p-3
            h-[230px]
              transform 
              transition-all 
              duration-300
              hover:shadow-xl
            ">
              <div className="flex flex-col items-center ">
                <div className="mb-4">
                  <img 
                    src={patientimage} 
                    alt={`${testimonial.name}'s avatar`} 
                    className="w-16 h-16 rounded-full border-2 border-gray-200"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-semibold text-gray-800 mb-2">
                    {testimonial.name}
                  </h1>
                  <div className="flex justify-center gap-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimoniallist;