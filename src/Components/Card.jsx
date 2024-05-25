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
import fallbackLogo from "../Assets/FallbackLogo.png";

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
            sx={{ width: 56, height: 56, marginRight:"10px" }}
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
          sx={{
            maxHeight: "250px",
            overflow: "hidden",
            position: "relative",
          }}
          ref={descriptionRef}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              left: "0",
              top: "0",
              background: isOverflowing
                ? "linear-gradient(transparent 50px, white)"
                : "transparent",
            }}
          />
          <Typography variant="body1" fontWeight="600">
            About Company:
          </Typography>
          <Typography variant="body2">About Us:</Typography>
          <Typography variant="body1">{jobDetailsFromCompany}</Typography>
          {isOverflowing && (
            <Button
              size="small"
              sx={{
                mt: 2,
                position: "absolute",
                bottom: "0%",
                left: "50%",
                transform: "translate(-50%)",
              }}
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
              sx={{
                mt: 2,
                position: "absolute",
                bottom: "0%",
                left: "50%",
                transform: "translate(-50%)",
              }}
              onClick={() => setShowFullContent(true)}
            >
              <b>View Job</b>
            </Button>
          )}
        </Box>
        <Typography variant="body2" color="text.secondary">
          <strong>Minimum Experience</strong>
          <br />
          <span color="black">{getMinimumExperience() +  " years"}</span>
        </Typography>
        <Button
          sx={{
            background: "#54EFC3",
            color: "Black",
            justifyContent: "center",
            width: "100%",
            borderRadius: "10px",
          }}
        >
          <Typography variant="body1" fontSize={"14px"}>
            ⚡ Easy Apply
          </Typography>
        </Button>
        <Button
          sx={{
            background: "#4943DA",
            color: "white",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: "10px",
            fontSize: "14px",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
          }}
        >
          <Avatar
            src={fallbackLogo}
            alt="user avatar"
            sx={{
              height: "20px",
              width: "20px",
              backdropFilter: "blur(100px)",
            }}
          />
          <Avatar
            src={fallbackLogo}
            alt="user avatar"
            sx={{
              height: "20px",
              width: "20px",
            }}
          />
          Unlock Refferal Asks
        </Button>
      </CardContent>
    </Card>
  );
});

export { JobCard };
