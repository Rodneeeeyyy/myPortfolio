import * as React from 'react';
import {
  Box,
  Link,
  ImageList,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sections = ['home', 'portfolio', 'resume', 'skills', 'contact'];

export default function NavigationBar() {
  const [activeSection, setActiveSection] = React.useState('');
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false); // close drawer on mobile
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      const sectionY = scrollY + window.innerHeight / 3;
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        return el && el.offsetTop <= sectionY && sectionY < el.offsetTop + el.offsetHeight;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      bgcolor: isScrolled ? '#1e1e1e' : 'transparent',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      py: { xs: 1, md: 2 },
      px: { xs: 2, md: 5 },
    }}
  >
    {/* Logo + Title */}
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
     
      <Typography
        color="white"
        sx={{
          fontSize: { xs: 24, md: 40 },
          fontWeight: 'bold',
          ml: { xs: 1, md: 3 }
        }}
      >
        Portfolio
      </Typography>
    </Box>

      {/* Desktop Links */}
      {!isMobile && (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          {sections.map((section) => (
            <Link
              key={section}
              onClick={() => handleNavClick(section)}
              sx={{
                minWidth: 90,          // wider clickable area
                color: activeSection === section ? '#0d6efd' : 'white',
                fontSize: 22,          // bigger font size
                fontWeight: activeSection === section ? 'bold' : 'normal',
                mx: 3,                 // more spacing between links
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {
                  borderBottom: '2px solid white',
                  paddingBottom: 2,
                },
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </Box>
      )}

      {/* Mobile Menu Icon */}
      {isMobile && (
        <>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ color: 'white', fontSize: 32 }} // bigger icon
            size="large"
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box sx={{ width: 280, mt: 5 }}> {/* wider drawer, more top margin */}
              <List>
                {sections.map((section) => (
                  <ListItem
                    button
                    key={section}
                    onClick={() => handleNavClick(section)}
                    sx={{ py: 2 }}   // taller list items
                  >
                    <ListItemText
                      primary={section.charAt(0).toUpperCase() + section.slice(1)}
                      primaryTypographyProps={{
                        fontSize: 22,   // bigger text
                        fontWeight: activeSection === section ? 'bold' : 'normal',
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      )}
    </Box>
  );
}
