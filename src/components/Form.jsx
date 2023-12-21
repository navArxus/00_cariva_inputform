import React from "react"
import Singleinput from "./Singleinput";
import Dropdown from "./Dropdown";
import Button from 'react-bootstrap/Button';
import "./form.css"

const Userdetailform = () => {
    return (
        <div className="form-main">
            <h5>Personal Details</h5>
            <hr />
            <div className="form-main-personal-detail">
                <div className="form-main-personal-detail-fileinput">
                    <div className="form-main-personal-detail-profile">
                        <small>Profile Photo (jpg,jpeg,png)</small> <br />
                        <input type="file" name="" id="" accept="image/*" placeholder="Browse file " />
                    </div>
                    <div className="form-main-personal-detail-profile">
                        <small>Resume (pdf)</small><br />
                        <input type="file" name="" id="" accept=".pdf" />
                    </div>
                </div>
                <div className="form-main-grid-layout">
                    <Singleinput label="Full name" type="text" />
                    <Singleinput label="DOB" type="date" />
                    <Dropdown label="Gender" value={["Male", "Female", "Others"]} />
                    <Singleinput label="Email" type="email" />
                    <Singleinput label="Contact number" type="number" />
                    <Singleinput label="OTP" type="text" />
                    <Singleinput label="Current location" type="text" />
                    <Dropdown label="Preferred location" value={["Delhi", "Kolkata", "Mumbai"]} />
                    <Dropdown label="Job type" value={["Remote", "Full-Time", "Part-Time"]} />
                </div>
            </div>
            <br />
            <h5>Professional Experience</h5>
            <hr />
            <div className="form-main-grid-layout">
                <Singleinput label="Current designation" type="text" />
                <Singleinput label="Current Organisation name" type="text" />
                <Singleinput label="Total experience in year" type="number" />
                <Singleinput label="Total experience in month" type="number" />
                <Dropdown label="Notice period in month" value={[1, 2, 3, 4]} />
                <Dropdown label="Skills" value={["Front-end developer", "Backend developer", "Full-stack developer"]} />
                <Singleinput label="No of projects completed" type="number" />
                <Singleinput label="Current payout in month" type="number" />
                <Singleinput label="Expected payout in month" type="number" />
            </div>
            <br />
            <h5>Education</h5>
            <hr />
            <div className="form-main-grid-layout">
                <Singleinput label="University/College name" type="text" />
                <Dropdown label="Qualification" value={["BCA", "Btech", "BE"]} />
                <Singleinput label="Specialization" type="text" />
                <Dropdown label="Year of passing" value={[2022, 2023, 2024, 2025]} />
            </div>
            <br />
            <h5>Social link</h5>
            <hr />
            <div className="form-main-grid-layout">
                <Singleinput label="Linkedin" type="url" />
                <Singleinput label="GitHub" type="url" />
            </div>
            <Button as="input" type="submit" value="Submit" size="lg"/>{' '}
        </div>
    )
}

export default Userdetailform

