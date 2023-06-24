import { loremIpsum } from "lorem-ipsum"

export default async (models) => {
    const employeeModel = [
        {
          id: 1,
          name: "John Doe",
          title: "Managing Partner",
          bio: "John Doe is the Managing Partner at our company and brings over 20 years of experience in venture capital and private equity to the table. He is responsible for overseeing the company's strategic direction and managing its investment portfolio.<br>Before joining our team, John held various senior roles at some of the world's leading investment firms, where he helped raise over $10 billion in capital and led investments in numerous successful companies across a wide range of industries.<br>John is known for his deep industry knowledge, sharp analytical skills, and ability to identify promising investment opportunities. He is a sought-after speaker at industry events and has authored several publications on venture capital and private equity. John holds an MBA from Harvard Business School and a Bachelor's degree in Economics from the University of Chicago. In his free time, he enjoys playing golf and spending time with his family.",
          photo: "https://www.blharbert.com/assets/2019/06/Matthew-DeValk.jpg",
        },
        {
          id: 2,
          name: "Jane Smith",
          title: "Investment Associate",
          bio: "Jane specializes in identifying emerging technologies and investment opportunities. With a keen eye for market trends, she excels in analyzing potential risks and returns for our clients. Jane's passion for technology and finance drives her to stay up-to-date with the latest industry developments. She has a proven track record of successfully advising clients on strategic investment decisions, helping them achieve their financial goals. Jane's dedication, analytical skills, and attention to detail make her an invaluable asset to our team.",
          photo: "https://cdn.shopify.com/s/files/1/0582/2270/6885/collections/11.jpg?v=1629359113",
        },
        {
          id: 3,
          name: "Bob Johnson",
          title: "Chief Financial Officer",
          bio: "Bob brings a wealth of experience in accounting and finance to our organization. With a strong background in financial management, he oversees our company's financial operations with precision and expertise. Bob is a strategic thinker, capable of analyzing complex financial data and providing valuable insights for decision-making. His deep understanding of financial regulations and industry best practices ensures compliance and optimal financial performance. Bob's leadership skills and ability to streamline processes contribute to the overall growth and success of our organization. With his dedication and commitment to financial excellence, Bob plays a crucial role in driving our company's financial strategy forward.",
          photo: "https://www.ucwv.edu/wp-content/uploads/2019/08/DS9A4801-500x500.jpg",
        },
        {
          id: 4,
          name: "Sarah Lee",
          title: "Marketing Manager",
          bio: "Sarah is an accomplished marketing professional with expertise in brand strategy and marketing campaigns. She possesses a keen understanding of consumer behavior and market trends, allowing her to develop effective marketing strategies that resonate with target audiences. Sarah's creative mindset and attention to detail enable her to craft compelling brand stories and deliver impactful marketing initiatives. With a passion for innovation, she constantly explores new marketing channels and techniques to enhance brand visibility and drive business growth. Sarah's strong communication and leadership skills make her a valuable asset in collaborating with cross-functional teams and achieving marketing objectives. Her dedication to delivering results and fostering meaningful connections with customers sets her apart as a dynamic marketing manager.",
          photo: "https://media.licdn.com/dms/image/C5603AQHrwMS6SAuFBQ/profile-displayphoto-shrink_800_800/0/1544652821280?e=2147483647&v=beta&t=PRzrWewGwZfP7b3dwavprL-NdlvP3oDTg_C7f1rXHwg"
        },
        {
          id: 5,
          name: "Mike Wilson",
          title: "Engineering Manager",
          bio: "Mike is a seasoned engineering professional who leads our talented engineering team. With a solid background in software development and project management, he brings a wealth of technical expertise to our organization. Mike's strong leadership skills and strategic mindset enable him to effectively guide and mentor his team, ensuring efficient project execution and high-quality deliverables. He has a deep understanding of the latest technologies and industry best practices, which allows him to drive innovation and optimize engineering processes. Mike's dedication to excellence and attention to detail ensure that our engineering projects are completed on time and within budget. His collaborative approach and excellent communication skills foster a positive work environment, empowering his team to achieve outstanding results. With Mike at the helm, our engineering department continues to thrive and deliver exceptional solutions to our clients.",
          photo: "https://www.centralnicreseller.com/media/pages/images/b9dfeb0dfa-1668507825/adobestock-113998009-cropped-500x.jpg"
        },
        {
          id: 6,
          name: "Samantha Brown",
          title: "Investment Analyst",
          bio: "Samantha is a skilled investment analyst with a keen eye for market trends and a true passion for the financial industry. With a strong background in finance and a meticulous approach to research and analysis, Samantha excels in evaluating investment opportunities and assessing their potential risks and returns. Her ability to identify emerging market trends and make data-driven investment recommendations sets her apart in the field. Samantha's dedication to staying updated with the latest market developments and economic indicators allows her to provide valuable insights to our clients. Her analytical mindset, attention to detail, and ability to interpret complex financial data make her a valuable asset to our team. Samantha's commitment to helping clients achieve their financial goals and her unwavering enthusiasm for the investment world make her an invaluable member of our organization.",
          photo: "https://s3.amazonaws.com/images.salonlofts.com/system/images/9644/large/87141455E6355-3F7F-492E-AD5D-7785122E0B2D.jpeg"
        },
        {
          id: 7,
          name: "Mark Davis",
          title: "Senior Advisor",
          bio: "Mark is a seasoned professional with a wealth of experience in advising startups and established companies across various industries. With a strong background in business strategy and entrepreneurship, Mark has a deep understanding of the challenges and opportunities that organizations face in today's competitive landscape. As a Senior Advisor, he leverages his expertise to provide valuable guidance and strategic insights to our clients. Mark has a proven track record of helping companies navigate complex business environments, optimize their operations, and drive sustainable growth. His analytical acumen, coupled with his ability to identify market trends and opportunities, enables him to develop tailored strategies that align with our clients' objectives. Mark's collaborative approach and excellent interpersonal skills allow him to establish strong relationships with stakeholders and facilitate effective decision-making processes. His dedication to delivering results and his passion for fostering business success make him a trusted advisor and an invaluable asset to our team.",
          photo: "https://www.principalconnections.ie/wp-content/uploads/2021/10/AdobeStock_211651253_businessman-croped-500x500-1.jpeg"
        },
        {
          id: 8,
          name: "Emily Chen",
          title: "Marketing Specialist",
          bio: "Emily is a talented marketing professional with a background in digital marketing and a true passion for creating impactful campaigns. With her expertise in online marketing strategies and platforms, she brings a fresh and innovative approach to our marketing initiatives. Emily is skilled in leveraging various digital channels to drive brand awareness, engage with target audiences, and generate leads. Her creativity and attention to detail shine through in her ability to develop compelling content and design visually appealing assets. Emily's analytical mindset allows her to measure the success of marketing campaigns and make data-driven optimizations for maximum results. She stays abreast of the latest trends in the digital marketing landscape, enabling her to adapt strategies and stay ahead of the competition. Emily's strong communication skills and collaborative nature make her a valuable asset in working with cross-functional teams and achieving marketing objectives. With her dedication and passion for delivering impactful marketing outcomes, Emily plays a crucial role in driving our brand's success.",
          photo: "https://www.spjain.org/hubfs/mumbai-lp-images/mgluxm-lp/About-the-program.jpg"
        },
        {
          id: 9,
          name: "David Kim",
          title: "Director of Operations",
          bio: "David is a highly skilled professional who serves as our Director of Operations, overseeing the smooth functioning of our day-to-day business activities. With his extensive experience in operations management and a keen eye for process optimization, David plays a pivotal role in driving efficiency and productivity within our organization. He is responsible for streamlining workflows, implementing effective systems, and ensuring that operational goals are met. David's strategic mindset and problem-solving abilities enable him to identify areas for improvement and implement innovative solutions. His strong leadership skills and ability to motivate teams foster a positive work environment and facilitate collaboration. ",
          photo: "https://www.asian-identity.com/wp-content/uploads/2020/07/team-img-consultant-11.jpg"
        },
        {
          id: 10,
          name: "Anna Lee",
          title: "Legal Counsel",
          bio: "Anna Lee is a seasoned legal counsel with over a decade of experience in the field. With a strong background in corporate law and a deep understanding of legal frameworks, Anna plays a vital role in providing sound legal advice and guidance to our organization. Her expertise covers a wide range of legal areas, including contract negotiation, compliance, intellectual property, and risk management. Anna's attention to detail and analytical mindset allow her to assess complex legal issues and develop effective strategies to mitigate risks. She is known for her strong communication skills and ability to explain legal concepts in a clear and concise manner. Anna's dedication to upholding legal standards and protecting the interests of our organization ensures that we operate within the boundaries of the law. Her commitment to providing practical and strategic legal solutions makes her an invaluable asset to our team.",
          photo: "https://media.licdn.com/dms/image/C4D03AQEuS75kxEy_uQ/profile-displayphoto-shrink_800_800/0/1550990573085?e=2147483647&v=beta&t=rxVwfLRqZgAZVWuV3-YPLB3nMC1kRKjGO2wCAAqbbtM"
        }
        
        // Add more employees here
    ]

    const projectModel = [
        {
          id: 1,
          title: 'Online Marketplace for Sustainable Products',
          shortDescription: 'E-commerce platform connecting consumers with eco-friendly and socially responsible brands.',
          longDescription: 'This project is focused on building an online marketplace for sustainable products, which would allow consumers to easily discover and purchase environmentally friendly and socially responsible goods. The platform would curate a selection of products from a variety of brands and vendors, and offer a range of features such as user reviews, product recommendations, and personalized shopping experiences. The project team would work with vendors to ensure that their products meet certain sustainability and ethical criteria, and would leverage data analytics and machine learning to improve the user experience over time.',
          supervisor: 1,
          areas: "['Sustainability', 'Energy']",
          featured: true,
        },
        {
            id: 2,
            title: 'Renewable Energy Storage Solutions',
            shortDescription: 'Innovative energy storage technology that enables large-scale adoption of renewable energy sources.',
            longDescription: 'This project is focused on developing innovative energy storage solutions that can help accelerate the adoption of renewable energy sources such as wind and solar power. The project team would work on designing and prototyping new energy storage technologies that are more efficient, reliable, and cost-effective than existing solutions. The team would also explore new business models and market opportunities for renewable energy storage, and work with partners and investors to bring their products to market.',
            supervisor: 2,
            areas: "['Energy']",
            featured: true,
          },
        {
          id: 3,
          title: 'AI-Powered Personalized Healthcare',
          shortDescription: 'Artificial intelligence platform that provides personalized healthcare recommendations to individuals based on their genetic and health data.',
          longDescription: 'This project involves developing an AI-powered healthcare platform that uses a person’s genetic and health data to provide personalized recommendations for improving their health and wellness. The platform would analyze a person’s genetic data to identify potential health risks and recommend lifestyle changes or medical interventions to mitigate those risks. The project team would work with healthcare providers and researchers to ensure that the recommendations are evidence-based and up-to-date. The platform would also incorporate machine learning algorithms to improve its accuracy and effectiveness over time.',
          supervisor: 3,
          areas: "['Healthcare', 'Technology']",
          featured: true,
        },
        {
            id: 4,
            title: 'Green Energy Storage Solution',
            shortDescription: 'A solution that stores green energy for residential and commercial use',
            longDescription: 'This project aims to create a green energy storage solution that stores energy generated from renewable sources such as solar and wind power. The solution will be designed for both residential and commercial use and will help reduce reliance on non-renewable energy sources. The solution will be scalable and will have the potential to make a significant impact on reducing carbon emissions.',
            supervisor: 4,
            areas: "['Energy']",
            featured: false,
          },
          {
            id: 5,
            title: 'AI-Enabled Supply Chain Optimization',
            shortDescription: 'A solution that optimizes supply chain management using AI',
            longDescription: 'This project aims to create an AI-enabled solution that optimizes supply chain management for businesses. The solution will use advanced algorithms and machine learning to predict demand, optimize inventory management, and reduce costs. The solution will be designed to be scalable and customizable, making it suitable for businesses of all sizes and industries.',
            supervisor: 5,
            areas: "['Technology']",
            featured: false,
          },
          {
            id: 6,
            title: 'Smart Home Security System',
            shortDescription: 'A home security system that uses smart technologies to enhance safety',
            longDescription: 'This project aims to create a smart home security system that uses advanced technologies such as sensors, cameras, and machine learning to enhance safety and security. The system will be designed to be user-friendly and accessible, and will offer a range of features such as remote monitoring, alarm systems, and automatic alerts. The system will be customizable and scalable, making it suitable for different types of homes and businesses.',
            supervisor: 2,
            areas: "['Technology']",
            featured: false,
          },
          {
            id: 7,
            title: 'Healthcare Data Analytics Platform',
            shortDescription: 'A platform for analyzing and extracting insights from healthcare data',
            longDescription: 'This project aims to develop a comprehensive healthcare data analytics platform. The platform will utilize advanced analytics techniques to analyze large volumes of healthcare data, enabling healthcare providers to extract valuable insights for decision-making and improving patient outcomes. The platform will adhere to data privacy regulations and emphasize data security. It will empower healthcare organizations to make informed decisions and enhance overall operational efficiency.',
            supervisor: 7,
            areas: "['Healthcare']",
            featured: false,
          },
          {
            id: 8,
            title: 'Renewable Energy Solutions',
            shortDescription: 'Developing sustainable and efficient renewable energy solutions',
            longDescription: 'This project focuses on developing innovative renewable energy solutions to address the growing demand for sustainable and clean energy sources. The project will involve researching and implementing technologies such as solar power, wind energy, and energy storage systems. The goal is to provide scalable and efficient renewable energy solutions that contribute to reducing carbon emissions and promoting a greener future.',
            supervisor: 1,
            areas: "['Energy']",
            featured: false,
          },
          {
            id: 9,
            title: 'AI-Powered Customer Service Chatbot',
            shortDescription: 'Building an intelligent chatbot for enhanced customer service experience',
            longDescription: 'This project aims to develop an AI-powered chatbot that can handle customer inquiries and provide assistance in an automated and efficient manner. The chatbot will utilize natural language processing and machine learning techniques to understand and respond to customer queries effectively. The goal is to improve customer service experience, reduce response times, and enhance customer satisfaction.',
            supervisor: 3,
            areas: "['Technology']",
            featured: false,
          },
          {
            id: 10,
            title: 'Data-driven Personalized Medicine',
            shortDescription: 'Developing personalized treatment approaches using data analytics',
            longDescription: 'This project aims to leverage data analytics and machine learning techniques to develop personalized treatment approaches in the field of medicine. By analyzing patient data, genetic information, and medical records, the project seeks to identify patterns and correlations that can guide customized treatment plans for individuals. The goal is to improve treatment outcomes and optimize healthcare interventions based on each patient\'s unique characteristics and needs.',
            supervisor: 7,
            areas: "['Healthcare', 'Technology']",
            featured: false,
          },
          {
            id: 11,
            title: 'Clean Energy Storage Solutions',
            shortDescription: 'Developing advanced energy storage technologies for renewable energy',
            longDescription: 'This project focuses on the development of advanced energy storage solutions to address the intermittency of renewable energy sources. The project aims to explore and implement innovative technologies such as battery systems, hydrogen storage, and compressed air energy storage. By improving energy storage efficiency and capacity, the project seeks to enhance the integration of renewable energy into the existing power grid and promote a more sustainable and reliable energy future.',
            supervisor: 3,
            areas: "['Energy', 'Technology']",
            featured: false,
          },
          {
            id: 12,
            title: 'Intelligent Virtual Assistants',
            shortDescription: 'Building AI-powered virtual assistants for enhanced user experiences',
            longDescription: 'This project involves the development of intelligent virtual assistants that can interact with users and provide personalized assistance across various domains. Leveraging natural language processing and machine learning, the virtual assistants aim to understand user queries, perform tasks, and offer relevant recommendations. The project focuses on creating seamless user experiences and empowering users with convenient and efficient virtual assistant interactions.',
            supervisor: 1,
            areas: "['Technology']",
            featured: false,
          },
          {
            id: 13,
            title: 'Blockchain-based Supply Chain Transparency',
            shortDescription: 'Implementing blockchain technology to enhance supply chain transparency',
            longDescription: 'This project aims to leverage blockchain technology to improve supply chain transparency and traceability. By utilizing distributed ledger technology, the project seeks to create a tamper-proof and transparent system for tracking goods and verifying transactions throughout the supply chain. The project focuses on enhancing trust, reducing counterfeiting, and enabling greater visibility into the movement of goods across multiple stakeholders.',
            supervisor: 5,
            areas: "['Technology']",
            featured: false,
          },
        
    ]
    const areaModel = [
      {
        id: 1,
        name: "Technology",
        description: "Technology is transforming the way we live and work, and its potential applications are vast. Technologies such as artificial intelligence, machine learning, and blockchain are revolutionizing various industries, from healthcare to finance to retail. Companies working on innovative technological solutions could be excellent investment opportunities.",
        mainphoto: "https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?w=900&t=st=1685470612~exp=1685471212~hmac=6e1727fe97955544459488c70dd7b02d406315969dfae4392b39ceac14540ca8"
      },
      {
        id: 2,
        name: "Energy",
        description: "As the world becomes increasingly aware of the impact of climate change, clean energy solutions are becoming more important. Investments in companies working on renewable energy sources such as solar, wind, or hydroelectric power could be attractive. Additionally, companies focused on energy storage or energy efficiency could also be good investments.",
        mainphoto: "https://img.freepik.com/free-photo/sustainable-energy-campaign-tree-light-bulb-media-remix_53876-104090.jpg?w=900&t=st=1685470577~exp=1685471177~hmac=7d3a6b6deb4298c2fa0b00af2f5c1a74b8f11ca60f49f1f5d2eb6aa2e97ae66f"
        },
      {
        id: 3,
        name: "Healthcare",
        description: "The healthcare industry is ripe for innovation, and there are many areas where investment could make a significant impact. Companies focused on developing new drugs or medical devices, improving healthcare IT systems, or providing more accessible and affordable healthcare solutions could be promising investment opportunities.",
        mainphoto: "https://img.freepik.com/free-photo/front-view-assortment-medical-still-life-elements_23-2148854096.jpg?w=1060&t=st=1685470597~exp=1685471197~hmac=166cf9064b831f704b530d6f9689213ab1673d6c3adc8b5e41d54cad7ccc6c80"
      },
      {
        id: 4,
        name: "Sustainability",
        description: "Sustainability is a growing concern worldwide, and businesses are seeking to adopt more environmentally friendly practices. Investments in companies focused on sustainable solutions, such as renewable energy, eco-friendly products, waste management, or sustainable agriculture, could contribute to a greener future and offer potential returns.",
        mainphoto: "https://img.freepik.com/free-photo/environmental-conservation-garden-children_1150-15276.jpg?w=900&t=st=1685470523~exp=1685471123~hmac=39b4cfd8d672d9ff20ad6935e4b78e6d74327d0e8ca9f106d362e6189eb4dcbc"
      }
    ];

    models.Project.belongsTo(models.Employee, { foreignKey: 'supervisor', as: 'projectSupervisor' });

    await models.Employee.bulkCreate(employeeModel)
    await models.Project.bulkCreate(projectModel)
    await models.Area.bulkCreate(areaModel)
    
}
