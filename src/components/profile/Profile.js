import React, { useState, useEffect } from 'react';

import './Profile.scss';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import consistentCritter from '../images/consistent-critter.png'
import meetingMaster from '../images/meeting-master.png'

const Homepage = () => {
    const [save, setSave] = useState(false);

    const pronounList = ["", "She/Her", "He/Him", "They/Them", "Other"]
    const [pronouns, setPronouns] = useState("null");
    const [school, setSchool] = useState("null");
    const [savedSchool, setSavedSchool] = useState("null");
    const [editSchool, setEditSchool] = useState(false);
    const softSkillList = ["Leadership", "Communication", "Time Management", "Interview", "Resume", "Personal Project", "Negotiation"]
    const [softSkills, setSoftSkills] = useState([]);
    const [displaySoftSkills, setDisplaySoftSkills] = useState(false);
    const technicalInterestList = ["MatLab", "C++", "React", "Python"]
    const [technicalInterests, setTechnicalInterests] = useState([]);
    const [displayTechnicalInterests, setDisplayTechnicalInterests] = useState(false);
    const industryList = ["-- select --", "Healthcare", "Technology", "Biotech", "Construction", "Consulting", "Pharmaceutical", "Art"]
    const [industry, setIndustry] = useState(null);
    const genderList = ["-- select --", "No Preference", "Female", "Male"]
    const [gender, setGender] = useState(null);
    const [hobbies, setHobbies] = useState([]);

    // useEffect(() => {
    //     // Get existing profile info from API
    // });

    useEffect(() => {
        // Get existing profile info from API
        console.log("editSchool", editSchool);
        console.log("school", school);
    }, [editSchool]);

    useEffect(() => {
        // Get existing profile info from API
        console.log("softSkills", softSkills)
    }, [softSkills]);

    const saveSchool = () => {
        setEditSchool(false);
        setSavedSchool(school);
    }

    const cancelSchool = () => {
        setEditSchool(false);
        setSchool(savedSchool);
    }

    const addSkill = (option, array) => {
        console.log("option", option)
        console.log("array", array, array.find(element => element === option))
        if(array.find(element => element === option)) {

            var index = array.indexOf(option);
            if (index !== -1) {
                var copyArray = [...array]; // make a separate copy of the array
                copyArray.splice(index, 1);
                console.log("softSkills now", copyArray)
                if(array === softSkills) {
                    setSoftSkills(copyArray)
                }
                else if(array === technicalInterests) {
                    setTechnicalInterests(copyArray)
                }
                
            }
        }
        else {
            if(array === softSkills) {
                setSoftSkills([...softSkills, option])
            }
            else if(array === technicalInterests) {
                setTechnicalInterests([...technicalInterests, option])
            }
        }
    };

    const removeSkill = (option, array) => {
        console.log(option, "option")
            var index = array.indexOf(option);
            if (index !== -1) {
                var copyArray = [...array]; // make a separate copy of the array
                copyArray.splice(index, 1);
                console.log("softSkills now", copyArray)
                if(array === softSkills) {
                    setSoftSkills(copyArray)
                }
                else if(array === technicalInterests) {
                    setTechnicalInterests(copyArray)
                }
                
            }
    };

    return (
        <div className="profile-wrapper d-flex justify-content-center align-items-center flex-wrap">
            <div className="profile-box mx-auto">
                <h1 className="profile-header text-center">Personal Profile</h1>
                {save ?
                    <div className="profile-edit-complete d-flex flex-column justify-content-center align-items-center">
                        <p>Profile Page Updated!</p>
                        <Button href="/home">
                            Back to Home
                        </Button>
                    </div>  
                :
                    <div className="profile-edit d-flex flex-column">
                        <div className="profile-name text-center">
                            Name: { window.sessionStorage.getItem('username')  + " " + window.sessionStorage.getItem('lastname')}
                        </div>
                        <div className="info">
                            <div className="label">Pronouns: </div>
                            <select className="pronouns-selector">
                                { pronounList.map((option) => {
                                        return <option value={option} onClick={() => setPronouns(option)}>{option}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="info justify-content-left align-items-center">
                            <div className="label">School: </div>
                            {editSchool ? 
                                null
                            :
                                <div className="school-data">
                                    {savedSchool}
                                </div> 
                            }   
                            { editSchool ? 
                                <div>
                                    <input className="school-input" type="text" onChange={(e) => setSchool(e.target.value)} value={school}/>
                                    <Button className="school-button" onClick={() => saveSchool()}>
                                        Save
                                    </Button>
                                    <Button className="school-button" onClick={() => cancelSchool()}>
                                        Cancel
                                    </Button>
                                </div>
                            : 
                                <div className="editInfo">
                                    <Button onClick={ () => setEditSchool(true)}>
                                        Edit
                                    </Button>
                                </div> 
                            }
                        </div>
                        <div className="info justify-content-left align-items-center">
                            <div className="label">Interests: </div>
                            <Button className="interests-expand-button" onClick={() => setDisplaySoftSkills(!displaySoftSkills)}>
                                {displaySoftSkills ? 
                                    "-"
                                :
                                    "+"
                                }
                            </Button>
                            <div className="soft-skills-display" style={{display: displaySoftSkills ? "block" : "none" }}>
                                {softSkillList.map((option) => {
                                    return (
                                        <div className="soft-skills-list" onClick={() => addSkill(option, softSkills)}> 
                                            {option}
                                            {softSkills.find(element => element === option) ? <FontAwesomeIcon icon={faCheck} /> : null }
                                        </div>
                                    )})
                                }
                            </div>
                        </div>
                        <div className="selected-options">
                            {softSkills.map((option) => {
                                return (
                                    <div className="remove-option btn-secondary"> 
                                        {option}
                                        <div onClick={() => removeSkill(option, softSkills)}><FontAwesomeIcon className="soft-skills-option" icon={faXmark} /></div>
                                    </div>
                                )})
                            }
                        </div>
                        <div className="info justify-content-left align-items-center">
                            <div className="label">
                                Technical Interests: 
                            </div>
                            <Button onClick={() => setDisplayTechnicalInterests(!displayTechnicalInterests)}>
                                {displayTechnicalInterests ? 
                                    "-"
                                :
                                    "+"
                                }
                            </Button>
                            <div className="technical-skills-display" style={{display: displayTechnicalInterests ? "block" : "none" }}>
                                {technicalInterestList.map((option) => {
                                    return (
                                        <div className="technical-skills-list"onClick={() => addSkill(option, technicalInterests)}> 
                                            {option}
                                            {technicalInterests.find(element => element === option) ? <FontAwesomeIcon icon={faCheck} /> : null }
                                        </div>
                                    )})
                                }
                            </div>
                        </div>
                        <div className="selected-options">
                            {technicalInterests.map((option) => {
                                return (
                                    <div className="remove-option btn-secondary"> 
                                        {option}
                                        <div onClick={() => removeSkill(option, technicalInterests)}><FontAwesomeIcon className="technical-skills-option" icon={faXmark} /></div>
                                    </div>
                                )})
                            }
                        </div>
                        <div className="info">
                            <div className="label">Desired industry: </div>
                            <select className="industry-selector">
                                { industryList.map((option) => {
                                    return <option value={option}onClick={() => setIndustry(option)}>{option}</option>
                                })
                                }
                            </select>
                        </div>
                        <div className="info">
                            <div className="label">Desired gender of mentor: </div>
                            <select className="gender-selector">
                                { genderList.map((option) => {
                                    return <option value={option} onClick={() => setGender(option)}>{option}</option>
                                })
                                }
                            </select>
                        </div>
                        <div className="info">
                            <div className="label">Badges Earned: </div>
                            <div className="wrapper">
                                <img src={consistentCritter} />
                                <div className="text">Kudos to you for logging onto platform for 3 consecutive days!</div>
                            </div>
                            <div className="wrapper">
                                <img src={meetingMaster} />
                                <div className="text">Kudos to you for scheduling 3+ meetings with your mentor!</div>
                            </div>
                            
                        
                        </div>
                        <Button type="submit" onClick={() => setSave(true)}>
                            Save
                        </Button>
                    </div>
                }
            </div>
        </div>
    )
};

export default Homepage;