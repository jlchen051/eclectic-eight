import React, { useState, useEffect } from 'react';
import './Profile.scss';

const Homepage = () => {
    const [school, setSchool] = useState("null");
    const [savedSchool, setSavedSchool] = useState("null");
    const [editSchool, setEditSchool] = useState(false);
    const softSkillList = ["Leadership", "Communication", "Time Management", "Interview", "Resume", "Personal Project"]
    const [softSkills, setSoftSkills] = useState([]);
    const [displaySoftSkills, setDisplaySoftSkills] = useState(false);
    const technicalInterestList = ["MatLab", "C++", "React", "Python"]
    const [technicalInterests, setTechnicalInterests] = useState([]);
    const [displayTechnicalInterests, setDisplayTechnicalInterests] = useState(false);
    const industryList = ["Healthcare", "Technology", "Biotech", "Construction", "Consulting", "Pharmaceutical", "Art"]
    const [industry, setIndustry] = useState(null);
    const genderList = ["No Preference", "Female", "Male"]
    const [gender, setGender] = useState(null);
    const [hobbies, setHobbies] = useState([]);

    // useEffect(() => {
    //     // Get existing profile info from API
    // });
    useEffect(() => {
        // Get existing profile info from API
        console.log("editSchool", editSchool)
        console.log("school", school)
    }, [editSchool]);
    useEffect(() => {
        // Get existing profile info from API
        console.log("softSkills", softSkills)
    }, [softSkills]);

    const saveSchool = () => {
        setEditSchool(false);
        setSavedSchool(school)
    }

    const cancelSchool = () => {
        setEditSchool(false);
        setSchool(savedSchool);
    }
    const addSkill = (option, array) => {
        console.log("option", option)
        console.log("array", array, array.find(element => element == option))
        if(array.find(element => element == option)) {

            var index = array.indexOf(option);
            if (index !== -1) {
                var copyArray = [...array]; // make a separate copy of the array
                copyArray.splice(index, 1);
                console.log("softSkills now", copyArray)
                if(array == softSkills) {
                    setSoftSkills(copyArray)
                }
                else if(array == technicalInterests) {
                    setTechnicalInterests(copyArray)
                }
                
            }
        }
        else {
            if(array == softSkills) {
                setSoftSkills([...softSkills, option])
            }
            else if(array == technicalInterests) {
                setTechnicalInterests([...technicalInterests, option])
            }
        }
    }
    

    return (
        <div className="profile">
            <h1>Personal Profile</h1>
            <div className="info">Name: Vicky</div>
            <div className="info">
                <div className="">School: </div>
                { editSchool ? 
                <div>
                    <input type="text" onChange={(e) => setSchool(e.target.value)} value={school}/>
                    <button onClick={() => cancelSchool()}>Cancel</button>
                    <button onClick={() => saveSchool()}>Save</button>
                </div>
                 : 
                <div className="editInfo">
                    <div>{savedSchool}</div>
                    <button onClick={ () => setEditSchool(true)}>Edit</button>
                </div> }
            </div>
            <div className="info">
                <div className="">Interests: </div>
                <button onClick={() => setDisplaySoftSkills(true)}>+</button>
                <div style={{display: displaySoftSkills ? "block" : "none" }}>
                    {
                        softSkillList.map((option) => {
                            return (
                                <div onClick={() => addSkill(option, softSkills)}> 
                                    {option}
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        softSkills.map((option) => {
                            return (
                                <div> 
                                    {option}
                                </div>
                            )
                        })
                    }
                </div>
                {/* <select>
                    {
                        softSkillList.map((skill) => {
                            return(
                                <option value={skill}>{skill}</option>
                            )
                        })
                    }
                </select> */}
                {/* <input type="submit" value="Submit" /> */}
            </div>
            <div className="info">
                <div className="">Technical Interests: </div>
                <button onClick={() => setDisplayTechnicalInterests(true)}>+</button>
                <div style={{display: displayTechnicalInterests ? "block" : "none" }}>
                    {
                        technicalInterestList.map((option) => {
                            return (
                                <div onClick={() => addSkill(option, technicalInterests)}> 
                                    {option}
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        technicalInterests.map((option) => {
                            return (
                                <div> 
                                    {option}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="info">
                <div className="">Desired industry: </div>
                <select>
                    { industryList.map((option) => {
                        return <option value={option} onClick={() => setIndustry(option)}>{option}</option>
                    })
                    }
                </select>
            </div>
            <div className="info">
                <div className="">Desired gender of mentor: </div>
                <select>
                    { genderList.map((option) => {
                        return <option value={option} onClick={() => setGender(option)}>{option}</option>
                    })
                    }
                </select>
            </div>
        </div>

       
        
    )
};

export default Homepage;