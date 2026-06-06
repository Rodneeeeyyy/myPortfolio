import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Layout from '../../components/Layout';
import {
    Button,
    Container,
    Typography,
    Box,
    Grid,
    Fade,
    Slide,
    Grow,
    Zoom,
} from '@mui/material';
import WebIcon from '@mui/icons-material/Code';
import AppIcon from '@mui/icons-material/BuildCircle';
import DesignIcon from '@mui/icons-material/Brush';
import SupportIcon from '@mui/icons-material/HeadsetMic';
import LayersIcon from '@mui/icons-material/Layers';
import LaptopIcon from '@mui/icons-material/LaptopMac';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import { FaJava } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiAdobeillustrator, SiCplusplus } from 'react-icons/si';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import GradientText from '../../components/Animations/GradientText';
import RotatingText from '../../components/Animations/RotatingText';
import DecryptedText from '../../components/Animations/DecryptText';
import ClickSpark from '../../components/Animations/ClickSpark';
import Carousel from 'react-multi-carousel';
import { color } from 'framer-motion';


export default function App() {
    const [roleIndex, setRoleIndex] = React.useState(0);
    const roles = [''];
    const [fadeIn, setFadeIn] = React.useState(true);
    const services = [
        { icon: <WebIcon sx={{ fontSize: 40 }} />, title: 'Desktop App Development', desc: 'Design and develop desktop applications.' },
        { icon: <AppIcon sx={{ fontSize: 40 }} />, title: 'Mobile App Development', desc: 'Design and develop mobile applications.' },
        { icon: <SupportIcon sx={{ fontSize: 40 }} />, title: 'Customer Support', desc: 'Provide assistance and support to clients.' },
    ];
    const inputStyle = {
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #555',
        backgroundColor: '#111',
        color: 'white',
        fontSize: '1rem',
    };

    const PixivIcon = () => (
        <svg width="40" height="40" viewBox="0 0 128 128" fill="none">
            <path d="M0 0H128V128H0V0Z" fill="#0096FA"/>
            <path d="M64 24C41.92 24 24 41.92 24 64C24 86.08 41.92 104 64 104C86.08 104 104 86.08 104 64C104 41.92 86.08 24 64 24ZM64 96C46.36 96 32 81.64 32 64C32 46.36 46.36 32 64 32C81.64 32 96 46.36 96 64C96 81.64 81.64 96 64 96Z" fill="white"/>
            <path d="M64 40C50.76 40 40 50.76 40 64C40 77.24 50.76 88 64 88C77.24 88 88 77.24 88 64C88 50.76 77.24 40 64 40ZM64 80C55.16 80 48 72.84 48 64C48 55.16 55.16 48 64 48C72.84 48 80 55.16 80 64C80 72.84 72.84 80 64 80Z" fill="white"/>
            <path d="M64 56C57.36 56 52 61.36 52 68C52 74.64 57.36 80 64 80C70.64 80 76 74.64 76 68C76 61.36 70.64 56 64 56Z" fill="black"/>
        </svg>
    );

    // Animation triggers
    const [servicesInView, setServicesInView] = React.useState(false);
    const [portfolioInView, setPortfolioInView] = React.useState(false);
    const [resumeInView, setResumeInView] = React.useState(false);
    const [certificatesInView, setCertificatesInView] = React.useState(false);
    const [skillsInView, setSkillsInView] = React.useState(false);
    const [contactInView, setContactInView] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setFadeIn(true);
            }, 300);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleDownloadCV = () => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = '/MaestreCV.pdf'; // Make sure this path matches where your CV is stored
        link.download = 'Rodney_Mestre_CV.pdf'; // This will be the filename when downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Intersection observers for scroll animations
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        switch (entry.target.id) {
                            case 'services':
                                setServicesInView(true);
                                break;
                            case 'portfolio':
                                setPortfolioInView(true);
                                break;
                            case 'resume':
                                setResumeInView(true);
                                break;
                            case 'certificates':
                                setCertificatesInView(true);
                                break;
                            case 'skills':
                                setSkillsInView(true);
                                break;
                            case 'contact':
                                setContactInView(true);
                                break;
                            default:
                                break;
                        }
                    } else {
                        // Reset the animation state when element leaves viewport
                        switch (entry.target.id) {
                            case 'services':
                                setServicesInView(false);
                                break;
                            case 'portfolio':
                                setPortfolioInView(false);
                                break;
                            case 'resume':
                                setResumeInView(false);
                                break;
                            case 'certificates':
                                setCertificatesInView(false);
                                break;
                            case 'skills':
                                setSkillsInView(false);
                                break;
                            case 'contact':
                                setContactInView(false);
                                break;
                            default:
                                break;
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        ['services', 'portfolio', 'resume', 'certificates', 'skills', 'contact'].forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const FlyingParticlesText = () => {
        const particlesInit = async (engine) => {
            await loadFull(engine);
        };

        return (
            <div style={{ position: 'relative' }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                fullScreen: {
                    enable: false,
                    zIndex: -1
                },
                particles: {
                    number: { 
                    value: 50 
                    },
                    size: { 
                    value: 3 
                    },
                    move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    outModes: {
                        default: 'out'
                    }
                    },
                    opacity: { 
                    value: 0.6 
                    },
                    links: { 
                    enable: false 
                    }
                }
                }}
                style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                }}
            />
            </div>
        );
    };

    // Carousel responsive settings
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // Certificate data
    const certificates = [
        {
            title: "Introduction to Cumpoter Networking",
            image: "/images/cert1.jpg",
        },
        {
            title: "Invision for Beginners",
            image: "/images/cert2.jpg",
        },
        {
            title: "Machine Learning",
            image: "/images/cert3.jpg",
        },
        {
            title: "Interfacing with Arduino",
            image: "/images/cert4.jpg",
        },
        {
            title: "CCNA: Networking Fundamentals",
            image: "/images/cert5.jpg",
        }
    ];

    return (
         <Layout>
        <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
            {/* Responsive Background Layer */}
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100%',
                    minHeight: '100vh',
                    zIndex: -1,
                    display: { xs: 'block', md: 'flex' },
                    flexDirection: { md: 'row' },
                }}
                >
                <Box sx={{ width: { xs: '100%', md: '0%' }, height: '100%', minHeight: '100vh', backgroundColor: 'white' }} />
                <Box
                    component="img"
                    src="/images/bgImg.jpg"
                    alt="Home Background"
                    sx={{
                    width: { xs: '100%', md: '100%' },
                    height: '100%',
                    minHeight: '100vh',
                    objectFit: 'cover',
                    display: { xs: 'block', md: 'block' }
                    }}
                />
                </Box>

            {/* Main Content */}
            <Box
                id="home"
                sx={{
                    minHeight: '100vh',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: { xs: 6, md: 10 },
                }}
                >
               <Container maxWidth="lg">
                    <Box sx={{ color: 'black', mt: { xs: 10, md: 24 }, pb: { xs: 6, md: 20 } }}>
                        <Typography variant="h6" gutterBottom sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                            Hi There!
                        </Typography>
                        <Typography
                            variant="h3"
                            gutterBottom
                            fontWeight="bold"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                fontSize: { xs: '2rem', md: '3rem' }
                            }}
                        >
                            I'm{' '}
                            <Box component="span" sx={{ color: 'black', fontWeight: 'bold' }}>
                                Rodney
                            </Box>
                            ,{' '}
                            <Box sx={{
                                display: 'inline-block',
                                color: '#0d6efd',
                                fontWeight: 'bold',
                                backgroundColor: 'transparent',
                                padding: { xs: '0.25rem 0.5rem', md: '0.5rem 1rem' },
                                borderRadius: '6px'
                            }}>
                                <RotatingText
                                    texts={roles}
                                    mainClassName="rotating-text"
                                    staggerFrom="last"
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-120%", opacity: 0 }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={3000}
                                />
                            </Box>
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2, color: '#ccc', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                            
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                mt: 4,
                                backgroundColor: '#0d6efd',
                                px: { xs: 2, md: 4 },
                                py: 1,
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                                transition: 'background-color 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#084298',
                                },
                            }}
                            onClick={handleDownloadCV}
                        >
                            Download CV
                        </Button>

                        {/* Contact Info with Responsive Layout */}
                        <Grid container sx={{ mt: 6, textAlign: { xs: 'center', sm: 'left' } }}>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ px: 2, py: { xs: 1.5, sm: 2 } }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Email</Typography>
                                    <Typography variant="body2">rodneymaestre0414@gmail.com</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} sx={{
                                borderLeft: { sm: '1px solid #555' },
                                borderRight: { sm: '1px solid #555' }
                            }}>
                                <Box sx={{ px: 2, py: { xs: 1.5, sm: 2 } }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Phone</Typography>
                                    <Typography variant="body2">+63 9397556752</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ px: 2, py: { xs: 1.5, sm: 2 } }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Location</Typography>
                                    <Typography variant="body2">Davao City, Philippines</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

                {/* Portfolio Section */}
                <Box
                    id="portfolio"
                    sx={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh',
                        width: '100vw',
                        py: { xs: 6, md: 10 },
                    }}
                    >
                         <Container maxWidth="lg">
                            <Slide in={portfolioInView} direction="right" timeout={800} mountOnEnter unmountOnExit>
                                <Grid container spacing={4} alignItems="center">
                                    {/* Left Column - Image */}
                                    {/* <Grid item xs={12} md={5}>
                                        <Grow in={portfolioInView} timeout={1000}>
                                            <Box
                                                component="img"
                                                src=""
                                                alt="Jespher Mask"
                                                sx={{
                                                width: '100%',
                                                borderRadius: 2,
                                                boxShadow: 3,
                                                }}
                                            />
                                        </Grow>
                                     </Grid> */}
                
                            {/* Right Column - Content */}
                            <Grid item xs={12} md={7}>
                            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                                Who am I?
                            </Typography>
                
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    mt: 1,
                                    lineHeight: 1.3,
                                }}
                                >
                                I am Rodney {' '}
                                <span style={{ color: 'white' }}>Junior Graphic Designer</span> and{' '}
                                <span style={{ color: 'white' }}>Developer</span>
                            </Typography>

                
                           <Typography
                                variant="body1"
                                sx={{
                                    color: 'black',
                                    mt: 3,
                                    mb: 4,
                                    lineHeight: 1.8,
                                }}
                            >
                                I am motivated and adaptable BSIT graduate with a solid foundation in software development, networking, and database management. Seeking an opportunity to apply technical expertise, analytical skills, and a
passion for problem-solving in a challenging IT role. Committed to continuous learning and ready to
contribute to organizational growth through innovative technology solutions.
                            </Typography>
                
                            <Box
                                sx={{
                                borderTop: '1px solid #555',
                                pt: 3,
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                rowGap: 2,
                                columnGap: 4,
                                }}
                            >
                                <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'white' }}>
                                    Name:
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black' }}>
                                    Rodney Maestre
                                </Typography>
                                </Box>
                
                                <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'white' }}>
                                    From:
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black' }}>
                                    Davao City, Philippines
                                </Typography>
                                </Box>
                
                                {/* <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'white' }}>
                                    Age:
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#ccc' }}>
                                    24
                                </Typography>
                                </Box> */}
                
                                <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'white' }}>
                                    Email:
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black' }}>
                                    rodneymaestre0414@gmail.com
                                </Typography>
                                </Box>
                            </Box>
                            </Grid>
                        </Grid>
                    </Slide>
                    </Container>
                </Box>

                {/* Services Section */}
                

                {/* Resume Section */}
                 <Box
                    id="resume"
                    sx={{
                        minHeight: '100vh',
                        width: '100vw',
                        backgroundColor: 'transparent',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: { xs: 6, md: 10 },
                    }}
                    >
                <Container maxWidth="lg">
                    <Fade in={resumeInView} timeout={800}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center' }}>
                        <Box component="span">
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center' }}>
                        <Box component="span" sx={{ color: 'black' }}>MY RESUME</Box>
                        </Typography>
                        </Box>
                    </Typography>
                    </Fade>

                    <Fade in={resumeInView} timeout={800} mountOnEnter unmountOnExit>
                    <Grid container spacing={8}>
                        {/* Education Column */}
                        <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 ,color: 'black' }}>
                            <DecryptedText
                            text="Education"
                            animateOn="view"
                            speed={30}
                            delay={1200}
                            revealDirection="left"
                            />
                        </Typography>

                        {[
                            {
                            title: 'Bachelor of Science in Information Technology',
                            school: 'Holy Cross of Davao College',
                            year: '2018 - 2025',
                            desc: 'College',
                            },
                            {
                            title: 'Student',
                            school: 'Jose Maria College Foundation, Inc.',
                            year: '2011 - 2015',
                            desc: 'Junior High',
                            },
                            {
                            title: 'Student',
                            school: 'Our Lady of Fatima Academy',
                            year: '2005 - 2011',
                            desc: 'Elementary',
                            },
                        ].map((edu, idx) => (
                            <Grow in={resumeInView} timeout={1000 + idx * 300} key={idx}>
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="subtitle1" sx={{ color: '#0d6efd', fontWeight: 'bold' }}>
                                <DecryptedText
                                    text={edu.title}
                                    animateOn="view"
                                    speed={40}
                                    delay={1500 + (idx * 200)}
                                    revealDirection="left"
                                />
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black' }}>
                                <DecryptedText
                                    text={`${edu.school} — `}
                                    animateOn="view"
                                    speed={20}
                                    delay={1600 + (idx * 200)}
                                />
                                <i>
                                    <DecryptedText
                                    text={edu.year}
                                    animateOn="view"
                                    speed={20}
                                    delay={1700 + (idx * 200)}
                                    />
                                </i>
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black', mt: 1 }}>
                                <DecryptedText
                                    text={edu.desc}
                                    animateOn="view"
                                    speed={30}
                                    delay={1800 + (idx * 200)}
                                />
                                </Typography>
                            </Box>
                            </Grow>
                        ))}
                        </Grid>

                        {/* Experience Column */}
                        <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                            <DecryptedText
                            text="Experience"
                            animateOn="view"
                            speed={30}
                            delay={1200}
                            revealDirection="right"
                            />
                        </Typography>

                        {[
                            {
                            title: 'Desktop Application Development',
                            place: 'Tri-star ph',
                            year: '2025',
                            desc: 'Internship focused on Desktop App development using C# + Rest API',
                            },
                        ].map((exp, idx) => (
                            <Grow in={resumeInView} timeout={1000 + idx * 300} key={idx}>
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="subtitle1" sx={{ color: '#0d6efd', fontWeight: 'bold' }}>
                                <DecryptedText
                                    text={exp.title}
                                    animateOn="view"
                                    speed={40}
                                    delay={1500 + (idx * 200)}
                                    revealDirection="right"
                                />
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black' }}>
                                <DecryptedText
                                    text={`${exp.place} — `}
                                    animateOn="view"
                                    speed={20}
                                    delay={1600 + (idx * 200)}
                                />
                                <i>
                                    <DecryptedText
                                    text={exp.year}
                                    animateOn="view"
                                    speed={20}
                                    delay={1700 + (idx * 200)}
                                    />
                                </i>
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black', mt: 1 }}>
                                <DecryptedText
                                    text={exp.desc}
                                    animateOn="view"
                                    speed={30}
                                    delay={1800 + (idx * 200)}
                                />
                                </Typography>
                            </Box>
                            </Grow>
                        ))}
                        </Grid>
                    </Grid>
                    </Fade>
                </Container>
                </Box>

                {/* Certificates Section */}
                <Box
                    id="certificates"
                    sx={{
                        minHeight: '100vh',
                        width: '100vw',
                        backgroundColor: 'transparent',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: { xs: 6, md: 10 },
                    }}
                    >
                    <Container maxWidth="lg">
                        <Fade in={certificatesInView} timeout={800}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center' }}>
                                MY <Box component="span" sx={{ color: '#0d6efd' }}>CERTIFICATES</Box>
                            </Typography>
                        </Fade>

                        <Slide in={certificatesInView} direction="up" timeout={800}>
                            <Box sx={{ px: { xs: 0, sm: 4, md: 8 } }}>
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={3000}
                                    keyBoardControl={true}
                                    customTransition="transform 300ms ease-in-out"
                                    transitionDuration={500}
                                    containerClass="carousel-container"
                                    itemClass="carousel-item-padding-40-px"
                                    removeArrowOnDeviceType={["mobile"]}
                                    centerMode={false}
                                    slidesToSlide={1}
                                    swipeable={true}
                                    draggable={true}
                                >
                                    {certificates.map((cert, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                p: 3,
                                                m: 1,
                                                height: '100%',
                                                minHeight: { xs: 200, sm: 300, md: 400 },
                                                display: 'flex',
                                                flexDirection: 'column',
                                                backgroundColor: '#1e1e1e',
                                                borderRadius: 2,
                                                boxShadow: 3,
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                                                },
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={cert.image}
                                                alt={cert.title}
                                                sx={{
                                                    width: '100%',
                                                    height: { xs: 120, sm: 160, md: 200 },
                                                    objectFit: 'cover',
                                                    borderRadius: 1,
                                                    mb: 2,
                                                }}
                                            />
                                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                                    {cert.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#0d6efd', mb: 1 }}>
                                                    {cert.issuer} | {cert.year}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#ccc', flexGrow: 1 }}>
                                                    {cert.description}
                                                </Typography>
                                            </Box>
                                    ))}
                                </Carousel>
                            </Box>
                        </Slide>
                    </Container>
                </Box>

                {/* Skills Section */}
                <Box
                    id="skills"
                    sx={{
                        minHeight: '100vh',
                        width: '100vw',
                        backgroundColor: 'transparent',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: { xs: 6, md: 10 },
                    }}
                    >
                <Container maxWidth="lg">
                    <Zoom in={skillsInView} timeout={600}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center' }}>
                        MY <Box component="span" sx={{ color: '#0d6efd' }}>SKILLS</Box>
                    </Typography>
                    </Zoom>

                    <Zoom in={skillsInView} timeout={600} mountOnEnter unmountOnExit>
                    <Grid container spacing={4} justifyContent="center">
                        {[
                            { icon: <FaHtml5 size={40} />, title: 'HTML' },
                            { icon: <FaCss3Alt size={40} />, title: 'CSS' },
                            { icon: <FaReact size={40} />, title: 'React' },
                            { icon: <SiAdobeillustrator size={40} />, title: 'Illustrator' },
                            { icon: <SiCplusplus size={40} />, title: 'C++' },
                        ].map((skill, i) => {
                        const [hover, setHover] = React.useState(false);

                        return (
                            <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grow in={skillsInView} timeout={800 + i * 100}>
                                <Box
                                sx={{
                                    position: 'relative',
                                    backgroundColor: 'white',
                                    p: 4,
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    overflow: 'hidden',
                                    width: '100%',
                                    maxWidth: 300,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                                    },
                                }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                >
                                {/* Background Icon Overlay */}
                                <Fade in={hover} timeout={400} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                                    <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100%',
                                        color: 'rgba(13, 110, 253, 0.15)',
                                        fontSize: '10rem',
                                        userSelect: 'none',
                                        zIndex: 0,
                                    }}
                                    >
                                    {React.cloneElement(skill.icon, { sx: { fontSize: '10rem'} })}
                                    </Box>
                                </Fade>

                                {/* Foreground Content */}
                                <Box sx={{ position: 'relative', zIndex: 1 }}>
                                    <Box
                                    className="skill-icon"
                                    sx={{
                                        mb: 2,
                                        width: 60,
                                        height: 60,
                                        mx: 'auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.4s ease',
                                        color: 'black',
                                        '& svg': {
                                        fontSize: 40,
                                        transition: 'transform 0.4s ease, color 0.4s ease',
                                        color: hover ? '#0d6efd' : 'inherit',
                                        transform: hover ? 'scale(1.2)' : 'scale(1)',
                                        },
                                    }}
                                    >
                                    {skill.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 , color: 'black' }}>
                                    {skill.title}
                                    </Typography>
                                </Box>
                                </Box>
                            </Grow>
                            </Grid>
                        );
                        })}
                    </Grid>
                    </Zoom>
                </Container>
                </Box>

                {/* Contact Me Section */}
                <Box
                    id="contact"
                    sx={{
                        minHeight: '60vh',
                        width: '100vw',
                        backgroundColor: 'transparent',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: { xs: 6, md: 10 },
                    }}
                    >
                <Container maxWidth="md">
                    <Fade in={contactInView} timeout={800}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center' }}>
                        CONTACT <Box component="span" sx={{ color: '#0d6efd' }}>ME</Box>
                        </Typography>
                    </Fade>

                    <Slide in={contactInView} direction="up" timeout={800}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                        <Grow in={contactInView} timeout={1000}>
                            <Box>
                            <Typography variant="h6" sx={{ mb: 2 }}>Let's Talk</Typography>
                            <Typography variant="body2" sx={{ color: '#ccc', mb: 2 }}>
                                Interested in working together? Fill out the form or contact me via email/phone.
                            </Typography>
                            <Typography variant="body2"><strong>Email:</strong> rodneymaestre0414@gmail.com</Typography>
                            <Typography variant="body2"><strong>Phone:</strong> +63 9397556752</Typography>
                            </Box>
                        </Grow>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Grow in={contactInView} timeout={1200}>
                            <form>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <input type="text" placeholder="Your Name" style={inputStyle} />
                                <input type="email" placeholder="Your Email" style={inputStyle} />
                                <textarea rows="4" placeholder="Your Message" style={{ ...inputStyle, resize: 'vertical' }} />
                                <Button variant="contained" sx={{ backgroundColor: '#0d6efd', mt: 2 }}>
                                Send Message
                                </Button>
                            </Box>
                            </form>
                        </Grow>
                        </Grid>
                    </Grid>
                    </Slide>
                </Container>
                </Box>

                {/* Footer */}
                <Box sx={{ backgroundColor: '#000', color: '#aaa', py: 3, textAlign: 'center' }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Rodney Mestre. All rights reserved.
                </Typography>
                </Box>
            </ClickSpark>
        </Layout>
    );
}