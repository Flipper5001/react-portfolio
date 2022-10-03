import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        > <a href="https://github.com/Flipper5001">
          <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
        </a>
        <a href="https://www.linkedin.com/">
          <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
        </a>
        <a href="https://flipper5001.github.io/online-portfolio/">
          <BottomNavigationAction label="Portfolio" icon={<ContactPageIcon />} />
        </a>
      </BottomNavigation>
    </Box>
  );
}