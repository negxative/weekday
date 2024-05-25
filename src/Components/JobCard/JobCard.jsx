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

const fakeJob = {
  title: "Backend Engineer",
  company: "fampay",
  companyLogo: fallbackLogo,
  location: "Bangalore",
  description:
    "FamPay is building India's first neo-bank exclusively for teens. FamPay helps teens make their own online and offline payments through UPI, FamPay App and FamCard. Our aim is to make banking cool for teens and to help them learn the value of money, savings and spending wisely.",
};

const JobCard = forwardRef(({ job, index }, ref) => {
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
    salaryCurrencyCode
  } = job;
  
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const isOverflowingDiv =
        descriptionRef.current.scrollHeight >
        descriptionRef.current.clientHeight;
      setIsOverflowing(isOverflowingDiv);
    }
  }, [job]);
  
  const getEstimatedsSalary=()=>{
    if(!minJdSalary && !maxJdSalary) return "Not Disclosed";
    let salaryContent="";
    if(minJdSalary && maxJdSalary) salaryContent= `$ ${minJdSalary} - ${maxJdSalary}`;
    else if(minJdSalary || maxJdSalary) salaryContent= `$ ${minJdSalary || maxJdSalary}`;
    return `${salaryContent} LPA ✅`
  }

  const getMinimumExperience=()=>{
    if(!minExp && !maxExp) return "0+";
    let experience="";
    if(minExp && maxExp) experience= `${minExp} - ${maxExp}`;
    else if(minExp || maxExp) experience= `${minExp || maxExp}`;

    return experience
  }

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
        <Chip variant="outlined" label="⌛ Posted 10 days ago" size="small" />
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
        <Typography variant="body2">
          Estimated Salary: {getEstimatedsSalary()}
        </Typography>
        <Box
          className="description-container"
          ref={descriptionRef}
        >
          <Box className="gradient-overlay" />
          <Typography variant="body1" fontWeight="600">
            About Company:
          </Typography>
          <Typography variant="body2">About Us:</Typography>
          <Typography variant="body1">{jobDetailsFromCompany}</Typography>
          {isOverflowing && (
            <Button
              size="small"
              className="view-job-button"
              onClick={()=>{window.open(jdLink)}}
            >
              <b>View Job</b>
            </Button>
          )}
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

          <Typography variant="body2">About Role:</Typography>
          <Typography variant="body1">{fakeJob.description}</Typography>
          {isOverflowing && (
            <Button
              size="small"
              className="view-job-button"
              onClick={() => setShowFullContent(true)}
            >
              <b>View Job</b>
            </Button>
          )}
        </Box>
        <Typography variant="body2" color="text.secondary">
          <strong>Minimum Experience</strong>
          <br />
          <span className="experience">{getMinimumExperience() +  " years"}</span>
        </Typography>
        <Button
          className="easy-apply-button"
        >
          <Typography variant="body1" fontSize={"14px"}>
            ⚡ Easy Apply
          </Typography>
        </Button>
        <Button
          className="unlock-referral-button"
        >
          <Avatar
            src={fallbackLogo}
            alt="user avatar"
            className="avatar"
          />
          <Avatar
            src={fallbackLogo}
            alt="user avatar"
            className="avatar"
          />
          Unlock Refferal Asks
        </Button>
      </CardContent>
    </Card>
  );
});

export { JobCard };
