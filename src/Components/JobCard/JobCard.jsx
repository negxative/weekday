import React, { useEffect, useRef, useState, forwardRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Box,
  Chip,
  Link,
} from "@mui/material";
import fallbackLogo from "../../Assets/FallbackLogo.png";
import "./JobCard.css";

const JobCard = forwardRef(({ job, index }, ref) => {
  // Destructuring job object
  const {
    companyName,
    jdLink,
    jdUid,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    maxExp,
    maxJdSalary,
    minExp,
    minJdSalary,
  } = job;

  // State to check if description is overflowing
  const [isOverflowing, setIsOverflowing] = useState(false);
  // Reference for description container
  const descriptionRef = useRef(null);

  // Effect to check if description is overflowing
  useEffect(() => {
    if (descriptionRef.current) {
      const isOverflowingDiv =
        descriptionRef.current.scrollHeight >
        descriptionRef.current.clientHeight;
      setIsOverflowing(isOverflowingDiv);
    }
  }, [job]);

  // Function to get estimated salary
  const getEstimatedsSalary = () => {
    if (!minJdSalary && !maxJdSalary) return "Not Disclosed";
    let salaryContent = "";
    if (minJdSalary && maxJdSalary)
      salaryContent = `$ ${minJdSalary} - ${maxJdSalary}`;
    else if (minJdSalary || maxJdSalary)
      salaryContent = `$ ${minJdSalary || maxJdSalary}`;
    return `${salaryContent} LPA ✅`;
  };

  // Function to get minimum experience
  const getMinimumExperience = () => {
    if (!minExp && !maxExp) return "0+";
    let experience = "";
    if (minExp && maxExp) experience = `${minExp} - ${maxExp}`;
    else if (minExp || maxExp) experience = `${minExp || maxExp}`;

    return experience;
  };

  // Render job card component
  return (
    <Card
      variant="outlined"
      sx={{ mb: 2, maxWidth: "30%", borderRadius: "15px" }}
      ref={ref}
      id={jdUid}
      className="jobcard-wrapper"
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        {/* Chip indicating job posting date */}
        <Chip variant="outlined" label="⌛ Posted 10 days ago" size="small" />
        {/* Company details section */}
        <Box display="flex" alignItems="center">
          <Avatar
            alt={companyName}
            src={logoUrl}
            className="avatar"
            variant="square"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {companyName}
            </Typography>
            <Typography variant="body1">{jobRole}</Typography>
            <Typography variant="caption">{location}</Typography>
          </Box>
        </Box>
        {/* Estimated salary */}
        <Typography variant="body2">
          Estimated Salary: {getEstimatedsSalary()}
        </Typography>
        {/* Description container */}
        <Box className="description-container" ref={descriptionRef}>
          <Box className="gradient-overlay" />
          <Typography variant="body1" fontWeight="600">
            About Company:
          </Typography>
          <Typography variant="body2">About Us:</Typography>
          <Typography variant="body1">{jobDetailsFromCompany}</Typography>
          {/* Founder/Recruiter Profiles */}
          <Typography variant="body1" fontWeight="600">
            Founder/Recruiter Profiles:
            <br />
            <Link
              sx={{ textDecoration: "none", color: "#4943DA" }}
              fontSize={"12px"}
            >
              Suchit Dubey
            </Link>
          </Typography>
          {/* About Role */}
          <Typography variant="body2">About Role:</Typography>
          <Typography variant="body1">{jobDetailsFromCompany}</Typography>
          {/* View Job button */}
          {isOverflowing && (
            <Button
              size="small"
              className="view-job-button"
              onClick={() => {
                console.log("jd link", jdLink);
                window.open(jdLink);
              }}
            >
              <b>View Job</b>
            </Button>
          )}
        </Box>
        {/* Minimum Experience */}
        <Typography variant="body2" color="text.secondary">
          <strong>Minimum Experience</strong>
          <br />
          <span className="experience">
            {getMinimumExperience() + " years"}
          </span>
        </Typography>
        {/* Easy Apply button */}
        <Button className="easy-apply-button">
          <Typography variant="body1" fontSize={"14px"}>
            ⚡ Easy Apply
          </Typography>
        </Button>
        {/* Unlock Referral Asks button */}
        <Button className="unlock-referral-button">
          <Avatar src={fallbackLogo} alt="user avatar" className="avatar" />
          <Avatar src={fallbackLogo} alt="user avatar" className="avatar" />
          Unlock Refferal Asks
        </Button>
      </CardContent>
    </Card>
  );
});

export { JobCard };
