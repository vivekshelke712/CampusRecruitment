import React from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'

const EnterPrenuer = () => {
    const schemes = [
        {
            id: 1,
            title: "Startup India",
            description: "Startup India is a flagship initiative of the Government of India, intended to build a strong ecosystem for nurturing innovation and startups in the country.",
            link: "https://www.startupindia.gov.in/"
        },
        {
            id: 2,
            title: "Stand-Up India",
            description: "Stand-Up India scheme facilitates bank loans between ₹10 lakh and ₹1 crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up greenfield enterprises.",
            link: "https://www.standupmitra.in/"
        },
        {
            id: 3,
            title: "MUDRA Yojana",
            description: "Pradhan Mantri Mudra Yojana (PMMY) is a scheme initiated by the Government of India to provide loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.",
            link: "https://www.mudra.org.in/"
        },
        // Add more schemes below
        {
            id: 4,
            title: "Make in India",
            description: "Make in India is an initiative launched by the Government of India to encourage companies to manufacture their products in India.",
            link: "https://www.makeinindia.com/"
        },
        {
            id: 5,
            title: "Atal Innovation Mission",
            description: "Atal Innovation Mission (AIM) is a flagship initiative by NITI Aayog to promote a culture of innovation and entrepreneurship across the country.",
            link: "https://www.aim.gov.in/"
        },
        {
            id: 6,
            title: "Pradhan Mantri Kaushal Vikas Yojana",
            description: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY) is a skill development scheme aimed at enabling Indian youth to take up industry-relevant skill training.",
            link: "https://www.pmkvyofficial.org/"
        },
        {
            id: 7,
            title: "Digital India",
            description: "Digital India is an initiative by the Government of India to ensure that government services are made available to citizens electronically by improving online infrastructure and internet connectivity.",
            link: "https://www.digitalindia.gov.in/"
        },
        {
            id: 8,
            title: "Pradhan Mantri Awas Yojana",
            description: "Pradhan Mantri Awas Yojana (PMAY) is a scheme by the Government of India with the aim of providing affordable housing to the urban poor by 2022.",
            link: "https://pmaymis.gov.in/"
        },
        {
            id: 9,
            title: "National Rural Employment Guarantee Act (NREGA)",
            description: "NREGA is a social security measure that aims to guarantee the 'right to work' and ensure livelihood security in rural areas.",
            link: "https://nrega.nic.in/netnrega/home.aspx"
        },
        {
            id: 10,
            title: "National Small Industries Corporation (NSIC) Scheme",
            description: "The NSIC Scheme provides various services to small-scale industries in India, including financial assistance, marketing support, and technology support.",
            link: "https://nsic.co.in/"
        },
        // Add more schemes as needed
    ];

    return <>
        <Navbar />
        <div>
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/Add_a_subheading_1_.png?VersionId=MoNEvek00g1J_WpgxJkZkiQbvUs3SVU7" alt="" />
        </div>
        {/* <div>
            <img src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6c3bdab3-e54a-4515-826a-c6894410b703.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1" alt="" className='h-[full] w-full' />
        </div> */}
        {/* <div>
            <img src="https://www.deshgaon.com/wp-content/uploads/2023/11/114135-puvvvzhwsd-1551284213.jpg" className='mx-auto ' alt="" />
        </div> */}
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Government Schemes for Entrepreneurs</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {schemes.map(scheme => (
                    <div key={scheme.id} className="bg-white p-6 rounded-lg shadow-md gap-2 m-4">
                        <h2 className="text-xl font-semibold mb-2">{scheme.title}</h2>
                        <p className="text-gray-600 mb-4">{scheme.description}</p>
                        <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </>
    
        
        
}

export default EnterPrenuer
