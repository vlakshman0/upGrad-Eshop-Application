//Static footer visible on all pages on bottom
import React from "react";
import "./Footer.css";
import Typography from '@mui/material/Typography';
const Footer = () => (
	<footer className="footer">
		<div style={{display: 'flex', justifyContent: 'center'}}>
			<Typography variant="body2"></Typography>
		</div>
	</footer>
);

export default Footer;