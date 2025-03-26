import doctorImg01 from "../images/doctor-img01.png";
import doctorImg02 from "../images/doctor-img02.png";
import doctorImg03 from "../images/doctor-img03.png";

export const doctors = [
  {
    id: 1,
    name: "Dr. Alfaz Ahmed",
    specialty: "Surgeon",
    avgRating: 4.8,
    totalRating: 232,
    photo: doctorImg01,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
    description:
      "Dr. Alfaz Ahmed is a highly experienced and renowned surgeon with over a decade of expertise in general and specialized surgeries. He has successfully performed numerous life-saving operations, including complex abdominal, cardiovascular, and orthopedic procedures. Dr. Ahmed is known for his meticulous surgical skills, innovative approach, and commitment to ensuring patient safety and satisfaction. He believes in adopting the latest minimally invasive techniques to promote faster recovery and reduce postoperative complications. His empathetic nature and dedication to his patients have earned him a reputation as one of the most trusted surgeons in the region.",
    notableAchievement: "Performed over 5,000 successful surgeries with a 98% patient satisfaction rate.",
    education: {
      phd: {
        field: "Surgical Sciences",
        university: "Harvard Medical School, USA",
        year: 2012
      },
      masters: {
        field: "Master of Surgery (MS) in General Surgery",
        university: "King's College London, UK",
        year: 2008
      },
      bachelors: {
        field: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
        university: "Dhaka Medical College, Bangladesh",
        year: 2004
      }
    },
    experience: {
      years: 15,
      previousRoles: [
        {
          title: "Chief Surgeon",
          hospital: "Royal London Hospital, UK",
          years: "2014-2019"
        },
        {
          title: "Senior Resident Surgeon",
          hospital: "Harvard Medical Center, USA",
          years: "2012-2014"
        }
      ],
      expertise: ["Minimally Invasive Surgery", "Robotic-Assisted Surgery", "Trauma and Emergency Surgery"]
    }
  },
  {
    id: 2,
    name: "Dr. Saleh Mahmud",
    specialty: "Neurologist",
    avgRating: 4.8,
    totalRating: 242,
    photo: doctorImg02,
    totalPatients: 1300,
    hospital: "Mount Adora Hospital, Sylhet.",
    description:
      "Dr. Saleh Mahmud is a leading neurologist specializing in the diagnosis and treatment of disorders affecting the brain, spinal cord, and nervous system. With extensive experience in managing conditions such as epilepsy, multiple sclerosis, stroke, Parkinson's disease, and migraines, Dr. Mahmud is deeply committed to advancing neurological care. He integrates cutting-edge medical technologies and personalized treatment plans to improve patient outcomes. Passionate about research, he actively participates in clinical studies to develop better therapies for neurological disorders. Patients appreciate his compassionate approach and ability to explain complex medical conditions in an understandable manner.",
    notableAchievement: "Published 10+ research papers on innovative neurological treatments.",
    education: {
      phd: {
        field: "Clinical Neurology",
        university: "Johns Hopkins University, USA",
        year: 2014
      },
      masters: {
        field: "Master of Medicine (MMed) in Neurology",
        university: "University of Toronto, Canada",
        year: 2010
      },
      bachelors: {
        field: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
        university: "Rajshahi Medical College, Bangladesh",
        year: 2006
      }
    },
    experience: {
      years: 14,
      previousRoles: [
        {
          title: "Lead Neurologist",
          hospital: "Toronto General Hospital, Canada",
          years: "2016-2021"
        },
        {
          title: "Senior Neurology Consultant",
          hospital: "Johns Hopkins Hospital, USA",
          years: "2014-2016"
        }
      ],
      expertise: ["Neurodegenerative Disorders", "Epilepsy Treatment", "Advanced Brain Imaging"]
    }
  },
  {
    id: 3,
    name: "Dr. Farid Uddin",
    specialty: "Dermatologist",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg03,
    totalPatients: 1250,
    hospital: "Mount Adora Hospital, Sylhet.",
    description:
      "Dr. Farid Uddin is an expert dermatologist with vast experience in treating a wide range of skin conditions, from common ailments like acne, eczema, and psoriasis to complex dermatological disorders. He specializes in cosmetic dermatology, providing treatments such as laser therapy, anti-aging procedures, and skin rejuvenation techniques. Dr. Uddin is passionate about educating his patients on proper skincare and preventive measures to maintain healthy skin. He continuously updates his knowledge by attending international dermatology conferences and workshops. His personalized approach and keen eye for detail have helped countless patients achieve radiant and healthy skin.",
    notableAchievement: "Awarded ‘Best Dermatologist of the Year’ in 2022 for excellence in skincare.",
    education: {
      phd: {
        field: "Dermatology and Skin Sciences",
        university: "University of California, San Francisco (UCSF), USA",
        year: 2015
      },
      masters: {
        field: "Master of Dermatology",
        university: "University of Melbourne, Australia",
        year: 2011
      },
      bachelors: {
        field: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
        university: "Chittagong Medical College, Bangladesh",
        year: 2007
      }
    },
    experience: {
      years: 13,
      previousRoles: [
        {
          title: "Head of Dermatology",
          hospital: "Melbourne Skin Care Institute, Australia",
          years: "2017-2022"
        },
        {
          title: "Senior Dermatology Consultant",
          hospital: "UCSF Medical Center, USA",
          years: "2015-2017"
        }
      ],
      expertise: ["Cosmetic Dermatology", "Laser Skin Treatments", "Autoimmune Skin Disorders"]
    }
  }
];
